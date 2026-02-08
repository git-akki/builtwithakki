import { motion, Variants } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import ClawBotIcon from "./ClawBotIcon";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <ClawBotIcon size={28} color="#FF5722" />
            AY<span className="text-primary">.</span>
          </a>

          {/* Book a Call */}
          <motion.a
            variants={fadeInUp as unknown as Variants}
            initial="hidden"
            animate="visible"
            href="#book-call"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg transition-colors hover:bg-primary/90"
          >
            Book a Call
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
