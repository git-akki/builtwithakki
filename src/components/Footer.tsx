import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">AY</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Web & AI Systems Engineer</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#book-call" className="hover:text-foreground transition-colors">Book Call</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Akash Yadav
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
