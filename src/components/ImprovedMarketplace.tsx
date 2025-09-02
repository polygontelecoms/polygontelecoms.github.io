import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Wifi, Signal, Clock, Star } from "lucide-react";

interface WispBundle {
  id: string;
  provider: string;
  name: string;
  price: number;
  data: string;
  validity: string;
  speed: string;
  signalStrength: number;
  distance: number;
  rating: number;
  location: string;
  coordinates: [number, number];
}

const ImprovedMarketplace = () => {
  const [location, setLocation] = useState("");
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);
  const [sortBy, setSortBy] = useState("distance");
  const [bundles, setBundles] = useState<WispBundle[]>([]);

  // Mock WISP bundles data
  const mockBundles: WispBundle[] = [
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
      location: "Downtown Hub",
      coordinates: [40.7128, -74.0060]
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
      location: "Business District",
      coordinates: [40.7589, -73.9851]
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
      location: "Midtown Tower",
      coordinates: [40.7505, -73.9934]
    },
    {
      id: "4",
      provider: "QuickConnect",
      name: "Travel Pass",
      price: 15.99,
      data: "15GB",
      validity: "7 days", 
      speed: "100 Mbps",
      signalStrength: 96,
      distance: 2.1,
      rating: 4.9,
      location: "Airport Hub",
      coordinates: [40.6413, -73.7781]
    }
  ];

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords([position.coords.latitude, position.coords.longitude]);
          setLocation(`${position.coords.latitude.toFixed(3)}, ${position.coords.longitude.toFixed(3)}`);
        },
        () => {
          // Default to NYC coordinates if geolocation fails
          setUserCoords([40.7128, -74.0060]);
          setLocation("New York, NY");
        }
      );
    }
    setBundles(mockBundles);
  }, []);

  const sortedBundles = [...bundles].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "distance":
        return a.distance - b.distance;
      case "speed":
        return parseInt(b.speed) - parseInt(a.speed);
      case "rating":
        return b.rating - a.rating;
      default:
        return a.distance - b.distance;
    }
  });

  const handlePurchase = (bundle: WispBundle) => {
    // Simulate purchase
    alert(`Purchasing ${bundle.name} from ${bundle.provider} for $${bundle.price}`);
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-card rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Available Data Bundles Near You</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Location</label>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="flex-1"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
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
        </div>
      </div>

      {/* Bundle Cards */}
      <div className="grid gap-4">
        {sortedBundles.map((bundle) => (
          <Card key={bundle.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-6 gap-4 items-center">
                {/* Provider & Bundle Info */}
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-lg">{bundle.name}</h3>
                  <p className="text-muted-foreground text-sm">{bundle.provider}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{bundle.location}</span>
                  </div>
                </div>

                {/* Bundle Details */}
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">${bundle.price}</div>
                  <div className="text-sm text-muted-foreground">{bundle.data}</div>
                  <div className="text-xs text-muted-foreground">{bundle.validity}</div>
                </div>

                {/* Speed & Signal */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="font-medium">{bundle.speed}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Signal className="h-3 w-3 text-network-signal" />
                    <span className="text-sm">{bundle.signalStrength}%</span>
                  </div>
                </div>

                {/* Distance & Rating */}
                <div className="text-center">
                  <div className="text-sm font-medium">{bundle.distance}km</div>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{bundle.rating}</span>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="text-center">
                  <Button 
                    onClick={() => handlePurchase(bundle)}
                    className="w-full"
                  >
                    Purchase
                  </Button>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Instant activation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {sortedBundles.length === 0 && (
        <Card className="text-center p-8">
          <Wifi className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No bundles available in your area</h3>
          <p className="text-muted-foreground">Try adjusting your location or check back later.</p>
        </Card>
      )}
    </div>
  );
};

export default ImprovedMarketplace;