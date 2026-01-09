import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const About = () => {
  const coreSkills = [
    "React",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "AI Agents",
    "MCP Protocol",
    "Tailwind CSS",
    "Technical SEO",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
  ];

  const tools = [
    "Claude",
    "ChatGPT",
    "Gemini",
    "VS Code",
    "Postman",
    "Docker",
    "Git",
    "npm",
    "MongoDB Compass",
    "Vercel",
    "n8n",
    "Supabase",
    "Stitch",
    "WordPress",
    "Elementor",
    "Wix",
    "webflow",
    "Framer",
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer as unknown as Variants}
            viewport={{ once: false }}
          >
            <motion.span variants={fadeInUp as unknown as Variants} className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
              About
            </motion.span>
            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I'm Akash
            </motion.h2>
            <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground text-lg mb-6">
              I help businesses build high-performing websites, scalable web applications,
              and AI-powered systems that drive conversions, streamline operations, and support long-term growth.
            </motion.p>
            <motion.p variants={fadeInUp as unknown as Variants} className="text-muted-foreground mb-8">
              Many companies struggle with websites that look good but fail to generate leads,
              e-commerce platforms that don't scale, or systems that rely too heavily on manual work.
              My role is to design and build reliable digital systems that solve these problems.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="space-y-4">
              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Associate Software Engineer</p>
                  <p className="text-sm text-muted-foreground">Houston Systems • Current</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">AKGEC, Ghaziabad</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp as unknown as Variants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Based in India</p>
                  <p className="text-sm text-muted-foreground">Working with clients worldwide</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: false }}
            className="p-8 bg-card rounded-2xl border border-border"
          >
            <motion.h3 variants={fadeInUp as unknown as Variants} className="text-xl font-semibold mb-6">Core Skills</motion.h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={fadeInUp as unknown as Variants}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <motion.div variants={fadeInUp as unknown as Variants} className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-6">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    variants={fadeInUp as unknown as Variants}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
