import { Button } from "@/components/ui/button";
import { Shield, Network, Menu, Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PT</span>
            </div>
            <span className="font-bold text-xl">Polygon Telecoms</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link to="/homes" className="text-muted-foreground hover:text-primary transition-colors">
            Homes
          </Link>
          <Link to="/business" className="text-muted-foreground hover:text-primary transition-colors">
            Business
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>
        
        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/network">
              <Globe className="w-4 h-4 mr-2" />
              Network
            </Link>
          </Button>
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="default">
            Purchase
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;