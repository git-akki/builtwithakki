import { motion, Variants } from "framer-motion";
import { TrendingDown, DollarSign, Cpu, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const stats = [
  {
    icon: TrendingDown,
    value: "97%",
    label: "AI Cost Reduction",
    sublabel: "vs. unoptimized setups",
    color: "text-green-400",
    glow: "shadow-green-400/20",
    bg: "bg-green-400/5 border-green-400/15",
    iconBg: "bg-green-400/10",
  },
  {
    icon: DollarSign,
    value: "$6",
    label: "Overnight Run Cost",
    sublabel: "6 hrs research + 50 outreach",
    color: "text-yellow-400",
    glow: "shadow-yellow-400/20",
    bg: "bg-yellow-400/5 border-yellow-400/15",
    iconBg: "bg-yellow-400/10",
  },
  {
    icon: Cpu,
    value: "32/42",
    label: "Problems Automated",
    sublabel: "multi-agent system",
    color: "text-primary",
    glow: "shadow-primary/20",
    bg: "bg-primary/5 border-primary/15",
    iconBg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    value: "36K",
    label: "Views From One Post",
    sublabel: "content pipeline output",
    color: "text-purple-400",
    glow: "shadow-purple-400/20",
    bg: "bg-purple-400/5 border-purple-400/15",
    iconBg: "bg-purple-400/10",
  },
];

const SocialProofBar = () => {
  return (
    <section className="py-16 border-y border-border/60">
      <div className="container">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-muted-foreground/50 uppercase tracking-widest mb-8"
        >
          Real numbers from live systems
        </motion.p>
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className={`relative p-4 rounded-xl border ${stat.bg} shadow-md ${stat.glow} group`}
            >
              {/* Live pulse dot */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-pulse" style={{ color: "inherit" }}>
                <span className={`block w-1.5 h-1.5 rounded-full ${stat.color === "text-green-400" ? "bg-green-400" : stat.color === "text-yellow-400" ? "bg-yellow-400" : stat.color === "text-primary" ? "bg-primary" : "bg-purple-400"} animate-pulse`} />
              </div>

              <div className={`inline-flex w-8 h-8 rounded-lg items-center justify-center mb-3 ${stat.iconBg}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>

              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-0.5 tabular-nums`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground/80 leading-tight">{stat.label}</div>
              <div className="text-[11px] text-muted-foreground/60 mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
