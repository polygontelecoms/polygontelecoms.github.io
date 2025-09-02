import { Button } from "@/components/ui/button";
import { Shield, Network, Menu, Globe, User, LogIn, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
                <span className="hidden sm:inline">Account</span>
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
      </div>
    </header>
  );
};

export default Header;