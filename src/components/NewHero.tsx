
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import droneFleetImage from "@/assets/drone-fleet.jpg";

const NewHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={droneFleetImage} 
          alt="Polygon drone fleet providing integrated connectivity and security services" 
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center w-full max-w-7xl py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-primary">Secure the World.</span>
            <br />
            <span className="text-foreground">Connect the World.</span>
          </h1>
          
          {/* Core Value Proposition */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The same network that connects us is the same network that protects us. 
            One integrated infrastructure makes connection permanent and protection proactive.
          </p>
          
          {/* Problem Statement */}
          <div className="p-4 bg-card/60 backdrop-blur-sm border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base text-foreground">
              Today, internet access is fragmented and unreliable. Security is reactive and arrives after damage is already done. 
              <span className="text-primary font-semibold"> Both problems are solved with one system.</span>
            </p>
          </div>
          
          {/* Dual Service Pills */}
          <div className="flex flex-col gap-3 px-4">
            <div className="flex items-center justify-center space-x-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Wifi className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Polygon Telecoms</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-network-signal flex-shrink-0" />
              <span className="text-sm font-medium">Polygon Security</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col gap-3 px-4">
            <Button size="lg" className="w-full text-sm px-6 py-3 bg-primary hover:bg-primary/90">
              Explore Security Solutions
              <Shield className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full text-sm px-6 py-3">
              Browse Data Plans
              <Radio className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 px-4 pt-4">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Never Offline</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">One</div>
              <div className="text-xs text-muted-foreground">Unified System</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Zero</div>
              <div className="text-xs text-muted-foreground">Reaction Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
