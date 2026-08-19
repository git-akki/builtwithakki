import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

interface Project {
  title: string;
  url: string;
  displayUrl: string;
  screenshot: string;
  type: string;
  stack: string[];
  outcome: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "Vantalo Agency",
    url: "https://vantalo.in",
    displayUrl: "vantalo.in",
    screenshot: "/screenshots/vantalo.jpg",
    type: "Agency Portfolio",
    stack: ["React", "Tailwind", "Framer Motion"],
    outcome: "Conversion-focused agency site, generating inbound leads",
    accentColor: "#8B5CF6",
  },
  {
    title: "Hair Mastery",
    url: "https://hair-mastery.com",
    displayUrl: "hair-mastery.com",
    screenshot: "/screenshots/hair-mastery.jpg",
    type: "Education Platform",
    stack: ["WordPress", "WooCommerce", "Custom Theme"],
    outcome: "Courses, shop, and membership selling from one platform",
    accentColor: "#F59E0B",
  },
  {
    title: "Wig Shop",
    url: "https://hair-mastery.com/wig-shop",
    displayUrl: "hair-mastery.com/wig-shop",
    screenshot: "/screenshots/wig-shop.jpg",
    type: "E-Commerce",
    stack: ["WooCommerce", "WordPress"],
    outcome: "Orders flowing cart → checkout with zero manual handling",
    accentColor: "#EC4899",
  },
  {
    title: "Hair Mastery Agency",
    url: "https://hair-mastery.com/agency",
    displayUrl: "hair-mastery.com/agency",
    screenshot: "/screenshots/agency.jpg",
    type: "Service Landing Page",
    stack: ["WordPress", "Elementor"],
    outcome: "Service page driving consultation bookings",
    accentColor: "#10B981",
  },
  {
    title: "Sendpookie",
    url: "https://sendpookie.com",
    displayUrl: "sendpookie.com",
    screenshot: "/screenshots/sendpookie.jpg",
    type: "SaaS Product",
    stack: ["React", "Supabase", "Vercel"],
    outcome: "Shipped SaaS product with real users in production",
    accentColor: "#3B82F6",
  },
  {
    title: "Modom Grooming",
    url: "https://modomgrooming.com",
    displayUrl: "modomgrooming.com",
    screenshot: "/screenshots/modom-grooming.jpg",
    type: "E-Commerce",
    stack: ["WooCommerce", "WordPress"],
    outcome: "Premium grooming store shipping across Switzerland",
    accentColor: "#EF4444",
  },
];

const TiltCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 22 });
  const sy = useSpring(my, { stiffness: 160, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { mx.set(0); my.set(0); setHovered(false); }}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className="group rounded-lg border border-border/60 bg-card overflow-hidden"
    >
      {/* Browser chrome */}
      <div className="border-b border-border/50 bg-muted/40 px-3 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-2 flex items-center gap-1.5 px-2.5 py-1 bg-background/60 rounded-md border border-border/40">
          <span className="w-2 h-2 rounded-full border border-border/60 flex-shrink-0" />
          <span className="text-[10px] text-muted-foreground/60 font-mono truncate">{project.displayUrl}</span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded hover:bg-background/60 transition-colors text-muted-foreground/50 hover:text-foreground"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden bg-muted/20" style={{ aspectRatio: "16/10" }}>
        {!imgError ? (
          <motion.img
            src={project.screenshot}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
            style={{ translateY: hovered ? "-3%" : "0%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          /* Fallback gradient if screenshot fails */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}15, ${project.accentColor}05)` }}
          >
            <span className="text-xs text-muted-foreground/40 font-mono">{project.displayUrl}</span>
          </div>
        )}

        {/* Hover overlay with visit link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Visit site <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-sm font-semibold">{project.title}</h3>
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, backgroundColor: `${project.accentColor}10` }}
          >
            {project.type}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.outcome}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-muted/60 border border-border/40 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WebsiteShowcase = () => (
  <section id="websites" className="py-28 border-t border-border/50">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer as unknown as Variants}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
      >
        <div>
          <motion.p variants={fadeInUp as unknown as Variants} className="text-xs font-mono text-primary uppercase tracking-[0.15em] mb-4">
            // web_projects.map()
          </motion.p>
          <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sites that sell.<br />Apps that work.
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer as unknown as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeInUp as unknown as Variants}>
            <TiltCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WebsiteShowcase;
