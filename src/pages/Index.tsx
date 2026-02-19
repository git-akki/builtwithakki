import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingTrust from "@/components/BookingTrust";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ProjectAudit from "@/components/ProjectAudit";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <ProjectAudit />

        <About />
        <BookCall />
        <BookingTrust />
        <Contact />
      </main>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
};

export default Index;
