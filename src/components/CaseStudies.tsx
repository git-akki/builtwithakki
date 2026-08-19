import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
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
    hero: { numeric: 27, prefix: "$", suffix: "", label: "Overnight run cost" },
    secondary: [
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
    hero: { numeric: 20, prefix: "₹", suffix: "K+", label: "Monthly revenue protected" },
    secondary: [
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
    hero: { numeric: 36, prefix: "", suffix: "K", label: "Views from one post" },
    secondary: [
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
    hero: { numeric: 7, prefix: "", suffix: "+", label: "Live projects" },
    secondary: [
      { value: "3", label: "Countries" },
      { value: "100%", label: "Still live & in use" },
    ],
    primary: false,
  },
];

const useCounter = (target: number, duration = 1400, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const CaseStudyCard = ({ study, index }: { study: (typeof caseStudies)[number]; index: number }) => {
  const [open, setOpen] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statRef, { once: true, margin: "-80px" });
  const count = useCounter(study.hero.numeric, 1600, inView);

  return (
    <motion.div
      variants={fadeInUp as unknown as Variants}
      className={`group grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start py-14 sm:py-16 ${
        index !== 0 ? "border-t border-border/60" : ""
      }`}
    >
      {/* Left: content */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-primary/80 uppercase tracking-[0.1em]">
            {study.tag}
          </span>
          {study.primary && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-md text-primary bg-primary/10">
              <span className="relative flex h-1 w-1">
                <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500" />
              </span>
              Flagship
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-[1.15]">{study.title}</h3>

        <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
          {study.summary}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-1">
          {study.systems.map((system) => (
            <span
              key={system}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-background/60 border border-border/60 text-muted-foreground"
            >
              {system}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="-mx-1 mt-3 px-1 inline-flex items-center gap-1 text-sm font-medium text-primary rounded-md hover:gap-1.5 transition-all cursor-pointer"
        >
          Learn more
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl pt-4">
                {study.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: hero stat, Apple-style */}
      <div ref={statRef} className="lg:pt-1">
        <div className="text-6xl sm:text-7xl font-bold text-primary tabular-nums tracking-tight leading-none">
          {study.hero.prefix}
          {inView ? count : 0}
          {study.hero.suffix}
        </div>
        <div className="text-sm text-muted-foreground mt-2">{study.hero.label}</div>

        <div className="flex gap-8 mt-8 pt-8 border-t border-border/50">
          {study.secondary.map((metric, i) => (
            <div key={i}>
              <div className="text-xl font-semibold tabular-nums">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{metric.label}</div>
            </div>
          ))}
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
          <p className="text-xs font-mono text-primary uppercase tracking-[0.15em] mb-4">// case_studies.map()</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Real systems. Real numbers.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
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
