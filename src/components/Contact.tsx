import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Check } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { fadeInUp, staggerContainer, smoothTransition } from "../utils/animations";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  company?: string;
}

/* Disposable / temp email domains */
const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "trashmail.com",
  "getnada.com",
  "fakeinbox.com",
  "throwawaymail.com",
  "temp-mail.org",
  "maildrop.cc",
];

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "work.17akki.akash@gmail.com",
      href: "mailto:work.17akki.akash@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yadav-akash17",
      href: "https://www.linkedin.com/in/yadav-akash17",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/akashyadav",
      href: "https://github.com/git-akki",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const [isSent, setIsSent] = useState(false);

  /* Reset success state after 5 seconds */
  useEffect(() => {
    if (!isSent) return;
    const timer = setTimeout(() => setIsSent(false), 5000);
    return () => clearTimeout(timer);
  }, [isSent]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const emailDomain = data.email.split("@")[1]?.toLowerCase();

    /* Block disposable emails ONLY */
    if (emailDomain && DISPOSABLE_EMAIL_DOMAINS.includes(emailDomain)) {
      setError("email", {
        type: "manual",
        message: "Temporary email addresses are not allowed.",
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error();

      setIsSent(true);
      reset();
    } catch {
      setError("email", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* LEFT */}
          <motion.div
            variants={staggerContainer as unknown as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-col gap-6"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeInUp as unknown as Variants}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="font-medium">{link.label}</p>
                <p className="text-sm text-muted-foreground truncate">{link.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp as unknown as Variants}
            viewport={{ once: false }}
            transition={{ ...smoothTransition, delay: 0.2 } as unknown as Transition}
            className="relative p-8 bg-card rounded-2xl border border-border"
          >
            {/* WAITING OVERLAY */}
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-card/70 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* NAME */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required." })}
                  placeholder="Your Name"
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* HONEYPOT */}
              <input type="text" {...register("company")} tabIndex={-1} className="hidden" />

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                  placeholder="you@example.com"
                  className={`w-full p-3 bg-background border rounded-lg focus:ring-2 ${errors.email
                    ? "border-destructive focus:ring-destructive"
                    : "border-border focus:ring-primary"
                    }`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true, minLength: 10 })}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 transition-colors transition-opacity disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </motion.div>
                  ) : isSent ? (
                    <motion.div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Sent
                    </motion.div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
