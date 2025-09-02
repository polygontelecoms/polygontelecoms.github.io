import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your connectivity and security needs
            </p>
          </div>
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;