import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Radio, Zap } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Polygon Network Infrastructure" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Network Grid Overlay */}
      <div className="absolute inset-0 network-grid opacity-10" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Secure the World. Connect the World.</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Always-On</span>
            <br />
            <span className="text-foreground">Connectivity</span>
            <br />
            <span className="text-foreground">& Security</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The world's first converged platform that merges global wireless marketplace 
            with AI-driven autonomous security infrastructure
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Radio className="h-4 w-4 text-network-signal" />
              <span className="text-sm">Global WISP Marketplace</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-network-alert" />
              <span className="text-sm">Autonomous Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm">RF Base Stations</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Request Enterprise Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="enterprise" className="text-lg px-8 py-6">
              Explore Platform
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">Global</div>
              <div className="text-sm text-muted-foreground">Coverage Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">Zero</div>
              <div className="text-sm text-muted-foreground">Human Risk</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full pulse-network" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full pulse-network" style={{animationDelay: "1s"}} />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-network-signal rounded-full pulse-network" style={{animationDelay: "2s"}} />
    </section>
  );
};

export default Hero;