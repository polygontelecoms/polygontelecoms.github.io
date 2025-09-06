import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import DroneTrackingMap from "@/components/DroneTrackingMap";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const DroneDelivery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deliveryDetails, setDeliveryDetails] = useState<any>(null);

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(location.search);
    const bundle = urlParams.get('bundle');
    const provider = urlParams.get('provider');
    const price = urlParams.get('price');
    const deliveryLocation = urlParams.get('location');

    if (bundle && provider && price && deliveryLocation) {
      setDeliveryDetails({
        bundle: decodeURIComponent(bundle),
        provider: decodeURIComponent(provider),
        price: price,
        location: decodeURIComponent(deliveryLocation)
      });
      
      toast.success(`Data bundle ordered! Drone dispatched for delivery.`);
    } else {
      // Redirect back to marketplace if no valid parameters
      navigate('/marketplace');
    }
  }, [location, navigate]);

  const eta = Math.floor(Math.random() * 8) + 3; // 3-10 minutes

  if (!deliveryDetails) {
    return null; // Will redirect to marketplace
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Button variant="ghost" onClick={() => navigate('/marketplace')} className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Marketplace
            </Button>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Data Bundle Delivery</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your {deliveryDetails.bundle} from {deliveryDetails.provider} is being delivered via drone to your location.
              </p>
            </div>
          </div>
          
          <DroneTrackingMap 
            eta={eta}
            userLocation={deliveryDetails.location}
            serviceName={`${deliveryDetails.bundle} - ${deliveryDetails.provider}`}
          />
        </div>
      </main>
    </div>
  );
};

export default DroneDelivery;