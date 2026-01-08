import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

const articles = [
  {
    title: "Building AI Agents with MCP Protocol: A Practical Guide",
    excerpt: "Learn how to create powerful AI agents using the Model Context Protocol. From setup to deployment, this guide covers everything you need to know.",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "Jan 2026",
    link: "#",
  },
  {
    title: "Why Your Website Isn't Converting (And How to Fix It)",
    excerpt: "Common conversion killers that cost businesses thousands. Discover the UX principles and technical optimizations that actually drive results.",
    category: "Web Development",
    readTime: "6 min read",
    date: "Dec 2025",
    link: "#",
  },
  {
    title: "E-commerce Performance: The Technical Checklist",
    excerpt: "A comprehensive guide to optimizing your online store. From Core Web Vitals to checkout flow optimization — boost your sales with these proven strategies.",
    category: "E-commerce",
    readTime: "10 min read",
    date: "Nov 2025",
    link: "#",
  },
];

const Articles = () => {
  return (
    <section id="articles" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Articles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Insights & Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on web development, AI systems, and building digital products that drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  {article.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all duration-300 hover:bg-card hover:border-primary/30"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
