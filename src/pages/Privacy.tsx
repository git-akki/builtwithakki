import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reopenCookieConsent } from "@/components/CookieConsent";

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main id="main-content" className="pt-16">
      <div className="container max-w-2xl py-20 sm:py-28">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.15em] mb-4">
          // privacy.md
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated August 19, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">What I collect</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium text-foreground">Contact form.</span> If you send
                a message, your name, email, and message are stored in a database (Supabase)
                and trigger an email notification to me (via Resend). That's it — used only to
                reply to you.
              </li>
              <li>
                <span className="font-medium text-foreground">First-touch attribution.</span>{" "}
                If you accept the cookie prompt, this site notes which link or post brought you
                here (source, campaign, landing page, timestamp) in your browser's local
                storage — not a third-party cookie, not shared with any ad network. If you
                decline, none of this is stored.
              </li>
              <li>
                <span className="font-medium text-foreground">Performance metrics.</span> This
                site is hosted on Vercel, which uses Speed Insights to measure page load
                performance. It's cookieless and doesn't collect personal data — aggregate
                numbers only.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Who it's shared with</h2>
            <p>
              Supabase (database), Resend (email delivery), and Vercel (hosting) process data
              on my behalf to run this site — none of them get to use it for their own
              purposes. If you click "Schedule a call," you'll leave this site for Cal.com,
              which has its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Cookies & local storage</h2>
            <p>
              No ad trackers, no analytics pixels, no third-party cookies. The only client-side
              storage this site uses is the first-touch attribution note above, and it's gated
              behind the cookie prompt.
            </p>
            <button
              type="button"
              onClick={reopenCookieConsent}
              className="mt-3 text-sm font-medium text-primary hover:underline underline-offset-2"
            >
              Change cookie preferences
            </button>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Your rights</h2>
            <p>
              Want to see or delete what you sent through the contact form? Email me and I'll
              handle it directly — no ticket system, no runaround. Clearing your browser's
              local storage removes the attribution note immediately, no need to ask.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
            <p>
              <a
                href="mailto:work.17akki.akash@gmail.com"
                className="text-primary underline underline-offset-2"
              >
                work.17akki.akash@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
