import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, Radio } from "lucide-react";

const Pricing = () => {
  const consumerPlans = [
    {
      name: "Pay-As-You-Go",
      icon: <Radio className="h-5 w-5" />,
      price: "From $0.10/GB",
      description: "Perfect for occasional users and travelers",
      features: [
        "No monthly commitment",
        "Per-app bundles available",
        "Global coverage",
        "Instant activation"
      ],
      cta: "Start Using",
      popular: false
    },
    {
      name: "Always Connected",
      icon: <Zap className="h-5 w-5" />,
      price: "$29/month",
      description: "Seamless roaming with unlimited switching",
      features: [
        "Automatic provider switching",
        "Priority network access",
        "50GB/month included",
        "24/7 support"
      ],
      cta: "Get Started",
      popular: true
    }
  ];

  const businessPlans = [
    {
      name: "Security Starter",
      icon: <Shield className="h-5 w-5" />,
      price: "$2,500/month",
      description: "Single-site autonomous security",
      features: [
        "1 security turret",
        "2 patrol drones",
        "AI threat detection",
        "Backup power included",
        "RF base station capability"
      ],
      cta: "Request Demo",
      popular: false
    },
    {
      name: "Enterprise Security",
      icon: <Shield className="h-5 w-5" />,
      price: "Custom",
      description: "Multi-site security with network benefits",
      features: [
        "Unlimited turrets & drones",
        "Teleoperated escalation",
        "ISP revenue sharing",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. From flexible consumer data bundles 
            to enterprise security solutions.
          </p>
        </div>

        <div className="space-y-16">
          {/* Consumer Pricing */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Radio className="h-6 w-6 text-network-signal" />
                <span>For Consumers</span>
              </h3>
              <p className="text-muted-foreground">Flexible connectivity without the constraints</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {consumerPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'} hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {plan.icon}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </div>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-network-signal flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "hero" : "enterprise"} 
                      className="w-full group"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Pricing */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Shield className="h-6 w-6 text-network-alert" />
                <span>For Businesses</span>
              </h3>
              <p className="text-muted-foreground">Autonomous security that doubles as network infrastructure</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {businessPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'} hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Enterprise Choice</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {plan.icon}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </div>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-network-alert flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "hero" : "enterprise"} 
                      className="w-full group"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* ISP Partnership CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">ISP Partnership Program</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to expand your customer base without infrastructure investment? 
            Join our marketplace and start earning revenue from day one.
          </p>
          <Button variant="cta" size="lg" className="group">
            Become a Partner ISP
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;