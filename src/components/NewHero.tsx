
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
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
          
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">One Network, Two Services</h2>
          
          {/* Core Value Proposition */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The same network that connects us is the same network that protects us. 
            One infrastructure makes connection permanent and protection immediate.
          </p>
          
          {/* Problem Statement */}
          <div className="p-4 bg-card/60 backdrop-blur-sm border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base text-foreground">
              Current internet access is limited by location. Security response happens after incidents occur. 
              <span className="text-primary font-semibold"> Both challenges require one solution.</span>
            </p>
          </div>
          
          {/* CTAs - Side by Side */}
          <div className="flex gap-3 px-4 max-w-2xl mx-auto">
            <Button size="lg" className="flex-1 text-sm px-4 py-3 bg-primary hover:bg-primary/90" asChild>
              <Link to="/marketplace">
                <Wifi className="mr-2 h-4 w-4" />
                Polygon Telecoms
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 text-sm px-4 py-3" asChild>
              <Link to="/security">
                <Shield className="mr-2 h-4 w-4" />
                Polygon Security
              </Link>
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
