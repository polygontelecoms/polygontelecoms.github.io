import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import IntegratedSystems from "@/components/IntegratedSystems";
import ServicesOverview from "@/components/ServicesOverview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewHero />
        <IntegratedSystems />
        <ServicesOverview />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
