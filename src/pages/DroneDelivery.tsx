import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Package, MapPin, Navigation } from "lucide-react";
import RealTimeMap from "@/components/RealTimeMap";
import { Button } from "@/components/ui/button";

const DroneDelivery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deliveryDetails, setDeliveryDetails] = useState<any>(null);
  const [dronePosition, setDronePosition] = useState<[number, number]>([40.7589, -73.9851]);
  const [eta, setEta] = useState(8);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service');
    const pickup = urlParams.get('pickup');
    const destination = urlParams.get('destination');
    const price = urlParams.get('price');
    const etaParam = urlParams.get('eta');

    if (service && pickup && destination && price) {
      setDeliveryDetails({
        service: decodeURIComponent(service),
        pickup: decodeURIComponent(pickup),
        destination: decodeURIComponent(destination),
        price: parseFloat(price)
      });
      setEta(etaParam ? parseInt(etaParam) : 8);
    } else {
      // Redirect back if no valid params
      navigate('/request-drone');
    }
  }, [location, navigate]);

  // Simulate drone movement
  useEffect(() => {
    if (!deliveryDetails) return;

    const interval = setInterval(() => {
      setDronePosition(prev => {
        // Simulate movement towards destination
        const targetLat = 40.7549;
        const targetLng = -73.9840;
        const currentLat = prev[0];
        const currentLng = prev[1];
        
        const latDiff = (targetLat - currentLat) * 0.1;
        const lngDiff = (targetLng - currentLng) * 0.1;
        
        return [currentLat + latDiff, currentLng + lngDiff];
      });
      
      setEta(prev => Math.max(0, prev - 1));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [deliveryDetails]);

  if (!deliveryDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" onClick={() => navigate('/request-drone')} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Request
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Drone En Route</h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Package className="w-5 h-5" />
              <span>
                Your {deliveryDetails.service} is being delivered via drone.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Delivery Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-primary" />
                  Delivery Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Service:</span>
                    <div className="font-medium">{deliveryDetails.service}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">From:</span>
                    <div className="font-medium">{deliveryDetails.pickup}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">To:</span>
                    <div className="font-medium">{deliveryDetails.destination}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total Fare:</span>
                    <div className="text-lg font-bold text-primary">${deliveryDetails.price}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ETA:</span>
                    <div className="font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {eta} minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Map */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border overflow-hidden" style={{ height: '500px' }}>
                <RealTimeMap
                  pickupAddress={deliveryDetails.pickup}
                  destinationAddress={deliveryDetails.destination}
                  dronePosition={dronePosition}
                  isTracking={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneDelivery;