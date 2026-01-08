import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <BookCall />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
