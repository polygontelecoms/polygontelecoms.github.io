import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  
  Smartphone, 
  Home, 
  Building2, 
  Wifi, 
  Shield, 
  Plane,
  Radio,
  Users,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

const ServicesOverview = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Protection. Complete Connection.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not a service you call after something fails. A system that never leaves, never switches off, 
            and never waits for permission to keep you safe and connected.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Consumers */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Smartphone className="h-8 w-8 text-primary" />
                <Badge variant="secondary">For Individuals</Badge>
              </div>
              <CardTitle className="text-2xl">Personal Protection & Data</CardTitle>
              <CardDescription>
                Individual users who need reliable connectivity and personal security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">On-demand data delivery anywhere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">Personal drone escort service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">Emergency response integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">Multi-provider network access</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                Start Personal Plan
              </Button>
            </CardContent>
          </Card>

          {/* Homes */}
          <Card className="relative overflow-hidden border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Home className="h-8 w-8 text-primary" />
                <Badge className="bg-primary/10 text-primary border-primary/20">Most Popular</Badge>
              </div>
              <CardTitle className="text-2xl">Home Security & Internet</CardTitle>
              <CardDescription>
                Residential properties requiring integrated security and connectivity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">AI sentry turret installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Perimeter drone surveillance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">High-speed internet backbone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Network node hosting rewards</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                Secure Your Home
              </Button>
            </CardContent>
          </Card>

          {/* Business */}
          <Card className="relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Building2 className="h-8 w-8 text-primary" />
                <Badge variant="outline">Enterprise</Badge>
              </div>
              <CardTitle className="text-2xl">Business Infrastructure</CardTitle>
              <CardDescription>
                Commercial properties and operations requiring comprehensive coverage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-data" />
                  <span className="text-sm">Multi-site security coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-data" />
                  <span className="text-sm">Dedicated drone fleet assignment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-data" />
                  <span className="text-sm">Priority bandwidth allocation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-network-data" />
                  <span className="text-sm">Custom integration protocols</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Enterprise Solutions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">How Polygon Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">1. Deploy Infrastructure</h4>
              <p className="text-sm text-muted-foreground">
                Install sentry turrets that serve as both security nodes and network hubs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-network-signal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-network-signal" />
              </div>
              <h4 className="font-semibold mb-2">2. Launch Drone Fleet</h4>
              <p className="text-sm text-muted-foreground">
                Multi-purpose drones provide mobile coverage for both data delivery and protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-network-data/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="h-8 w-8 text-network-data" />
              </div>
              <h4 className="font-semibold mb-2">3. Connect Networks</h4>
              <p className="text-sm text-muted-foreground">
                Link multiple WISP providers into unified marketplace with seamless handoffs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-network-alert/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-network-alert" />
              </div>
              <h4 className="font-semibold mb-2">4. Monitor & Respond</h4>
              <p className="text-sm text-muted-foreground">
                24/7 AI monitoring with instant response protocols for both security and connectivity
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary/5 to-network-signal/5 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">The Polygon Advantage</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Traditional systems treat security and connectivity as separate problems. 
            Polygon treats them as the same solution. When you choose Polygon, you're not buying two services — 
            you're joining one network that does both.
          </p>
          <Button size="lg" className="mr-4">
            Join the Network
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;