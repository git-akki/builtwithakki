import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Bot, Workflow, Globe, Smartphone, Check, ChevronDown, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: Bot,
    id: "SYS-01",
    label: "Flagship",
    title: "AI / Claude Code Agent Systems",
    desc: "Multi-agent systems built with Claude Code — hub-and-spoke orchestration that runs ops overnight, unattended.",
    proof: "$27 overnight run · 32/42 problems solved",
    items: ["Multi-agent orchestration (OpenClaw-style)", "Cost-controlled model routing", "Full audit trail, zero manual ops"],
    accent: true,
  },
  {
    icon: Workflow,
    id: "SYS-02",
    label: "Growth",
    title: "Automation & Content Pipelines",
    desc: "One piece of content or one lead, fully automated end to end — capture, distribution, follow-up, analytics.",
    proof: "36K views · 533 saves · 10hrs/week saved",
    items: ["NotebookLM + custom MCP content engine", "ManyChat / WhatsApp lead capture", "MailerLite email sequences"],
    accent: false,
  },
  {
    icon: Globe,
    id: "SYS-03",
    label: "Web",
    title: "Web Development",
    desc: "Conversion-focused sites and e-commerce. Designed to close, not just impress.",
    proof: "7+ live projects · 3 countries",
    items: ["React + Supabase", "WordPress + WooCommerce", "MERN full-stack"],
    accent: false,
  },
  {
    icon: Smartphone,
    id: "SYS-04",
    label: "App",
    title: "App Development",
    desc: "Booking systems, dashboards, and internal tools built to run without supervision.",
    proof: "24/7 booking · ₹0 running cost",
    items: ["WhatsApp-native booking systems", "Real-time scheduling & sync", "Custom internal SaaS tools"],
    accent: false,
  },
];

type Service = (typeof services)[number];

const ServiceCard = ({ service: s }: { service: Service }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp as unknown as Variants}
      className={`card-elevated relative flex flex-col rounded-lg border p-6 group ${
        s.accent
          ? "border-primary/25 bg-primary/[0.03] hover:border-primary/45"
          : "border-border/60 bg-card hover:border-primary/25"
      }`}
    >
      {/* Module header row: id + status */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-wide">{s.id}</span>
        <span
          className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-md ${
            s.accent ? "text-primary bg-primary/10" : "text-muted-foreground bg-muted"
          }`}
        >
          <span className="relative flex h-1 w-1">
            <span className="relative inline-flex rounded-full h-1 w-1 bg-emerald-500" />
          </span>
          {s.label}
        </span>
      </div>

      <div className={`w-9 h-9 rounded-md flex items-center justify-center mb-6 transition-colors ${
        s.accent
          ? "bg-primary/15 text-primary"
          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
      }`}>
        <s.icon className="w-[18px] h-[18px]" />
      </div>

      <h3 className="text-lg font-semibold mb-2 leading-snug">{s.title}</h3>
      <p className="text-[11px] font-mono text-muted-foreground/70 tabular-nums mb-5">{s.proof}</p>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-auto -mx-1 px-1 self-start inline-flex items-center gap-1 text-xs font-medium text-primary rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
      >
        Details
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pt-4">{s.desc}</p>
            <ul className="space-y-2 mt-3">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => (
  <section id="services" className="py-28 grid-texture">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp as unknown as Variants}
        viewport={{ once: true }}
        className="max-w-xl mb-16"
      >
        <p className="text-xs font-mono text-primary uppercase tracking-[0.15em] mb-4">// services.map()</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Four things I actually build.
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer as unknown as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeInUp as unknown as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10"
      >
        <a href="#book-call" className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all duration-200 font-medium">
          Curious how any of this works? Let's talk <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
