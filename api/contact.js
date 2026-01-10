import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: "Server configuration error: Missing environment variables" });
  }

  try {
    // Initialize clients inside the handler to ensure env vars are loaded
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = req.body;
    const { name, email, message, source = "portfolio-form", company } = body;

    // Honeypot check
    if (company) {
      return res.status(200).json({ success: true });
    }

    if (!name || !email) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // Save to DB
    const { error } = await supabase.from("leads").insert([
      { name, email, message, source }
    ]);

    if (error) throw error;

    // Email notification
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "New Portfolio Lead",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message || "-"}</p>
        <p><b>Source:</b> ${source}</p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
