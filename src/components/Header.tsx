import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Network, Menu, Globe, User, LogIn, Settings, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/b1a54142-b530-433d-b772-95a691469d22.png" alt="Polygon Telecoms Logo" className="w-8 h-8" />
            <span className="font-bold text-xl">Polygon Telecoms</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link to="/security" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
            <Shield className="w-4 h-4" />
            <span>Polygon Security</span>
          </Link>
          <Button asChild variant="cta" size="sm">
            <Link to="/request-drone" className="flex items-center space-x-1">
              <span>Request A Drone</span>
            </Link>
          </Button>
        </nav>
        
        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/network">
              <Globe className="w-4 h-4 mr-2" />
              Network
            </Link>
          </Button>
          
          {/* Sign In Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span>Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <LogIn className="mr-2 h-4 w-4" />
                <span>Sign In</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Create Account</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <Link 
                  to="/marketplace" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Marketplace
                </Link>
                <Link 
                  to="/security" 
                  className="text-lg font-medium hover:text-primary transition-colors flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-5 h-5" />
                  <span>Polygon Security</span>
                </Link>
                <Link 
                  to="/network" 
                  className="text-lg font-medium hover:text-primary transition-colors flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Globe className="w-5 h-5" />
                  <span>Network</span>
                </Link>
                <Button asChild variant="cta" size="lg" className="w-full mt-4">
                  <Link to="/request-drone" onClick={() => setIsOpen(false)}>
                    Request A Drone
                  </Link>
                </Button>
                <div className="border-t pt-4 space-y-3">
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <User className="mr-2 h-5 w-5" />
                    Create Account
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;