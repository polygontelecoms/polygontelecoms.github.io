import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Network, Headphones } from "lucide-react";

const Business = () => {
  const businessSolutions = [
    {
      icon: Network,
      title: "Enterprise Connectivity",
      description: "Scalable network solutions for businesses of all sizes",
      features: ["24/7 uptime guarantee", "Dedicated support", "Custom configurations"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Comprehensive cybersecurity for corporate environments",
      features: ["Threat monitoring", "Firewall management", "Compliance reporting"]
    },
    {
      icon: Building2,
      title: "Infrastructure Planning",
      description: "Complete network architecture and deployment services",
      features: ["Site surveys", "Network design", "Installation support"]
    },
    {
      icon: Headphones,
      title: "Managed Services",
      description: "Full network management and maintenance",
      features: ["Remote monitoring", "Proactive maintenance", "Emergency response"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Business Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade networking and security solutions tailored for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {businessSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <solution.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription>
                  Contact our enterprise team for a customized solution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full">Schedule Consultation</Button>
                <p className="text-sm text-muted-foreground">
                  Or call us directly at: <span className="font-semibold">1-800-POLYGON</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Business;