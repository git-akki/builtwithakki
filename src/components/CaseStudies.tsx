import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const caseStudies = [
  {
    tag: "AI Automation · Hair Mastery",
    title: "AI Operations System for a Hair Education Business",
    problem: "Owner was manually managing orders, appointments, and leads across WhatsApp, IG, and email — every day, hours of repetitive coordination.",
    built: "OpenClaw multi-agent system: hub-and-spoke architecture with Atlas as orchestrator. Vendor/order Slack bot, churn rescue agent, IG lead pipeline, and email PDF compiler. 32 of 42 known business problems solved.",
    outcome: "6 hours of overnight research, outreach to 50 prospects, and full file organisation — total cost: $6. Zero manual order coordination.",
    metrics: [
      { value: "$6", label: "Overnight run cost" },
      { value: "32/42", label: "Problems automated" },
      { value: "0", label: "Manual ops remaining" },
    ],
    primary: true,
  },
  {
    tag: "AI Automation · Salon",
    title: "24/7 AI Receptionist for a Premium Salon",
    problem: "₹20,000+/month in missed revenue from customers who called after hours, got no answer, and booked elsewhere.",
    built: "Appointment automation system: 24/7 booking via WhatsApp, automatic barber assignment, no double-booking logic, real-time schedule sync. Zero running cost architecture.",
    outcome: "100% of after-hours booking attempts captured. Staff freed from phone coordination. System runs with no ongoing API cost.",
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
    problem: "Content was manual, inconsistent, and disconnected from lead capture. Posts didn't convert to DMs. Email list wasn't growing.",
    built: "NotebookLM + custom MCP server + ManyChat keyword automation + MailerLite sequences. Each post triggers its own automation. API POST (not native integration) to pass custom field tags from day one.",
    outcome: "36,000 views · 1,175 comments · 533 saves · 59 new followers — from one post. 10 hours/week saved on content ops.",
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
    problem: "Generic portfolios and WooCommerce stores that look fine but don't close. Clients needed sites that work as sales assets, not digital brochures.",
    built: "Grooming e-commerce (Switzerland) · Hair Mastery e-learning platform · Visitor Management System (Houston) · Vantalo agency portfolio · Wig shop storefront. Stack varies: React + Supabase, WordPress + WooCommerce, MERN.",
    outcome: "Every project is live and in active use. Conversion-focused from the first component — not retrofitted.",
    metrics: [
      { value: "7+", label: "Live projects" },
      { value: "3", label: "Countries" },
      { value: "100%", label: "Still live & in use" },
    ],
    primary: false,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
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
          viewport={{ once: false }}
          className="space-y-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className={`group rounded-xl border p-6 sm:p-8 transition-colors ${
                study.primary
                  ? "bg-primary/5 border-primary/30 hover:border-primary/60"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:gap-12">
                {/* Left: content */}
                <div className="flex-1 mb-6 lg:mb-0">
                  <span className="inline-block text-xs font-medium text-primary/80 uppercase tracking-wider mb-3">
                    {study.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{study.title}</h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Problem</span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">What Was Built</span>
                      <p className="text-foreground mt-1 leading-relaxed">{study.built}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Outcome</span>
                      <p className="text-foreground mt-1 leading-relaxed font-medium">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Right: metrics */}
                <div className="lg:w-56 flex-shrink-0">
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className={`rounded-lg p-4 text-center lg:text-left ${
                          study.primary ? "bg-primary/10" : "bg-background"
                        }`}
                      >
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
