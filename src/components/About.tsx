import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const milestones = [
  {
    year: "2016",
    event: "Started building on the internet",
    detail: "Grew two pages to 47K + 62K followers. No team, no budget.",
  },
  {
    year: "2022",
    event: "Went full freelance",
    detail: "₹7–8L in 3 months, building for clients in 3 countries.",
  },
  {
    year: "2024",
    event: "Went deep on AI automation",
    detail: "Built OpenClaw — 32/42 business problems solved for one client.",
  },
  {
    year: "Now",
    event: "Building AI infrastructure for SMBs",
    detail: "7+ live systems, 3 countries, real metrics on every project.",
  },
];

const beliefs = [
  "Automation built right costs less than a single employee.",
  "Most businesses pay a 90%+ AI inefficiency tax without knowing it.",
  "The best system is one you never have to touch again.",
];

const About = () => (
  <section id="about" className="py-28 border-t border-border/50">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left — story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: true }}
        >
          <motion.p variants={fadeInUp as unknown as Variants} className="text-xs font-medium text-primary uppercase tracking-[0.15em] mb-6">
            About
          </motion.p>

          <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">
            I've been building on<br />the internet since 2016.
          </motion.h2>

          <motion.div variants={staggerContainer as unknown as Variants} className="text-muted-foreground leading-relaxed">
            <motion.p variants={fadeInUp as unknown as Variants} className="max-w-md">
              From content pages to client sites to AI infrastructure — one lesson the whole way: systems matter more than effort. Now I build the systems that get business owners out of their own ops.
            </motion.p>
          </motion.div>

          {/* Beliefs */}
          <motion.div variants={fadeInUp as unknown as Variants} className="mt-10 space-y-3">
            {beliefs.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp as unknown as Variants} className="mt-10">
            <a
              href="#book-call"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200"
            >
              Book a free 30-min audit <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/60" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeInUp as unknown as Variants} className="flex gap-6">
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className={`w-[38px] h-[38px] rounded-full border flex items-center justify-center text-[10px] font-bold tabular-nums ${
                    m.year === "Now"
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-card border-border/60 text-muted-foreground"
                  }`}>
                    {m.year === "Now" ? "NOW" : m.year.slice(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className="text-sm font-semibold mb-1">{m.event}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
