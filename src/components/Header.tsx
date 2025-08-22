import { Button } from "@/components/ui/button";
import { Shield, Network, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary" />
            <Network className="h-4 w-4 text-accent absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Polygon</h1>
            <p className="text-xs text-muted-foreground -mt-1">Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#platform" className="text-foreground hover:text-primary transition-colors">
            Platform
          </a>
          <a href="#security" className="text-foreground hover:text-primary transition-colors">
            Security
          </a>
          <a href="#telecoms" className="text-foreground hover:text-primary transition-colors">
            Telecoms
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="enterprise" className="hidden sm:flex">
            Request Demo
          </Button>
          <Button variant="hero">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;