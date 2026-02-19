import { motion, Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const testimonials = [
  {
    name: "Pablo Keumin",
    role: "Founder, Hair Mastery (E-learning)",
    content:
      "Akash helped us turn Hair Mastery into a clean, fast and trustworthy e-learning platform. Students find it easier to discover courses, and we get compliments on the experience every week.",
    rating: 5,
  },
  {
    name: "Oliver Rust",
    role: "Co-founder, Hair Mastery (E-learning)",
    content:
      "From structure to small UX details, everything was thought through. The build process was smooth, communication was clear, and the final result reflects our brand exactly how we imagined.",
    rating: 5,
  },
  {
    name: "Marco Netali",
    role: "Founder, Modom Grooming (Switzerland)",
    content:
      "Our e-commerce felt heavy before. After Akash’s work, pages load faster, checkout is simpler, and customers actually tell us the store feels premium. It had a clear impact on sales.",
    rating: 5,
  },
  {
    name: "Harsh",
    role: "Founder, Vantalo (Social Media & Web Agency)",
    content:
      "The portfolio site Akash built gives us a strong first impression with prospects. It explains what we do clearly and makes it easy for leads to reach out, which is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Shadab",
    role: "Owner, Hair Looks (Salon, India)",
    content:
      "Akash understood the salon business quickly and translated it into a simple, modern online presence. Clients can see our work, trust our brand more, and bookings have become more consistent.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp as unknown as Variants}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Client Feedback
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it — hear what clients have to say about working together.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer as unknown as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp as unknown as Variants}
              className="relative p-6 sm:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
