import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Shield, Plane, Radio, Building, Users, ArrowRight } from "lucide-react";

const IntegratedSystems = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Polygon's core innovation is its synergistic infrastructure serving both connectivity and security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Telecoms Card */}
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Polygon Telecoms</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Partners with WISPs to create a unified marketplace. Drones deliver data bundles instantly anywhere you are.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/marketplace">Browse Plans</a>
              </Button>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <Shield className="h-12 w-12 text-network-signal mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Polygon Security</h3>
              <p className="text-muted-foreground text-sm mb-4">
                AI-driven sentry turrets and drones for property defense. Same infrastructure powers telecom network.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/business">Learn More</a>
              </Button>
            </CardContent>
          </Card>

          {/* Network Card */}
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <Plane className="h-12 w-12 text-network-data mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Live Network</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch real-time drone movements and network activity across the Polygon infrastructure.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/network">View Network</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Integration Benefits */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">Why Integration Works</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Building className="h-10 w-10 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Shared Infrastructure</h4>
            <p className="text-muted-foreground text-sm">
              Security turrets double as charging hubs and network nodes.
            </p>
          </Card>
          <Card className="text-center p-6">
            <Plane className="h-10 w-10 text-network-signal mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Multi-Purpose Drones</h4>
            <p className="text-muted-foreground text-sm">
              Same drones deliver internet packages and provide security escort.
            </p>
          </Card>
          <Card className="text-center p-6">
            <Users className="h-10 w-10 text-network-data mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Network Effect</h4>
            <p className="text-muted-foreground text-sm">
              Every security subscriber expands coverage area.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSystems;