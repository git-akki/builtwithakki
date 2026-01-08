import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, TechStart",
    content: "Akash transformed our outdated website into a conversion machine. Within 3 months, our lead generation increased by 180%. His attention to detail and understanding of user experience is exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "CEO, GrowthLabs",
    content: "The AI automation system Akash built saved us 20+ hours per week. He understood our workflow challenges and delivered a solution that exceeded expectations. Highly recommend for any AI projects.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "E-commerce Director, StyleHub",
    content: "Our e-commerce platform needed serious performance optimization. Akash improved our page load times by 60% and the checkout flow redesign increased conversions significantly.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO, DataFlow Inc",
    content: "Working with Akash on our MCP server implementation was seamless. He has deep knowledge of AI systems and delivered a robust, scalable solution that our team could easily maintain.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 bg-card rounded-xl border border-border card-hover"
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
