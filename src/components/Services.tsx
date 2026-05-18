import { motion, Variants } from "framer-motion";
import { Bot, Megaphone, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    pain: "Your team is doing the same manual tasks every day — order tracking, lead follow-up, content scheduling, appointment booking.",
    solution: "I build multi-agent AI systems that handle those tasks 24/7, at near-zero cost.",
    result: "One client's 6-hour overnight workflow now costs $6 to run.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing Pipeline",
    pain: "You're posting inconsistently, losing leads between DMs and email, and spending hours on content that doesn't compound.",
    solution: "I build end-to-end pipelines: IG automation → lead capture → email sequences → analytics.",
    result: "36K views, 533 saves, 59 new followers from a single post using this system.",
  },
  {
    icon: Globe,
    title: "Website & SaaS Build",
    pain: "Your website looks fine but doesn't convert. Or you need a custom app and can't afford a full dev team.",
    solution: "I build conversion-focused sites and full-stack apps using React, Supabase, and modern tooling.",
    result: "From landing page to production SaaS — designed to close, not just impress.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Three Ways I Can Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick the one that matches your biggest pain right now.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{service.pain}</p>
              <p className="text-sm text-foreground mb-4 leading-relaxed">{service.solution}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-medium text-primary">{service.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
