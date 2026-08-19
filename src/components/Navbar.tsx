import { motion, Variants } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import ClawBotIcon from "./ClawBotIcon";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" aria-label="Akash Yadav — home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <ClawBotIcon size={28} className="text-primary" aria-hidden="true" />
            AY<span className="text-primary">.</span>
          </a>

          {/* Book a Call */}
          <div className="flex items-center gap-2">
            <motion.a
              variants={fadeInUp as unknown as Variants}
              initial="hidden"
              animate="visible"
              href="/#book-call"
              className="btn-premium px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
            >
              Book a Call
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
