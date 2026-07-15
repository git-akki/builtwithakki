import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import AiAuditCTA from "@/components/AiAuditCTA";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import BookingTrust from "@/components/BookingTrust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PortfolioChat from "@/components/PortfolioChat";

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
        <HowItWorks />
        <Testimonials />
        <AiAuditCTA />
        <About />
        <BookCall />
        <BookingTrust />
        <Contact />
      </main>
      <StickyMobileCTA />
      <PortfolioChat />
      <Footer />
    </div>
  );
};

export default Index;
