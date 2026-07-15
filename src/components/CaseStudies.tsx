import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const caseStudies = [
  {
    tag: "AI Automation · Hair Mastery",
    title: "AI Operations System for a Hair Education Business",
    summary:
      "Hours of daily order and lead coordination across WhatsApp, IG, and email — now handled overnight by a multi-agent system.",
    detail:
      "OpenClaw multi-agent system: hub-and-spoke architecture with Atlas as orchestrator. Vendor/order Slack bot, churn rescue agent, IG lead pipeline, and email PDF compiler. One overnight run: 6 hours of research, outreach to 50 prospects, full file organisation — total cost $27.",
    systems: ["OpenClaw multi-agent", "Slack order bot", "Churn rescue", "IG lead pipeline"],
    metrics: [
      { value: "$27", label: "Overnight run cost" },
      { value: "32/42", label: "Problems automated" },
      { value: "0", label: "Manual ops remaining" },
    ],
    primary: true,
  },
  {
    tag: "AI Automation · Salon",
    title: "24/7 AI Receptionist for a Premium Salon",
    summary:
      "After-hours callers were booking elsewhere. Now WhatsApp books them around the clock — no double-bookings, no running cost.",
    detail:
      "Appointment automation with 24/7 booking via WhatsApp, automatic barber assignment, no double-booking logic, and real-time schedule sync. Zero-running-cost architecture: 100% of after-hours booking attempts captured, staff freed from phone coordination.",
    systems: ["WhatsApp booking", "Auto barber assignment", "Real-time schedule sync"],
    metrics: [
      { value: "₹20K+", label: "Monthly revenue protected" },
      { value: "24/7", label: "Booking availability" },
      { value: "₹0", label: "Running cost" },
    ],
    primary: false,
  },
  {
    tag: "Content Pipeline · Hair Mastery",
    title: "Content Marketing Pipeline That Runs on Its Own",
    summary:
      "Content was manual and disconnected from lead capture. Now every post triggers its own DM → email automation.",
    detail:
      "NotebookLM + custom MCP server + ManyChat keyword automation + MailerLite sequences. Each post triggers its own automation with custom field tags passed via API from day one. One post: 36,000 views, 1,175 comments, 533 saves, 59 new followers — 10 hours/week saved on content ops.",
    systems: ["NotebookLM engine", "Custom MCP server", "ManyChat", "MailerLite"],
    metrics: [
      { value: "36K", label: "Views from one post" },
      { value: "533", label: "Saves" },
      { value: "10hrs", label: "Saved per week" },
    ],
    primary: false,
  },
  {
    tag: "Web & SaaS · Multiple Clients",
    title: "Websites & Applications That Actually Convert",
    summary:
      "Conversion-focused sites and apps for clients across three countries — every one live and in active use.",
    detail:
      "Grooming e-commerce (Switzerland), Hair Mastery e-learning platform, Visitor Management System (Houston), Vantalo agency portfolio, and a wig shop storefront. Stack matched to each job: React + Supabase, WordPress + WooCommerce, MERN. Conversion-focused from the first component — not retrofitted.",
    systems: ["React + Supabase", "WordPress + WooCommerce", "MERN"],
    metrics: [
      { value: "7+", label: "Live projects" },
      { value: "3", label: "Countries" },
      { value: "100%", label: "Still live & in use" },
    ],
    primary: false,
  },
];

const CaseStudyCard = ({ study }: { study: (typeof caseStudies)[number] }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp as unknown as Variants}
      className={`card-elevated group rounded-xl border p-6 sm:p-8 ${
        study.primary
          ? "bg-primary/5 border-primary/30 hover:border-primary/60"
          : "bg-card border-border hover:border-primary/30"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center">
        {/* Left: content */}
        <div className="flex-1 mb-6 lg:mb-0">
          <span className="inline-block text-xs font-medium text-primary/80 uppercase tracking-wider mb-3">
            {study.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">{study.title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-5">
            {study.summary}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {study.systems.map((system) => (
              <span
                key={system}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-background/60 border border-border/60 text-muted-foreground"
              >
                {system}
              </span>
            ))}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-primary rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
            >
              Full breakdown
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl pt-4">
                  {study.detail}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: metrics */}
        <div className="lg:w-[360px] flex-shrink-0">
          <div className="grid grid-cols-3 gap-3">
            {study.metrics.map((metric, i) => (
              <div
                key={i}
                className={`rounded-lg p-4 text-center ${
                  study.primary ? "bg-primary/10" : "bg-background"
                }`}
              >
                <div className="text-2xl font-bold text-primary tabular-nums">{metric.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Systems. Real Numbers.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project here is live, in use, and measured.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#book-call"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Want results like these? Let's talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
