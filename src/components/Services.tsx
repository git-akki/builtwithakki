import { motion, Variants } from "framer-motion";
import { Bot, Megaphone, Globe, Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: Bot,
    tag: "Most Popular",
    title: "AI Automation Systems",
    pain: "Drowning in manual ops: order tracking, lead follow-up, appointment booking, daily research.",
    solution: "I build multi-agent AI systems that handle all of it 24/7 — at near-zero running cost.",
    features: [
      "Multi-agent orchestration (hub + spokes)",
      "Slack / WhatsApp / email integrations",
      "Churn rescue + lead capture agents",
      "Full audit trail & cost controls",
    ],
    result: "One client's 6-hour workflow: $6 to run overnight.",
    resultColor: "text-green-400",
    highlight: true,
  },
  {
    icon: Megaphone,
    tag: "Content Growth",
    title: "Content Marketing Pipeline",
    pain: "Posting inconsistently, losing DMs, spending hours on content that doesn't compound.",
    solution: "End-to-end pipeline: IG automation → lead capture → email sequences → analytics.",
    features: [
      "NotebookLM + MCP content engine",
      "ManyChat keyword automation",
      "MailerLite sequence integration",
      "One post triggers the whole funnel",
    ],
    result: "36K views, 533 saves, 59 followers — from one post.",
    resultColor: "text-purple-400",
    highlight: false,
  },
  {
    icon: Globe,
    tag: "Web & SaaS",
    title: "Website & SaaS Build",
    pain: "Site looks fine but doesn't convert. Or you need a custom app and can't afford a team.",
    solution: "Conversion-focused sites and full-stack apps using React, Supabase, and modern tooling.",
    features: [
      "React + Supabase / MERN stack",
      "Booking systems & e-commerce",
      "WordPress + WooCommerce",
      "Designed to close, not just impress",
    ],
    result: "7+ live projects across 3 countries.",
    resultColor: "text-primary",
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary border border-primary/20 bg-primary/5 rounded-full mb-4 uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pick Your Biggest Pain Point
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three focused offerings. Each built to solve one specific problem completely.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className={`relative group flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                service.highlight
                  ? "bg-primary/5 border-primary/30 hover:border-primary/60 shadow-lg shadow-primary/10"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full">
                    {service.tag}
                  </span>
                </div>
              )}
              {!service.highlight && (
                <span className="text-[10px] font-semibold text-primary/70 uppercase tracking-widest mb-4 block">
                  {service.tag}
                </span>
              )}
              {service.highlight && <div className="mt-3" />}

              <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-5 transition-colors ${
                service.highlight
                  ? "bg-primary/20 border border-primary/30"
                  : "bg-muted border border-border group-hover:bg-primary/10 group-hover:border-primary/20"
              }`}>
                <service.icon className={`w-5 h-5 ${service.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
              </div>

              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.pain}</p>
              <p className="text-sm text-foreground mb-5 leading-relaxed">{service.solution}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`pt-4 border-t ${service.highlight ? "border-primary/20" : "border-border"}`}>
                <p className={`text-sm font-semibold ${service.resultColor}`}>{service.result}</p>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Start with a Free Audit
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
