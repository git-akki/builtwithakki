import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

interface Stat {
  value: string;
  label: string;
  sub: string;
  numeric: number;
  prefix: string;
  suffix: string;
}

const stats: Stat[] = [
  { value: "97%",   label: "AI cost reduction",          sub: "vs. unoptimised setups", numeric: 97,  prefix: "",  suffix: "%" },
  { value: "$27",   label: "Overnight research run",      sub: "6 hrs · 50 prospects",   numeric: 27,  prefix: "$", suffix: "" },
  { value: "32",    label: "Business problems automated", sub: "out of 42 identified",   numeric: 32,  prefix: "",  suffix: "" },
  { value: "36K",   label: "Views from one post",         sub: "content pipeline output", numeric: 36,  prefix: "",  suffix: "K" },
];

const useCounter = (target: number, duration = 1400, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const CounterStat = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.numeric, 1600, inView);

  return (
    <div ref={ref} className="flex flex-col gap-1 px-8 py-8 bg-background">
      <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums tracking-tight">
        {inView ? `${stat.prefix}${count}${stat.suffix}` : "—"}
      </span>
      <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
      <span className="text-xs text-muted-foreground/50 mt-0.5">{stat.sub}</span>
    </div>
  );
};

const SocialProofBar = () => (
  <section className="py-20 border-b border-border/50">
    <div className="container">
      <motion.div
        variants={staggerContainer as unknown as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-lg overflow-hidden"
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeInUp as unknown as Variants}>
            <CounterStat stat={s} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SocialProofBar;
