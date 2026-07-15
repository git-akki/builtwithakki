import { motion, Variants } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free AI Audit",
    description: "30 minutes on where you're bleeding time and money. No commitment.",
  },
  {
    number: "02",
    icon: Map,
    title: "System Design",
    description: "The exact stack to build, in what order, with real cost estimates.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Hand Off",
    description: "Built, tested, documented. It runs while you sleep.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three steps from first call to a system in production.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 relative z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-2">
                Step {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
