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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16">
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
