import { useRef } from "react";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import TechStack from "./TechStack";

const MagneticButton = ({ children, className, href }: { children: React.ReactNode; className: string; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  return (
    <section className="relative flex flex-col overflow-hidden grid-texture">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Status readout */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-border/60 bg-card/60 mb-10 font-mono"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 status-dot" />
            </span>
            <span className="text-[11px] tracking-wide text-muted-foreground">
              STATUS: available · accepting new builds
            </span>
          </motion.div>

          {/* Name-forward kicker */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-sm font-mono text-muted-foreground mb-4 tracking-wide"
          >
            Hi, I'm Akash Yadav.
          </motion.p>

          {/* Headline — max 6 words per line */}
          <motion.h1
            variants={fadeInUp as unknown as Variants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance mb-6 leading-[1.08]"
          >
            I build systems that run{" "}
            <span className="text-primary">without me.</span>
          </motion.h1>

          {/* Subhead — max 2 lines */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Web, apps, and AI agent systems — built for real clients,
            shipped, and left running.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <MagneticButton
              href="#case-studies"
              className="shimmer btn-premium group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md"
            >
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              See the work
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.span>
            </MagneticButton>
            <MagneticButton
              href="#book-call"
              className="shimmer inline-flex items-center gap-2 px-5 py-2.5 border border-border/70 text-sm font-medium rounded-md hover:bg-card hover:border-primary/30 transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          {/* Proof readout */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono"
          >
            {[
              { num: "97%", label: "AI cost cut" },
              { num: "$27", label: "overnight run" },
              { num: "36K", label: "views / post" },
              { num: "7+", label: "live systems" },
            ].map(({ num, label }) => (
              <span key={num} className="flex flex-col items-center gap-0.5">
                <span className="text-base font-semibold text-foreground tabular-nums">{num}</span>
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground/60">{label}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tool marquee — full width, at bottom of hero */}
      <TechStack />
    </section>
  );
};

export default Hero;
