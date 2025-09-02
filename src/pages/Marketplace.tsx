import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wifi, Satellite, Router } from "lucide-react";

const Marketplace = () => {
  const products = [
    {
      icon: Router,
      title: "Enterprise Router",
      description: "High-performance routing solution for business networks",
      price: "$299"
    },
    {
      icon: Satellite,
      title: "Satellite Uplink",
      description: "Direct satellite connectivity for remote locations",
      price: "$1,299"
    },
    {
      icon: Shield,
      title: "Security Package",
      description: "Complete network security and monitoring suite",
      price: "$199"
    },
    {
      icon: Wifi,
      title: "Mesh Network Kit",
      description: "Scalable mesh networking for wide area coverage",
      price: "$899"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Network Equipment Marketplace</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional-grade networking and security equipment for all your connectivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <product.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;