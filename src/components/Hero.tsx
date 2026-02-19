import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
            Building <span className="text-primary">Digital Systems</span>
            <br />
            That Drive Growth
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Web & AI Systems Engineer helping founders and startups build high-performing websites,
            scalable applications, and AI-powered automation.
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
              Book a Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-colors duration-300 hover:bg-card hover:border-primary/50"
            >
              View Services
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp as unknown as Variants} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
