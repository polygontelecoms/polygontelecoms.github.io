import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StakeholderSections from "@/components/StakeholderSections";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StakeholderSections />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
