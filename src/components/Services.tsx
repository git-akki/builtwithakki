import { motion, Variants } from "framer-motion";
import { Bot, Megaphone, Globe, Check, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: Bot,
    label: "Most requested",
    title: "AI Automation",
    desc: "Multi-agent systems that handle your daily ops — orders, leads, appointments — 24/7 at near-zero cost.",
    proof: "$6 overnight run · 32/42 problems solved",
    items: ["Hub-and-spoke agent architecture", "Slack / WhatsApp / email integrations", "Cost controls & audit trail"],
    accent: true,
  },
  {
    icon: Megaphone,
    label: "Content growth",
    title: "Content Pipeline",
    desc: "One piece of content, fully automated distribution — IG → DMs → email sequences → analytics.",
    proof: "36K views · 533 saves · 59 new followers",
    items: ["NotebookLM + MCP content engine", "ManyChat keyword automation", "MailerLite email sequences"],
    accent: false,
  },
  {
    icon: Globe,
    label: "Web & SaaS",
    title: "Website & App Build",
    desc: "Conversion-focused sites and full-stack apps. Designed to close, not just impress.",
    proof: "7+ live projects · 3 countries",
    items: ["React + Supabase / MERN", "Booking systems & e-commerce", "WordPress + WooCommerce"],
    accent: false,
  },
];

const Services = () => (
  <section id="services" className="py-28">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp as unknown as Variants}
        viewport={{ once: false }}
        className="max-w-xl mb-16"
      >
        <p className="text-xs font-medium text-primary uppercase tracking-[0.15em] mb-4">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          One problem. One solution. Real numbers.
        </h2>
        <p className="text-muted-foreground">Pick the offering that matches your biggest pain right now.</p>
      </motion.div>

      <motion.div
        variants={staggerContainer as unknown as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeInUp as unknown as Variants}
            className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 group ${
              s.accent
                ? "border-primary/25 bg-primary/[0.03] hover:border-primary/45"
                : "border-border/60 bg-card hover:border-primary/25"
            }`}
          >
            {s.accent && (
              <span className="absolute top-5 right-5 text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {s.label}
              </span>
            )}

            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-6 transition-colors ${
              s.accent
                ? "bg-primary/15 text-primary"
                : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            }`}>
              <s.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
            </div>

            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

            <ul className="space-y-2 mb-6 flex-1">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className={`pt-5 border-t ${s.accent ? "border-primary/15" : "border-border/50"}`}>
              <p className="text-xs font-medium text-muted-foreground/70 tabular-nums">{s.proof}</p>
            </div>
          </motion.div>
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
          Start with a free 30-min audit <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
