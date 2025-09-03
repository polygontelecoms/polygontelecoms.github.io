import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Shield, Radio, Wifi } from "lucide-react";

const Pricing = () => {
  const consumerPlans = [
    {
      name: "Pay-As-You-Go",
      icon: <Radio className="h-5 w-5" />,
      price: "From $0.10/GB",
      description: "Perfect for occasional users and travelers",
      features: [
        "No monthly commitment",
        "Per-app bundles (WhatsApp, VoIP)",
        "Global WISP coverage",
        "Instant activation"
      ],
      cta: "Purchase Now",
      popular: false
    },
    {
      name: "Always Connected",
      icon: <Zap className="h-5 w-5" />,
      price: "$29/month",
      description: "Seamless roaming with automatic switching",
      features: [
        "Automatic WISP switching",
        "Priority network access",
        "50GB/month included",
        "24/7 support"
      ],
      cta: "Subscribe Now",
      popular: true
    }
  ];

  const homePlans = [
    {
      name: "Home Security",
      icon: <Shield className="h-5 w-5" />,
      price: "$899/month",
      description: "Complete home protection + WiFi hotspot",
      features: [
        "1 sentry gun turret with AI vision",
        "2 patrol weapon drones",
        "RF base station (WiFi hotspot)",
        "Independent backup power",
        "Theft-proof installation"
      ],
      cta: "Subscribe Now",
      popular: false
    }
  ];

  const businessPlans = [
    {
      name: "Business Security",
      icon: <Shield className="h-5 w-5" />,
      price: "$2,500/month",
      description: "Single-site sentry gun security",
      features: [
        "1 sentry gun turret",
        "2 weapon patrol drones",
        "AI threat detection & computer vision",
        "Teleoperated lethal escalation",
        "RF base station + 85% ISP revenue share"
      ],
      cta: "Subscribe Now",
      popular: false
    },
    {
      name: "Enterprise Security",
      icon: <Shield className="h-5 w-5" />,
      price: "Custom",
      description: "Multi-site weapon drone grid",
      features: [
        "Unlimited sentry turrets & weapon drones",
        "Teleoperated escalation capability",
        "85% ISP revenue sharing",
        "Priority support & custom integration",
        "Theft-proof power systems"
      ],
      cta: "Subscribe Now",
      popular: true
    }
  ];

  const ispPlans = [
    {
      name: "WISP Partnership", 
      icon: <Wifi className="h-5 w-5" />,
      price: "Revenue Share",
      description: "Join the marketplace and earn 85% of sales",
      features: [
        "List your bundles in global marketplace",
        "85% revenue share on all sales",
        "Polygon handles billing & authentication",
        "Access to RF base station network",
        "No infrastructure investment required"
      ],
      cta: "Join Partnership",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Pricing</span> Tiers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four stakeholders, four pricing models. From flexible data bundles 
            to enterprise sentry gun security.
          </p>
        </div>

        <div className="space-y-16">
          {/* Consumer Pricing */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Radio className="h-6 w-6 text-network-signal" />
                <span>Data Consumers</span>
              </h3>
              <p className="text-muted-foreground">Flexible data bundles from global WISPs</p>
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
                      onClick={() => window.location.href = '/marketplace'}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Home Pricing */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Shield className="h-6 w-6 text-network-alert" />
                <span>Home Security</span>
              </h3>
              <p className="text-muted-foreground">Residential sentry gun protection + WiFi hotspot</p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
              {homePlans.map((plan, index) => (
                <Card 
                  key={index}
                  className="border-border hover:shadow-xl transition-all duration-300"
                >
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
                      variant="cta" 
                      className="w-full group"
                      onClick={() => window.location.href = '/homes'}
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
                <span>Business Security</span>
              </h3>
              <p className="text-muted-foreground">Enterprise sentry gun grid + 85% ISP revenue</p>
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
                      onClick={() => window.location.href = '/business'}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ISP Partnership */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Wifi className="h-6 w-6 text-primary" />
                <span>WISP Partnership</span>
              </h3>
              <p className="text-muted-foreground">Join marketplace and earn 85% revenue share</p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
              {ispPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className="border-primary/20 ring-2 ring-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Partner Program</Badge>
                  </div>
                  
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
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="hero" 
                      className="w-full group bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.open('mailto:partnerships@polygontelecom.com?subject=WISP Partnership Inquiry', '_blank')}
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
      </div>
    </section>
  );
};

export default Pricing;