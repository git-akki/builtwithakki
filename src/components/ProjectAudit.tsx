import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const ProjectAudit = () => {
    const [score, setScore] = useState(0);
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

    const checklist = [
        "I have a clearly defined goal or problem to solve.",
        "I have a budget allocated for this investment.",
        "I am the decision maker (or have direct access).",
        "I am looking for a long-term partner, not just a quick fix.",
        "I value quality and scalability over the cheapest option."
    ];

    const toggleItem = (index: number) => {
        const isChecked = !checkedItems[index];
        const newChecked = { ...checkedItems, [index]: isChecked };
        setCheckedItems(newChecked);
        const newScore = Object.values(newChecked).filter(Boolean).length;
        setScore(newScore);
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Circular Meter Calculations
    const maxScore = checklist.length;
    const percentage = Math.round((score / maxScore) * 100);
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <section className="py-24 bg-secondary/30 relative">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp as unknown as Variants}
                    className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Is Your Project <span className="text-primary">Ready?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Check the boxes below to see if we're a good fit for a collaboration.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp as unknown as Variants}
                        className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl shadow-xl"
                    >
                        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r={radius}
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    className="text-secondary"
                                />
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r={radius}
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    className="text-primary"
                                    strokeDasharray={circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-bold text-foreground">{percentage}%</span>
                                <span className="text-sm text-muted-foreground">Match</span>
                            </div>
                        </div>

                        <div className="text-center space-y-6 w-full">
                            <div>
                                <p className="text-lg font-medium mb-2">
                                    {score >= 3 ? "We're a great match!" : "Let's discuss your needs."}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {score >= 3
                                        ? "Your project aligns perfectly with my expertise."
                                        : "Select at least 3 items to see if we're a fit."}
                                </p>
                            </div>

                            {score >= 3 ? (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="w-full"
                                >
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
                                    >
                                        Let's Start the Conversation <ArrowRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="h-14 flex items-center justify-center text-muted-foreground text-sm italic">
                                    Complete the checklist to proceed
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer as unknown as Variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {checklist.map((item, index) => (
                            <motion.button
                                key={index}
                                variants={fadeInUp as unknown as Variants}
                                type="button"
                                role="checkbox"
                                aria-checked={!!checkedItems[index]}
                                onClick={() => toggleItem(index)}
                                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${checkedItems[index]
                                    ? "bg-primary/10 border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                                    : "bg-card border-border hover:border-primary/50"
                                    }`}
                            >
                                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${checkedItems[index] ? "bg-primary border-primary" : "border-muted-foreground"
                                    }`}>
                                    {checkedItems[index] && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                                </div>
                                <span className={`text-lg ${checkedItems[index] ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                                    {item}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ProjectAudit;