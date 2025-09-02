import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wifi, Shield, Smartphone } from "lucide-react";

const Homes = () => {
  const homePlans = [
    {
      icon: Home,
      title: "Basic Home",
      description: "Perfect for small homes and apartments",
      speed: "Up to 100 Mbps",
      price: "$39.99/month",
      features: ["Reliable connectivity", "Basic security", "24/7 support"]
    },
    {
      icon: Wifi,
      title: "Family Plus",
      description: "Ideal for families with multiple devices",
      speed: "Up to 500 Mbps",
      price: "$69.99/month",
      features: ["Multi-device support", "Parental controls", "Enhanced security"]
    },
    {
      icon: Shield,
      title: "Premium Secure",
      description: "Maximum speed and security for power users",
      speed: "Up to 1 Gbps",
      price: "$99.99/month",
      features: ["Ultra-fast speeds", "Advanced security suite", "Priority support"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Home Internet Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable internet with built-in security for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {homePlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <plan.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <div className="text-lg font-semibold">{plan.speed}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  Smart Home Integration
                </CardTitle>
                <CardDescription>
                  All plans include seamless integration with smart home devices
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Compatible Devices</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$0</div>
                  <div className="text-sm text-muted-foreground">Installation</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homes;