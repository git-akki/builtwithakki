import { motion } from "framer-motion";
import { Code2, Bot, Zap, Globe, Database, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performing websites and web applications built with modern frameworks. Conversion-focused design that drives real business results.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Custom AI agents, MCP servers, and automation workflows that reduce repetitive work and improve decision-making.",
  },
  {
    icon: Code2,
    title: "Custom Applications",
    description: "Scalable web applications built with React, Next.js, and modern tech stacks. From MVPs to production-ready systems.",
  },
  {
    icon: Database,
    title: "E-Commerce Solutions",
    description: "Conversion-optimized e-commerce platforms that scale with your business. Performance, UX, and purchase flow optimization.",
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description: "Improve search visibility and website performance through technical optimization and ongoing maintenance.",
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Connect your tools and automate workflows. API integrations, data pipelines, and system architecture.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I Build
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Digital systems designed for results — not just for launch. Every solution is built to drive conversions, streamline operations, and support growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
