import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImprovedMarketplace from "@/components/ImprovedMarketplace";

const Marketplace = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">WISP Data Marketplace</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purchase data bundles from local WISPs in your area. Instant delivery via drone network.
            </p>
          </div>
          <ImprovedMarketplace />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;