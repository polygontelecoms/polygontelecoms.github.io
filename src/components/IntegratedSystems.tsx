import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Shield, Plane, Radio, Building, Users, ArrowRight } from "lucide-react";
import sentryTurretImage from "@/assets/sentry-turret.jpg";
import telecomTowerImage from "@/assets/telecom-tower.jpg";
import networkVisualizationImage from "@/assets/network-visualization.jpg";
const IntegratedSystems = () => {
  return <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">One Network, Two Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Polygon's core innovation is its synergistic infrastructure. The same hardware that provides 
            AI-driven security also powers a city-wide, on-demand telecommunications network.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="overview">System Overview</TabsTrigger>
            <TabsTrigger value="telecoms">Polygon Telecoms</TabsTrigger>
            <TabsTrigger value="security">Polygon Security</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={networkVisualizationImage} alt="Integrated Polygon network infrastructure visualization" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">The Polygon Network Viz</h3>
                <p className="text-lg text-muted-foreground">
                  Live drone movements, data traffic, and network status. See how many drones are active, 
                  flying, or recharging on this map.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-network-signal rounded-full"></div>
                    <span>Every security node expands the telecom grid</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Every telecom user benefits from security coverage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-network-alert rounded-full"></div>
                    <span>Drones do double duty: deliver internet and protect people</span>
                  </div>
                </div>
                <Button className="mt-6">
                  View Live Network Map
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="telecoms" className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Wifi className="h-8 w-8 text-primary" />
                  <h3 className="text-3xl font-bold">Polygon Telecoms</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Partners with existing internet providers and links them into a single marketplace. 
                  Our drones act as mobile cell towers, delivering data bundles instantly to wherever you are.
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2">Data Drones: On-Demand Connectivity</h4>
                      <p className="text-sm text-muted-foreground">
                        Order a data bundle delivered by drone network. High-speed internet, anywhere you need it.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-network-signal">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2">WISP Marketplace Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Buy from any provider in our network. Never lose connection as you move between coverage areas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <img src={telecomTowerImage} alt="Polygon telecommunications tower with integrated systems" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={sentryTurretImage} alt="AI-powered sentry turret with integrated charging and network capabilities" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-network-signal" />
                  <h3 className="text-3xl font-bold">Polygon Security</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  AI-driven sentry turrets and drones for property defense. These same turrets are charging hubs 
                  and network nodes for the telecom system.
                </p>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-network-signal">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2">Escalating Protection Protocol</h4>
                      <p className="text-sm text-muted-foreground">
                        Warn → Call Backup → Intervene. System escalates logically with law enforcement in the loop.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-network-alert">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-2">Personal Guardian Drones</h4>
                      <p className="text-sm text-muted-foreground">
                        Be escorted on foot, covered in a vehicle, or rescued if attacked. Protection that follows you.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Integration Benefits */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Why Integration Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Shared Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Security turrets double as charging hubs and network nodes. 
                  One installation serves both purposes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
              <Plane className="h-12 w-12 text-network-signal mx-auto mb-4" />
              <CardTitle>Multi-Purpose Drones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same drones deliver internet packages and provide security escort. 
                  Efficiency through unified fleet management.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-network-data mx-auto mb-4" />
                <CardTitle>Network Effect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every security subscriber expands coverage. 
                  Every telecom user strengthens the protection grid.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default IntegratedSystems;