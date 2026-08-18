import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SocialProofBar />

        <Services />
        <CaseStudies />
        <WebsiteShowcase />
        <Testimonials />
        <About />
        <BookCall />
        <Contact />
      </main>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
};

export default Index;
