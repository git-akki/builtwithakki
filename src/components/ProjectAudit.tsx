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
        setCheckedItems({ ...checkedItems, [index]: isChecked });
        setScore((prev) => (isChecked ? prev + 1 : prev - 1));
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-secondary/30 relative">
            <div className="container max-w-4xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeInUp as unknown as Variants}
                    className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Is Your Project <span className="text-primary">Ready?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Check the boxes below to see if we're a good fit for a collaboration.
                    </p>
                </motion.div>

                <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl">
                    <motion.div
                        variants={staggerContainer as unknown as Variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
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
                                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${checkedItems[index]
                                    ? "bg-primary/10 border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                                    : "bg-background/50 border-border hover:border-primary/50"
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${checkedItems[index] ? "bg-primary border-primary" : "border-muted-foreground"
                                    }`}>
                                    {checkedItems[index] && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                                </div>
                                <span className={`text-lg ${checkedItems[index] ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                                    {item}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp as unknown as Variants}
                        className="mt-12 pt-8 border-t border-border">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                                    Fit Score
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-primary">{score * 20}%</span>
                                    <span className="text-muted-foreground">Match</span>
                                </div>
                            </div>

                            {score >= 3 ? (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex-1 text-center sm:text-right"
                                >
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
                                    >
                                        Let's Start the Conversation <ArrowRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="flex-1 text-center sm:text-right text-muted-foreground text-sm">
                                    Select at least 3 items to unlock the next step.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ProjectAudit;