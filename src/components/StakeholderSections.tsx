import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Home, 
  Building2, 
  Wifi, 
  Shield, 
  Target, 
  Camera, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const StakeholderSections = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Built for</span> Three Stakeholders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Polygon Telecoms serves consumers, homes, and businesses with integrated connectivity and security solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consumers/Data Users */}
          <Card className="border-border hover:border-primary/40 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <span>Consumers</span>
                <Badge variant="outline">Data Users</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Flexible Data Bundles</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-network-signal" />
                    <span>Pay-per-use: From $0.10/GB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-network-signal" />
                    <span>App-specific bundles (WhatsApp, VoIP)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-network-signal" />
                    <span>Time-based packages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-network-signal" />
                    <span>Global roaming without subscriptions</span>
                  </li>
                </ul>
              </div>
              <Button variant="hero" className="w-full group">
                Shop Data Bundles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Homes/Residential */}
          <Card className="border-border hover:border-primary/40 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Home className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <span>Homes</span>
                <Badge variant="outline">Residential</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Home Security + WiFi</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-network-alert" />
                    <span>1 sentry gun turret with AI vision</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-network-alert" />
                    <span>2 patrol weapon drones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span>RF base station (WiFi hotspot)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Independent backup power</span>
                  </li>
                </ul>
              </div>
              <Button variant="cta" className="w-full group">
                Subscribe $899/month
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Business/Enterprise */}
          <Card className="border-border hover:border-primary/40 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-network-alert/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-network-alert/20 transition-colors">
                <Building2 className="h-8 w-8 text-network-alert" />
              </div>
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <span>Business</span>
                <Badge variant="outline">Enterprise</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Multi-Site Security Grid</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-network-alert" />
                    <span>Unlimited sentry turrets & weapon drones</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-network-alert" />
                    <span>Teleoperated escalation capability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span>ISP revenue sharing (85% to business)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Theft-proof power systems</span>
                  </li>
                </ul>
              </div>
              <Button variant="enterprise" className="w-full group">
                Custom Enterprise Pricing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* PT vs PS Differentiation */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="border-primary/20 bg-card/50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Wifi className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Polygon Telecoms (PT)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>• Global WISP marketplace</li>
                <li>• Flexible data bundles (not monthly contracts)</li>
                <li>• App-specific packages</li>
                <li>• Seamless roaming via RF network</li>
                <li>• Pay-as-you-use model</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-network-alert/20 bg-card/50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-network-alert" />
                <CardTitle className="text-xl">Polygon Security (PS)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>• Autonomous sentry gun turrets</li>
                <li>• AI-powered weapon drones</li>
                <li>• Computer vision threat detection</li>
                <li>• Teleoperated lethal escalation</li>
                <li>• Independent power backup</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSections;