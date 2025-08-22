import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Search, Wifi, Zap } from "lucide-react";

const WISPMarketplace = () => {
  const [location, setLocation] = useState("Current Location");
  const [dataType, setDataType] = useState("Quantity Data");
  const [sortBy, setSortBy] = useState("Best Match");
  const [saveData, setSaveData] = useState(true);

  const mockBundles = [
    {
      id: 1,
      provider: "WaveCom",
      price: "$1.50",
      data: "100 MB",
      type: "Data Bundle",
      signal: 4,
      distance: "0.2km"
    },
    {
      id: 2,
      provider: "AirNet", 
      price: "$3.00",
      data: "500 MB",
      type: "Data Bundle",
      signal: 5,
      distance: "0.5km"
    },
    {
      id: 3,
      provider: "SkyFi",
      price: "$1.75",
      data: "Uncapped Use",
      type: "Time Bundle",
      signal: 3,
      distance: "0.8km"
    },
    {
      id: 4,
      provider: "NetLink",
      price: "$12.00",
      data: "2 GB",
      type: "Data Bundle", 
      signal: 4,
      distance: "1.2km"
    },
    {
      id: 5,
      provider: "ConnectMax",
      price: "$5.50",
      data: "1 GB",
      type: "Data Bundle",
      signal: 5,
      distance: "0.3km"
    }
  ];

  const handlePurchase = (bundle: any) => {
    // Real purchase flow would go here
    alert(`Purchasing ${bundle.data} from ${bundle.provider} for ${bundle.price}`);
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Wifi className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">Find WISP Data Bundles</h3>
        </div>
        <p className="text-muted-foreground">Choose a one-time bundle to get online</p>
      </div>

      {/* Search Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="bg-input border-border">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <SelectValue placeholder="Current Location" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Current Location">Current Location</SelectItem>
            <SelectItem value="New York, NY">New York, NY</SelectItem>
            <SelectItem value="Los Angeles, CA">Los Angeles, CA</SelectItem>
            <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
          </SelectContent>
        </Select>

        <Select value={dataType} onValueChange={setDataType}>
          <SelectTrigger className="bg-input border-border">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <SelectValue placeholder="Quantity Data" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Quantity Data">Quantity Data</SelectItem>
            <SelectItem value="Time Based">Time Based</SelectItem>
            <SelectItem value="App Specific">App Specific</SelectItem>
            <SelectItem value="Unlimited">Unlimited</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full md:w-auto mb-6 bg-primary hover:bg-primary/90">
        <Search className="mr-2 h-4 w-4" />
        Find Bundles
      </Button>

      {/* Results */}
      <div className="space-y-4">
        {mockBundles.map((bundle) => (
          <Card key={bundle.id} className="border-border hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-bold text-2xl">{bundle.price}</div>
                    <div className="text-muted-foreground text-sm">{bundle.provider}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">{bundle.data}</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-1 h-3 mx-0.5 rounded-full ${
                              i < bundle.signal ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span>{bundle.distance}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handlePurchase(bundle)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Purchase
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sidebar Controls */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <h4 className="font-semibold mb-4">Filter</h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Save Data</span>
            <button 
              onClick={() => setSaveData(!saveData)}
              className={`w-12 h-6 rounded-full transition-colors ${
                saveData ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-background transition-transform ${
                saveData ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Sort by</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-input border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Best Match">Best Match</SelectItem>
                <SelectItem value="Price Low to High">Price Low to High</SelectItem>
                <SelectItem value="Price High to Low">Price High to Low</SelectItem>
                <SelectItem value="Distance">Distance</SelectItem>
                <SelectItem value="Signal Strength">Signal Strength</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WISPMarketplace;