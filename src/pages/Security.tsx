import { useState } from "react";
import { Shield, Home, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Security = () => {
  const securityPlans = {
    home: [
      {
        name: "Home Guardian",
        price: "$899/month",
        setup: "$2,500 one-time",
        description: "Complete residential protection with sentry turret",
        features: [
          "1 rooftop sentry turret with AI vision",
          "2 patrol weapon drones",
          "RF base station (WiFi hotspot)",
          "24/7 threat monitoring",
          "Non-lethal first response",
          "Emergency law enforcement alerts"
        ],
        popular: true
      }
    ],
    business: [
      {
        name: "Business Shield",
        price: "$2,500/month", 
        setup: "$5,000 one-time",
        description: "Single-site commercial security solution",
        features: [
          "1 commercial-grade sentry turret",
          "2 weapon patrol drones",
          "AI threat detection & computer vision",
          "Teleoperated response capability", 
          "RF base station + 85% ISP revenue share",
          "Priority emergency response"
        ],
        popular: false
      },
      {
        name: "Enterprise Grid",
        price: "Custom Pricing",
        setup: "Custom Installation",
        description: "Multi-site weapon drone security network",
        features: [
          "Unlimited sentry turrets & weapon drones",
          "Coordinated swarm response",
          "85% ISP revenue sharing",
          "Custom integration & support",
          "Theft-proof power systems",
          "Network-wide threat intelligence"
        ],
        popular: true
      }
    ],
    personal: [
      {
        name: "Personal Escort",
        price: "$45/hour",
        setup: "No setup required",
        description: "On-demand personal protection drone service",
        features: [
          "GPS-tracked drone escort",
          "Real-time threat assessment",
          "Emergency response capability",
          "Live video monitoring",
          "Voice communication",
          "3-10 minute response time"
        ],
        popular: true
      },
      {
        name: "Safety Monitoring",
        price: "$25/hour",
        setup: "No setup required", 
        description: "Drone overwatch for specific situations",
        features: [
          "Marketplace meetup security",
          "Vehicle escort service",
          "Walking/jogging companion",
          "Event monitoring",
          "Curbside waiting protection",
          "Police interaction witnessing"
        ],
        popular: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Polygon Security</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Proactive autonomous security that prevents crime before it happens. 
              Our drone network provides 24/7 protection for homes, businesses, and personal safety.
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-card border rounded-lg p-1">
                <Shield className="w-5 h-5 text-primary ml-2" />
                <span className="text-sm font-medium px-2">Armed Response in the Air</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="home" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="home" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>Business</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Personal</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Residential Security</h2>
                  <p className="text-muted-foreground">Protect your family and property with autonomous sentry systems</p>
                </div>
                <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                  {securityPlans.home.map((plan, index) => (
                    <Card key={index} className={`${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">{plan.price}</div>
                          <div className="text-sm text-muted-foreground">{plan.setup}</div>
                        </div>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" size="lg">Subscribe Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Business Security</h2>
                  <p className="text-muted-foreground">Enterprise-grade protection with revenue-sharing opportunities</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {securityPlans.business.map((plan, index) => (
                    <Card key={index} className={`${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground">Enterprise Choice</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">{plan.price}</div>
                          <div className="text-sm text-muted-foreground">{plan.setup}</div>
                        </div>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" size="lg">Subscribe Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personal">
              <div className="grid gap-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Personal Protection</h2>
                  <p className="text-muted-foreground">On-demand drone escort and safety services</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {securityPlans.personal.map((plan, index) => (
                    <Card key={index} className={`${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground">Most Requested</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">{plan.price}</div>
                          <div className="text-sm text-muted-foreground">{plan.setup}</div>
                        </div>
                        <p className="text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" size="lg" asChild>
                          <a href="/request-drone">Request Now</a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;