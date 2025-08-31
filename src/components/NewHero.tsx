
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import droneFleetImage from "@/assets/drone-fleet.jpg";

const NewHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={droneFleetImage} 
          alt="Polygon drone fleet providing integrated connectivity and security services" 
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-primary">Secure the World.</span>
            <br />
            <span className="text-foreground">Connect the World.</span>
          </h1>
          
          {/* Core Value Proposition */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            The same network that connects us is the same network that protects us. 
            One integrated infrastructure makes connection permanent and protection proactive.
          </p>
          
          {/* Problem Statement */}
          <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-card/60 backdrop-blur-sm border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-foreground">
              Today, internet access is fragmented and unreliable. Security is reactive and arrives after damage is already done. 
              <span className="text-primary font-semibold"> Both problems are solved with one system.</span>
            </p>
          </div>
          
          {/* Dual Service Pills */}
          <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <div className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 sm:px-6 py-3">
              <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium">Polygon Telecoms</span>
              <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">Instant Data Delivery</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 sm:px-6 py-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-network-signal flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium">Polygon Security</span>
              <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">Proactive Protection</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90">
              Explore Security Solutions
              <Shield className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Browse Data Plans
              <Radio className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Never Offline</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">One</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Unified System</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Zero</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Reaction Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
