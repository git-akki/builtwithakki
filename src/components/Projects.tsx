import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Globe, Bot, ShoppingCart, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fadeInUp } from "../utils/animations";

const projects = [
  {
    icon: ShoppingCart,
    title: "Grooming E-commerce",
    category: "E-commerce",
    status: "Live",
    description:
      "A Switzerland-based unisex grooming brand e-commerce platform with optimized purchase flow, performance enhancements, and conversion-focused UX design.",
    technologies: ["WordPress", "WooCommerce", "Custom Plugins", "SEO"],
    link: "https://modomgrooming.com",
  },
  {
    icon: Bot,
    title: "AI Sales Assistant",
    category: "AI Automation",
    status: "Live",
    description:
      "Custom AI agent that handles initial customer inquiries, qualifies leads, and schedules meetings automatically — reducing response time by 90%.",
    technologies: ["Python", "OpenAI", "MCP Protocol", "Webhooks"],
    link: "#",
  },
  {
    icon: Globe,
    title: "Hair Mastery",
    category: "E-learning Platform",
    status: "Live",
    description:
      "An e-learning platform for hair professionals, with structured lessons, simple navigation and a modern, trustworthy experience for students.",
    technologies: ["Wordpress", "Elementor", "Hostinger", "PostgreSQL"],
    link: "https://hair-mastery.com",
  },
  {
    icon: Zap,
    title: "Smart Appointment Automation System",
    category: "AI Automation • Premium Salon",
    status: "Under Development",
    description:
      "Zero running cost appointment system for a luxury salon brand that acts as a digital receptionist — 24×7 booking, automatic barber assignment, no double bookings, and real-time schedule updates. Protects ₹20,000+ in monthly revenue by recovering missed customers while reducing manual coordination.",
    technologies: [
      "Custom Booking Engine",
      "Automation Workflow",
      "Lightweight Infrastructure",
      "Mobile-first UX",
    ],
    link: "#",
  },
  {
    icon: ShoppingCart,
    title: "Wig Shop",
    category: "E-commerce",
    status: "Live",
    description:
      "An e-commerce storefront for Hair Mastery’s wig collection, focused on clean product presentation, simple navigation, and a smooth checkout experience.",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    link: "https://shop.hair-mastery.com",
  },
  {
    icon: Globe,
    title: "Vantalo Agency Portfolio",
    category: "Agency Website",
    status: "Live",
    description:
      "A conversion-focused portfolio for a social media and web development agency — bold layout, clear services, and case-study driven storytelling built for lead generation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
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

        <Carousel
          className="relative"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <motion.a
                  variants={fadeInUp as unknown as Variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => project.link === "#" && e.preventDefault()}
                  className={`group relative h-full p-6 sm:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors block ${project.link === "#" ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span
                    className={`absolute top-4 right-4 inline-block px-2.5 py-1 text-[11px] font-medium rounded-full border ${
                      project.status === "Under Development"
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                        : "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <project.icon className="w-6 h-6" />
                    </div>
                    {project.link !== "#" && (
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-6" />
                    )}
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-medium text-primary bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                  </div>

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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section >
  );
};

export default Projects;
