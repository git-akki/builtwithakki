import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap, Bot, TrendingDown, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const floatingCards = [
  {
    icon: TrendingDown,
    label: "AI Cost Reduced",
    value: "97%",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    delay: 0,
    position: "top-[15%] left-[3%]",
  },
  {
    icon: Bot,
    label: "Problems Automated",
    value: "32/42",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    delay: 0.3,
    position: "top-[20%] right-[3%]",
  },
  {
    icon: Clock,
    label: "Overnight Run Cost",
    value: "$6",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    delay: 0.6,
    position: "bottom-[25%] left-[2%]",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating metric cards (desktop only) */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + card.delay, duration: 0.6 }}
          className={`hidden lg:flex absolute ${card.position} items-center gap-2.5 px-3 py-2.5 rounded-xl border bg-card/80 backdrop-blur-sm shadow-lg`}
        >
          <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${card.bg}`}>
            <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
          </div>
          <div>
            <p className={`text-base font-bold leading-none ${card.color}`}>{card.value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{card.label}</p>
          </div>
        </motion.div>
      ))}

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-3xl mt-4 mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium text-primary">Available for new projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp as unknown as Variants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Your Business{" "}
            <span className="relative">
              <span className="text-primary">on Autopilot</span>
              <motion.span
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              />
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeInUp as unknown as Variants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build AI automation systems that replace manual ops, cut AI costs by{" "}
            <span className="text-foreground font-medium">97%</span>, and run your
            content pipeline while you sleep.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#book-call"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200"
            >
              <Zap className="w-4 h-4" />
              Get a Free AI Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              variants={fadeInUp as unknown as Variants}
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-foreground font-medium rounded-xl hover:bg-card hover:border-primary/40 transition-all duration-200"
            >
              See Case Studies
            </motion.a>
          </motion.div>

          {/* Social proof micro-line */}
          <motion.div
            variants={fadeInUp as unknown as Variants}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {["$6 overnight ops", "97% cost reduction", "36K views/post", "32 problems automated"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
