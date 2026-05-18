import { motion, Variants } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const redFlags = [
  {
    flag: "Your AI tool runs in the background 24/7 — costing money even when nobody's using it.",
  },
  {
    flag: "You're using the most expensive AI model for the simplest tasks — like hiring a surgeon to change a lightbulb.",
  },
  {
    flag: "Every AI request re-reads your entire history from scratch — like re-reading a 500-page book every time you want to check the last line.",
  },
  {
    flag: "You have no idea what your AI actually costs each month until the bill arrives.",
  },
  {
    flag: "Your business data is passing through AI tools with no access control or audit trail.",
  },
];

const AiAuditCTA = () => {
  return (
    <section id="ai-audit" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp as unknown as Variants}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-destructive border border-destructive/20 rounded-full mb-4">
              Free AI Audit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Is Your AI System Burning Money?
            </h2>
            <p className="text-muted-foreground text-lg">
              Most businesses deploying AI are paying a 90%+ inefficiency tax — and don't know it.
              Here are the five red flags.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer as unknown as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-3 mb-12"
          >
            {redFlags.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp as unknown as Variants}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{item.flag}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              If any of these sound familiar, you're likely wasting 80–97% of your AI spend.
              I'll audit your setup in 30 minutes — free.
            </p>
            <a
              href="#book-call"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-colors hover:bg-primary/90 text-lg"
            >
              Book Your Free AI Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">30 minutes · No commitment · I'll tell you exactly where you're bleeding</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiAuditCTA;
