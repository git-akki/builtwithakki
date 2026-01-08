import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I'm Akash
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              I help businesses build high-performing websites, scalable web applications, 
              and AI-powered systems that drive conversions, streamline operations, and support long-term growth.
            </p>
            <p className="text-muted-foreground mb-8">
              Many companies struggle with websites that look good but fail to generate leads, 
              e-commerce platforms that don't scale, or systems that rely too heavily on manual work. 
              My role is to design and build reliable digital systems that solve these problems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Associate Software Engineer</p>
                  <p className="text-sm text-muted-foreground">Houston Systems • Current</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">AKGEC, Ghaziabad</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Based in India</p>
                  <p className="text-sm text-muted-foreground">Working with clients worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-card rounded-2xl border border-border"
          >
            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React", "Next.js", "TypeScript", "Node.js",
                "Python", "AI Agents", "MCP Protocol", "Tailwind CSS",
                "WordPress", "E-Commerce", "Technical SEO", "REST APIs",
                "PostgreSQL", "MongoDB", "Docker", "Git"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Full-Stack Web Development Bootcamp
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Software Engineering & Agile Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Problem Solving Certification
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
