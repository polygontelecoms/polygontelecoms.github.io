import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import droneFleetImage from "@/assets/drone-fleet.jpg";

const NewHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={droneFleetImage} 
          alt="Polygon drone fleet providing integrated connectivity and security services" 
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-primary">Secure the World.</span>
            <br />
            <span className="text-foreground">Connect the World.</span>
          </h1>
          
          {/* Core Value Proposition */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            The same network that connects us is the same network that protects us. 
            One integrated infrastructure makes connection permanent and protection proactive.
          </p>
          
          {/* Problem Statement */}
          <div className="mb-12 p-6 bg-card/60 backdrop-blur-sm border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              Today, internet access is fragmented and unreliable. Security is reactive and arrives after damage is already done. 
              <span className="text-primary font-semibold"> Both problems are solved with one system.</span>
            </p>
          </div>
          
          {/* Dual Service Pills */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm border border-border rounded-full px-6 py-3">
              <Wifi className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Polygon Telecoms</span>
              <span className="text-sm text-muted-foreground">Instant Data Delivery</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm border border-border rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-network-signal" />
              <span className="text-lg font-medium">Polygon Security</span>
              <span className="text-sm text-muted-foreground">Proactive Protection</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Explore Security Solutions
              <Shield className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Browse Data Plans
              <Radio className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Never Offline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">One</div>
              <div className="text-sm text-muted-foreground">Unified System</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">Zero</div>
              <div className="text-sm text-muted-foreground">Reaction Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;