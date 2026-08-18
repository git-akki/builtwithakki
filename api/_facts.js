/**
 * Every claim this site makes, in one place.
 *
 * The chat assistant and the page both read from here, so a number can never
 * say one thing on the homepage and another in the chat — which is exactly what
 * happened when the overnight run cost was updated on the page but not in the
 * assistant's prompt.
 *
 * RULE: nothing goes in this file without a receipt. No estimates, no rounding
 * up, no "roughly". If it cannot be pointed at, it does not belong here.
 *
 * Files starting with _ are not routed by Vercel, so this is not a public
 * endpoint.
 */

export const PROFILE = {
  name: "Akash Yadav",
  site: "buildwithakash.in",
  role: "AI systems and automation engineer",
  based: "India — works with clients in Germany, Switzerland, the USA and Thailand",
  background:
    "Self-taught. Small town in UP. Content creator since 2016, then into freelancing and full-time systems work.",
};

export const BOOKING = {
  base: "https://cal.com/akash-yadav-xfz9ms",
  /** 30 minutes each, Tue/Thu/Sat 13:00–20:00 IST. */
  types: {
    automation: {
      slug: "automation-audit",
      label: "Automation Audit",
      when: "ops, agents, order/lead/appointment handling, anything running by hand today",
    },
    content: {
      slug: "content-audit",
      label: "Content System Audit",
      when: "content production, distribution, IG/email pipelines",
    },
    website: {
      slug: "website-project",
      label: "Website Project Call",
      when: "a site or app to build, rebuild, or make convert",
    },
  },
};

export const bookingUrl = (kind) =>
  `${BOOKING.base}/${(BOOKING.types[kind] ?? BOOKING.types.automation).slug}`;

export const SERVICES = [
  {
    id: "automation",
    title: "AI Automation",
    promise:
      "Multi-agent systems that handle daily ops — orders, leads, appointments — around the clock at near-zero running cost.",
    includes: [
      "Hub-and-spoke agent architecture",
      "Slack / WhatsApp / email integration",
      "Cost controls and an audit trail",
    ],
    proof: "$27 overnight run · 32 of 42 problems solved",
  },
  {
    id: "content",
    title: "Content Pipeline",
    promise:
      "One piece of content, distributed end to end — Instagram to DMs to email sequences to analytics.",
    includes: [
      "NotebookLM + custom MCP content engine",
      "ManyChat keyword automation",
      "MailerLite email sequences",
    ],
    proof: "36K views · 533 saves · 59 follows from one post",
  },
  {
    id: "website",
    title: "Website & App Build",
    promise:
      "Conversion-focused sites and full-stack apps. Built to close, not just to look expensive.",
    includes: [
      "React + Supabase / MERN",
      "Booking systems and e-commerce",
      "WordPress + WooCommerce",
    ],
    proof: "7+ live projects · 3 countries",
  },
];

export const CASE_STUDIES = [
  {
    id: "hair-mastery",
    client: "Hair education business",
    title: "AI operations system",
    problem:
      "Hours of daily order and lead coordination spread across WhatsApp, Instagram and email.",
    built: [
      "OpenClaw multi-agent system, hub-and-spoke with a coordinator agent",
      "Vendor and order bot in Slack",
      "Churn rescue for failed subscription payments",
      "Instagram lead pipeline",
      "Email sequence PDF compiler",
    ],
    numbers: [
      ["32 of 42", "known problems automated"],
      ["$27", "overnight run cost"],
      ["0", "manual order coordination left"],
    ],
  },
  {
    id: "salon",
    client: "Premium salon",
    title: "24/7 booking receptionist",
    problem: "After-hours callers were booking somewhere else.",
    built: [
      "WhatsApp booking, always on",
      "Automatic barber assignment",
      "Real-time schedule sync, no double-bookings",
    ],
    numbers: [
      ["₹20K+", "monthly revenue protected"],
      ["24/7", "booking availability"],
      ["₹0", "running cost"],
    ],
  },
  {
    id: "churn-rescue",
    client: "Hair education business",
    title: "Subscription churn rescue",
    problem:
      "60 subscriptions sitting on hold from failed payments, with no dunning. Stripe retried three times silently, then the customer was gone.",
    built: [
      "WooCommerce + Stripe + MailerLite, wired together",
      "Email carrying the exact decline reason from Stripe",
      "Payment progress shown to the customer",
    ],
    numbers: [
      ["30%+", "of failed payments recovered"],
      ["1 week", "to build"],
      ["0", "manual chasing"],
    ],
  },
  {
    id: "content-engine",
    client: "Hair education business",
    title: "Content engine",
    problem: "Course material sitting unused while content took a full day a week.",
    built: [
      "12 NotebookLM notebooks of course transcripts",
      "Custom MCP server bridging them to Claude Code",
      "One prompt returns carousels, hooks and caption drafts",
    ],
    numbers: [
      ["10 hrs", "saved per week"],
      ["100+", "email sequences written in 30 minutes"],
    ],
  },
];

export const PROCESS = [
  ["Free 30-minute audit", "No commitment. You leave knowing what to automate first and what it costs."],
  ["System design", "The exact stack, with real cost and time estimates before anything is built."],
  ["Build and hand off", "A working system, documented, that you own."],
];

/**
 * What the assistant must never do. Kept next to the facts on purpose — the
 * numbers and the rules about them belong together.
 */
export const GUARDRAILS = [
  "Never invent a number, a client name, or a result. If it is not in these facts, say you do not know and offer the audit.",
  "Never name a client. Describe them by category — 'a hair education business', 'a premium salon'.",
  "Never claim a technology was used on a project unless it is listed here.",
  "If asked about pricing, say it depends on scope and that the audit produces a real number. Do not guess a figure.",
];
