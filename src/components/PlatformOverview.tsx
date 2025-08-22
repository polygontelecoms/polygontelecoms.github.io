import { Card, CardContent } from "@/components/ui/card";
import { Shield, Radio, Network, Zap, Globe, Lock } from "lucide-react";

const PlatformOverview = () => {
  return (
    <section id="platform" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Platforms. <span className="text-gradient-primary">One Vision.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Polygon merges global wireless infrastructure with autonomous security systems, 
            creating a self-scaling network where every security installation strengthens our telecom mesh.
          </p>
        </div>

        {/* Main Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Telecoms Platform */}
          <Card className="enterprise-shadow hover:network-glow transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-network-signal/10 rounded-lg">
                  <Radio className="h-8 w-8 text-network-signal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Polygon Telecoms</h3>
                  <p className="text-muted-foreground">Global WISP Marketplace</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Break free from rigid monthly subscriptions. Access flexible data bundles from 
                wireless providers worldwide through our distributed RF network.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">Per-app, per-time, or per-gigabyte bundles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">Seamless roaming between providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-4 w-4 text-network-signal" />
                  <span className="text-sm">RF base stations for universal coverage</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Platform */}
          <Card className="enterprise-shadow hover:network-glow transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-network-alert/10 rounded-lg">
                  <Shield className="h-8 w-8 text-network-alert" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Polygon Security</h3>
                  <p className="text-muted-foreground">Autonomous Defense Systems</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                AI-driven security turrets and drones that protect premises 24/7 while doubling 
                as RF base stations for our telecom infrastructure.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Lock className="h-4 w-4 text-network-alert" />
                  <span className="text-sm">Autonomous threat detection & response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-4 w-4 text-network-alert" />
                  <span className="text-sm">Independent backup power systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="h-4 w-4 text-network-alert" />
                  <span className="text-sm">Teleoperated escalation capability</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Convergence Explanation */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">The Convergence Advantage</h3>
            <p className="text-lg text-muted-foreground">
              Every security installation becomes a telecom node. Every telecom customer expands our security network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Security Drives Infrastructure</h4>
              <p className="text-muted-foreground text-sm">
                Businesses pay for security, inadvertently funding our global RF network expansion
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Network className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold">Network Effects</h4>
              <p className="text-muted-foreground text-sm">
                More nodes mean better coverage, attracting more consumers and businesses
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-network-signal/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-network-signal" />
              </div>
              <h4 className="text-xl font-semibold">Global Scale</h4>
              <p className="text-muted-foreground text-sm">
                Self-reinforcing growth creates worldwide coverage faster than traditional approaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;