import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const stats = [
  { value: "97%", label: "AI Cost Reduction" },
  { value: "$6", label: "Overnight Research Run" },
  { value: "32/42", label: "Problems Solved (Multi-Agent)" },
  { value: "36K", label: "Views From One Post" },
];

const SocialProofBar = () => {
  return (
    <section className="py-12 border-y border-border bg-card/40">
      <div className="container">
        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
