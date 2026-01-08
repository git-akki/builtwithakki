import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Bot, ShoppingCart, Zap } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Swiss Grooming E-commerce",
    category: "E-commerce",
    description: "A Switzerland-based unisex grooming brand e-commerce platform with optimized purchase flow, performance enhancements, and conversion-focused UX design.",
    technologies: ["WordPress", "WooCommerce", "Custom Plugins", "SEO"],
    link: "#",
  },
  {
    icon: Bot,
    title: "AI Sales Assistant",
    category: "AI Automation",
    description: "Custom AI agent that handles initial customer inquiries, qualifies leads, and schedules meetings automatically — reducing response time by 90%.",
    technologies: ["Python", "OpenAI", "MCP Protocol", "Webhooks"],
    link: "#",
  },
  {
    icon: Globe,
    title: "SaaS Dashboard Platform",
    category: "Web Application",
    description: "Full-stack analytics dashboard with real-time data visualization, user authentication, and role-based access control for a B2B startup.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    icon: Zap,
    title: "Workflow Automation Suite",
    category: "Automation",
    description: "End-to-end automation system connecting CRM, email marketing, and invoicing tools — saving 25+ hours of manual work weekly.",
    technologies: ["n8n", "REST APIs", "Zapier", "Custom Scripts"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in web development, AI systems, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 bg-card rounded-xl border border-border card-hover block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <project.icon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <span className="inline-block px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                {project.category}
              </span>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
