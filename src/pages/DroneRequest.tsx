import { useState } from "react";
import { MapPin, Clock, Shield, Wifi, Battery, ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Header from "@/components/Header";

const DroneRequest = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState("");
  
  const services = [
    {
      id: "internet",
      name: "Internet & Data",
      icon: <Wifi className="w-6 h-6" />,
      description: "WiFi hotspot delivery from local WISPs",
      basePrice: 15,
      unit: "per hour",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      options: [
        { name: "1GB Data Bundle", price: 5 },
        { name: "5GB Data Bundle", price: 20 },
        { name: "Unlimited 1HR", price: 25 }
      ]
    },
    {
      id: "security",
      name: "Security Escort",
      icon: <Shield className="w-6 h-6" />,
      description: "Personal protection and monitoring",
      basePrice: 45,
      unit: "per hour", 
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      options: [
        { name: "Basic Escort", price: 0 },
        { name: "Enhanced Monitoring", price: 15 },
        { name: "Emergency Response", price: 30 }
      ]
    },
    {
      id: "charging",
      name: "Device Charging",
      icon: <Battery className="w-6 h-6" />,
      description: "Wireless power delivery to your devices",
      basePrice: 25,
      unit: "per hour",
      color: "text-green-500", 
      bgColor: "bg-green-500/10",
      options: [
        { name: "Phone Charging", price: 0 },
        { name: "Laptop Charging", price: 10 },
        { name: "Multiple Devices", price: 20 }
      ]
    }
  ];
  
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: number}>({});
  
  const selectedServiceData = services.find(s => s.id === selectedService);
  const totalPrice = selectedServiceData 
    ? (selectedServiceData.basePrice + Object.values(selectedOptions).reduce((sum, price) => sum + price, 0)) * duration
    : 0;
    
  const eta = Math.floor(Math.random() * 8) + 3; // 3-10 minutes
  
  const handleRequest = () => {
    if (!selectedService || !location) {
      toast.error("Please select a service and enter your location");
      return;
    }
    
    toast.success("Drone request sent! ETA: " + eta + " minutes");
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Request A Drone</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant drone services delivered to your location. Internet, security, or power - on demand.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Selection */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Service</h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <Card 
                      key={service.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedService === service.id 
                          ? 'border-primary ring-2 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${service.bgColor}`}>
                            <div className={service.color}>{service.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <p className="text-sm font-medium text-primary">
                              ${service.basePrice} {service.unit}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Location Input */}
              <div>
                <Label htmlFor="location" className="text-base font-semibold">Your Location</Label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Enter your address or share location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:sticky lg:top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>Order Summary</span>
                    {selectedServiceData && (
                      <Badge variant="secondary" className="ml-auto">
                        <Clock className="w-3 h-3 mr-1" />
                        {eta} min ETA
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedServiceData ? (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${selectedServiceData.bgColor}`}>
                          <div className={selectedServiceData.color}>{selectedServiceData.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{selectedServiceData.name}</h3>
                          <p className="text-sm text-muted-foreground">{selectedServiceData.description}</p>
                        </div>
                      </div>
                      
                      {/* Service Options */}
                      <div>
                        <h4 className="font-medium mb-2">Service Options</h4>
                        <div className="space-y-2">
                          {selectedServiceData.options.map((option, index) => (
                            <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                              <span className="text-sm">{option.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">
                                  {option.price > 0 ? `+$${option.price}` : 'Included'}
                                </span>
                                <Button
                                  size="sm"
                                  variant={selectedOptions[option.name] ? "default" : "outline"}
                                  onClick={() => {
                                    setSelectedOptions(prev => ({
                                      ...prev,
                                      [option.name]: prev[option.name] ? 0 : option.price
                                    }));
                                  }}
                                >
                                  {selectedOptions[option.name] ? "Remove" : "Add"}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div>
                        <Label className="text-sm font-medium">Duration</Label>
                        <div className="flex items-center space-x-3 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setDuration(Math.max(1, duration - 1))}
                            disabled={duration <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-lg font-semibold px-4">{duration}h</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setDuration(Math.min(24, duration + 1))}
                            disabled={duration >= 24}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Price Breakdown */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Base service ({duration}h)</span>
                          <span>${selectedServiceData.basePrice * duration}</span>
                        </div>
                        {Object.entries(selectedOptions).map(([name, price]) => 
                          price > 0 && (
                            <div key={name} className="flex justify-between text-sm">
                              <span>{name} ({duration}h)</span>
                              <span>${price * duration}</span>
                            </div>
                          )
                        )}
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>${totalPrice}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={handleRequest}
                        disabled={!location}
                      >
                        Request Drone Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Select a service to see pricing</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DroneRequest;