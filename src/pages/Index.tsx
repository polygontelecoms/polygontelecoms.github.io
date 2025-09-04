import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import OldVsNewWay from "@/components/OldVsNewWay";
import IntegratedSystems from "@/components/IntegratedSystems";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewHero />
        <OldVsNewWay />
        <IntegratedSystems />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
