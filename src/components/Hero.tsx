import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mt-4 mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp as unknown as Variants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Your Business <span className="text-primary">on Autopilot</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            I build AI automation systems that replace manual ops, cut AI costs by 97%,
            and run your content pipeline while you sleep.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#book-call"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-colors duration-300 hover:bg-primary/90"
            >
              <Zap className="w-4 h-4" />
              Get a Free AI Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-colors duration-300 hover:bg-card hover:border-primary/50"
            >
              See Case Studies
            </motion.a>
          </motion.div>

          {/* Quick proof line */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="mt-8 text-sm text-muted-foreground/70"
          >
            Overnight research runs for $6 · 97% AI cost reduction · 36K-view content systems
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
