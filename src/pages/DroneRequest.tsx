import { useState } from "react";
import { Wifi, Shield, Battery, MapPin, Clock, ArrowRight, Minus, Plus, Star, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Header from "@/components/Header";
import DroneTrackingMap from "@/components/DroneTrackingMap";

const DroneRequest = () => {
  const [activeTab, setActiveTab] = useState("internet");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: number}>({});
  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState("");
  const [showTracking, setShowTracking] = useState(false);
  const [sortBy, setSortBy] = useState("distance");

  // Internet & Data bundles (from marketplace)
  const dataBundles = [
    {
      id: "1",
      provider: "CityNet WISP",
      name: "Daily Essentials",
      price: 5.99,
      data: "2GB",
      validity: "24 hours",
      speed: "25 Mbps",
      signalStrength: 85,
      distance: 0.3,
      rating: 4.8,
      location: "Downtown Hub"
    },
    {
      id: "2", 
      provider: "MetroLink ISP",
      name: "Work From Anywhere",
      price: 12.99,
      data: "10GB",
      validity: "3 days",
      speed: "50 Mbps",
      signalStrength: 92,
      distance: 0.8,
      rating: 4.6,
      location: "Business District"
    },
    {
      id: "3",
      provider: "FastNet Wireless", 
      name: "Weekend Bundle",
      price: 8.99,
      data: "5GB",
      validity: "72 hours",
      speed: "35 Mbps",
      signalStrength: 78,
      distance: 1.2,
      rating: 4.4,
      location: "Midtown Tower"
    }
  ];

  // Security services
  const securityServices = [
    {
      id: "security-basic",
      name: "Personal Protection",
      price: 45,
      unit: "per hour",
      description: "Basic drone escort and monitoring",
      features: ["GPS tracking", "Real-time monitoring", "Emergency alerts"]
    },
    {
      id: "security-enhanced",
      name: "Enhanced Security",
      price: 75,
      unit: "per hour", 
      description: "Advanced protection with AI threat detection",
      features: ["AI threat detection", "Live video feed", "Priority response", "Police coordination"]
    }
  ];

  // Battery services
  const batteryServices = [
    {
      category: "Phone Batteries",
      items: [
        { name: "iPhone Battery Pack", price: 25, capacity: "3000mAh", type: "Lightning" },
        { name: "Android Battery Pack", price: 25, capacity: "3000mAh", type: "USB-C" },
        { name: "Universal Wireless Charger", price: 30, capacity: "5000mAh", type: "Qi Wireless" }
      ]
    },
    {
      category: "Standard Batteries", 
      items: [
        { name: "AA Alkaline (4-pack)", price: 8, capacity: "2850mAh", type: "AA" },
        { name: "AAA Alkaline (4-pack)", price: 6, capacity: "1200mAh", type: "AAA" },
        { name: "CR2032 Coin Battery (2-pack)", price: 5, capacity: "225mAh", type: "CR2032" }
      ]
    },
    {
      category: "Power Banks",
      items: [
        { name: "Compact Power Bank", price: 15, capacity: "5000mAh", type: "USB-A/USB-C" },
        { name: "Standard Power Bank", price: 25, capacity: "10000mAh", type: "USB-A/USB-C" },
        { name: "High Capacity Power Bank", price: 45, capacity: "20000mAh", type: "USB-A/USB-C/Wireless" }
      ]
    }
  ];

  const sortedBundles = [...dataBundles].sort((a, b) => {
    switch (sortBy) {
      case "price": return a.price - b.price;
      case "distance": return a.distance - b.distance;
      case "speed": return parseInt(b.speed) - parseInt(a.speed);
      case "rating": return b.rating - a.rating;
      default: return a.distance - b.distance;
    }
  });

  const eta = Math.floor(Math.random() * 8) + 3;

  const handleDataBundlePurchase = (bundle: any) => {
    setSelectedService({
      type: 'data',
      name: bundle.name,
      provider: bundle.provider,
      price: bundle.price,
      details: `${bundle.data} - ${bundle.validity}`
    });
    handleRequest();
  };

  const handleSecurityRequest = (service: any) => {
    setSelectedService({
      type: 'security',
      name: service.name,
      price: service.price * duration,
      details: `${duration} hour${duration > 1 ? 's' : ''} of ${service.description}`
    });
    handleRequest();
  };

  const handleBatteryRequest = (item: any) => {
    setSelectedService({
      type: 'battery',
      name: item.name,
      price: item.price,
      details: `${item.capacity} - ${item.type}`
    });
    handleRequest();
  };

  const handleRequest = () => {
    if (!location) {
      toast.error("Please enter your location");
      return;
    }
    
    setShowTracking(true);
    toast.success("Drone dispatched! ETA: " + eta + " minutes");
  };

  if (showTracking && selectedService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <DroneTrackingMap 
              eta={eta}
              userLocation={location}
              serviceName={selectedService.name}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Request A Drone</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant drone services delivered to your location. Choose from internet, security, or power delivery.
            </p>
          </div>

          {/* Location Input */}
          <div className="max-w-md mx-auto mb-8">
            <Label htmlFor="location" className="text-base font-semibold">Your Location</Label>
            <div className="relative mt-2">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="Enter your address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="internet" className="flex items-center space-x-2">
                <Wifi className="w-4 h-4" />
                <span>Internet & Data</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Security Companion</span>
              </TabsTrigger>
              <TabsTrigger value="battery" className="flex items-center space-x-2">
                <Battery className="w-4 h-4" />
                <span>Battery / Powerbank</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="internet">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Internet & Data Delivery</h2>
                  <p className="text-muted-foreground">Purchase data bundles from local WISPs - delivered instantly via drone</p>
                </div>

                {/* Sort Controls */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Available Data Bundles Near You</h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distance">Closest First</SelectItem>
                      <SelectItem value="price">Lowest Price</SelectItem>
                      <SelectItem value="speed">Fastest Speed</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4">
                  {sortedBundles.map((bundle) => (
                    <Card key={bundle.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-6 gap-4 items-center">
                          <div className="md:col-span-2">
                            <h3 className="font-semibold text-lg">{bundle.name}</h3>
                            <p className="text-muted-foreground text-sm">{bundle.provider}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{bundle.location}</span>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-xl font-bold text-primary">${bundle.price}</div>
                            <div className="text-sm text-muted-foreground">{bundle.data}</div>
                            <div className="text-xs text-muted-foreground">{bundle.validity}</div>
                          </div>

                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 mb-1">
                              <Wifi className="h-4 w-4 text-primary" />
                              <span className="font-medium">{bundle.speed}</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                              <Signal className="h-3 w-3 text-green-500" />
                              <span className="text-sm">{bundle.signalStrength}%</span>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-sm font-medium">{bundle.distance}km</div>
                            <div className="flex items-center justify-center space-x-1 mt-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{bundle.rating}</span>
                            </div>
                          </div>

                          <div className="text-center">
                            <Button 
                              onClick={() => handleDataBundlePurchase(bundle)}
                              className="w-full"
                              disabled={!location}
                            >
                              Purchase
                            </Button>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{eta} min delivery</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Security Companion</h2>
                  <p className="text-muted-foreground">On-demand drone protection and monitoring services</p>
                </div>

                {/* Duration Control */}
                <div className="max-w-md mx-auto mb-6">
                  <Label className="text-base font-semibold">Service Duration</Label>
                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDuration(Math.max(1, duration - 1))}
                      disabled={duration <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-xl font-bold px-6">{duration}h</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDuration(Math.min(24, duration + 1))}
                      disabled={duration >= 24}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {securityServices.map((service) => (
                    <Card key={service.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <div className="text-2xl font-bold text-primary">
                          ${service.price * duration}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${service.price} x {duration} hour{duration > 1 ? 's' : ''}
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={() => handleSecurityRequest(service)}
                          disabled={!location}
                        >
                          Request Security Drone
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="battery">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Battery / Powerbank Delivery</h2>
                  <p className="text-muted-foreground">Emergency power delivery when you need it most</p>
                </div>

                <div className="space-y-8">
                  {batteryServices.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="text-center space-y-3">
                                <Battery className="w-8 h-8 text-primary mx-auto" />
                                <h4 className="font-semibold">{item.name}</h4>
                                <div className="space-y-1">
                                  <div className="text-2xl font-bold text-primary">${item.price}</div>
                                  <div className="text-sm text-muted-foreground">{item.capacity}</div>
                                  <div className="text-xs text-muted-foreground">{item.type}</div>
                                </div>
                                <Button 
                                  className="w-full"
                                  onClick={() => handleBatteryRequest(item)}
                                  disabled={!location}
                                >
                                  Order Now
                                </Button>
                                <div className="flex items-center justify-center space-x-1">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{eta} min delivery</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DroneRequest;