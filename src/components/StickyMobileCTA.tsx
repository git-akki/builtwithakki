import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (approx 500px)
            const show = window.scrollY > 500;
            setIsVisible(show);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToBooking = () => {
        const element = document.getElementById("book-call");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
                >
                    <div className="flex items-center justify-between p-2 pl-5 bg-card/90 backdrop-blur-lg border border-primary/20 rounded-md shadow-xl shadow-primary/10">
                        <div className="flex flex-col">

                            <span className="text-sm font-bold text-foreground">
                                Let's build this.
                            </span>
                        </div>
                        <button
                            onClick={scrollToBooking}
                            className="btn-premium flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-md"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Call
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyMobileCTA;