import { Shield, Network, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary" />
                <Network className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Polygon</h3>
                <p className="text-xs text-muted-foreground -mt-1">Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Secure the World. Connect the World. The convergence of global wireless 
              infrastructure and autonomous security systems.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#telecoms" className="hover:text-foreground transition-colors">Telecoms Marketplace</a></li>
              <li><a href="#security" className="hover:text-foreground transition-colors">Security Systems</a></li>
              <li><a href="#coverage" className="hover:text-foreground transition-colors">Coverage Map</a></li>
              <li><a href="#api" className="hover:text-foreground transition-colors">Developer API</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#consumers" className="hover:text-foreground transition-colors">For Consumers</a></li>
              <li><a href="#businesses" className="hover:text-foreground transition-colors">For Businesses</a></li>
              <li><a href="#isps" className="hover:text-foreground transition-colors">For ISPs</a></li>
              <li><a href="#enterprise" className="hover:text-foreground transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@polygon-platform.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Global Headquarters<br />San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 Polygon Platform. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;