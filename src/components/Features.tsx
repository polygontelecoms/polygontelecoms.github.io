import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Building, 
  Router, 
  Eye, 
  Zap, 
  Globe2, 
  Shield, 
  Radio,
  ArrowRight 
} from "lucide-react";
import securityNodeImage from "@/assets/security-node.jpg";
import globalNetworkImage from "@/assets/global-network.jpg";

const Features = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient-primary">Three Stakeholders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Polygon serves consumers, businesses, and ISPs with different value propositions, 
            creating a network effect that benefits everyone.
          </p>
        </div>

        <Tabs defaultValue="consumers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="consumers" className="flex items-center space-x-2">
              <Smartphone className="h-4 w-4" />
              <span>Consumers</span>
            </TabsTrigger>
            <TabsTrigger value="businesses" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Businesses</span>
            </TabsTrigger>
            <TabsTrigger value="isps" className="flex items-center space-x-2">
              <Router className="h-4 w-4" />
              <span>ISPs</span>
            </TabsTrigger>
          </TabsList>

          {/* Consumers Tab */}
          <TabsContent value="consumers" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Flexible Connectivity</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  No more rigid monthly contracts. Buy exactly what you need, when you need it, 
                  from any Polygon-enabled provider worldwide.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Globe2 className="h-6 w-6 text-network-signal mb-2" />
                      <h4 className="font-semibold mb-1">Global Roaming</h4>
                      <p className="text-sm text-muted-foreground">Seamless connectivity anywhere</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Zap className="h-6 w-6 text-accent mb-2" />
                      <h4 className="font-semibold mb-1">Instant Access</h4>
                      <p className="text-sm text-muted-foreground">Connect within seconds</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Button variant="cta" className="group">
                  Find Coverage Near You
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={globalNetworkImage} 
                  alt="Global Network Coverage" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
              </div>
            </div>
          </TabsContent>

          {/* Businesses Tab */}
          <TabsContent value="businesses" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src={securityNodeImage} 
                  alt="Polygon Security Node" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-4">Autonomous Security</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Replace expensive human security with AI-driven defense systems that never sleep, 
                  never take breaks, and never put human lives at risk.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Eye className="h-6 w-6 text-network-alert mb-2" />
                      <h4 className="font-semibold mb-1">24/7 Monitoring</h4>
                      <p className="text-sm text-muted-foreground">AI-powered threat detection</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Shield className="h-6 w-6 text-network-alert mb-2" />
                      <h4 className="font-semibold mb-1">Zero Risk</h4>
                      <p className="text-sm text-muted-foreground">No human guards in danger</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Button variant="cta" className="group">
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* ISPs Tab */}
          <TabsContent value="isps" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Expand Without Infrastructure</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Reach new customers through Polygon's RF network without building new towers. 
                  Simply integrate your bundles into our marketplace.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Radio className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold mb-1">Zero CAPEX</h4>
                      <p className="text-sm text-muted-foreground">No new infrastructure needed</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4">
                    <CardContent className="p-0">
                      <Globe2 className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold mb-1">Global Reach</h4>
                      <p className="text-sm text-muted-foreground">Access worldwide customers</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Button variant="cta" className="group">
                  Partner Integration Guide
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <span className="font-semibold">Revenue Share</span>
                      <span className="text-primary font-bold">85%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <span className="font-semibold">Integration Time</span>
                      <span className="text-accent font-bold">24 Hours</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                      <span className="font-semibold">Setup Cost</span>
                      <span className="text-network-signal font-bold">$0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;