import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  DollarSign, 
  Zap, 
  ArrowUpDown,
  User,
  CreditCard,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import AddressInput from './AddressInput';
import RealTimeMap from './RealTimeMap';

interface DroneService {
  id: string;
  type: 'internet' | 'security' | 'battery';
  name: string;
  description: string;
  icon: React.ReactNode;
  basePrice: number;
  estimatedTime: number;
  available: boolean;
}

interface DroneBookingProps {
  selectedService?: DroneService;
}

const DroneBooking: React.FC<DroneBookingProps> = ({ selectedService }) => {
  const navigate = useNavigate();
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [pickupCoords, setPickupCoords] = useState<[number, number] | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<[number, number] | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [availableDrones, setAvailableDrones] = useState<number>(3);
  const [selectedDroneType, setSelectedDroneType] = useState<DroneService | null>(selectedService || null);
  const [isBooking, setIsBooking] = useState(false);

  // Available drone services
  const droneServices: DroneService[] = [
    {
      id: 'internet',
      type: 'internet',
      name: 'Internet & Data Delivery',
      description: 'Mobile hotspot and data bundle delivery',
      icon: <Zap className="w-5 h-5" />,
      basePrice: 15,
      estimatedTime: 8,
      available: true
    },
    {
      id: 'security',
      type: 'security',
      name: 'Security Companion',
      description: 'Personal security drone escort',
      icon: <CheckCircle className="w-5 h-5" />,
      basePrice: 25,
      estimatedTime: 5,
      available: true
    },
    {
      id: 'battery',
      type: 'battery',
      name: 'Battery/Powerbank Delivery',
      description: 'Emergency power solutions delivered',
      icon: <Zap className="w-5 h-5" />,
      basePrice: 12,
      estimatedTime: 6,
      available: true
    }
  ];

  // Calculate distance and pricing
  const calculateEstimates = () => {
    if (!pickupCoords || !destinationCoords || !selectedDroneType) return;

    // Calculate distance using Haversine formula
    const R = 6371; // Earth's radius in km
    const dLat = (destinationCoords[0] - pickupCoords[0]) * Math.PI / 180;
    const dLon = (destinationCoords[1] - pickupCoords[1]) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(pickupCoords[0] * Math.PI / 180) * Math.cos(destinationCoords[0] * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;

    // Calculate price based on distance and service type
    const distancePrice = distance * 2.5; // $2.5 per km
    const totalPrice = selectedDroneType.basePrice + distancePrice;
    setEstimatedPrice(Math.round(totalPrice * 100) / 100);

    // Calculate estimated time (assuming 60km/h average speed)
    const flightTime = (distance / 60) * 60; // minutes
    const totalTime = selectedDroneType.estimatedTime + flightTime;
    setEstimatedTime(Math.round(totalTime));
  };

  useEffect(() => {
    calculateEstimates();
  }, [pickupCoords, destinationCoords, selectedDroneType]);

  // Update available drones based on location
  useEffect(() => {
    if (pickupCoords) {
      // Simulate drone availability based on location
      const availability = Math.floor(Math.random() * 5) + 1;
      setAvailableDrones(availability);
    }
  }, [pickupCoords]);

  const handlePickupChange = (address: string, lat?: number, lng?: number) => {
    setPickupAddress(address);
    if (lat && lng) {
      setPickupCoords([lat, lng]);
    }
  };

  const handleDestinationChange = (address: string, lat?: number, lng?: number) => {
    setDestinationAddress(address);
    if (lat && lng) {
      setDestinationCoords([lat, lng]);
    }
  };

  const swapAddresses = () => {
    const tempAddress = pickupAddress;
    const tempCoords = pickupCoords;
    setPickupAddress(destinationAddress);
    setDestinationAddress(tempAddress);
    setPickupCoords(destinationCoords);
    setDestinationCoords(tempCoords);
  };

  const handleBookDrone = async () => {
    if (!selectedDroneType || !pickupAddress || !destinationAddress) return;

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      navigate(`/drone-delivery?service=${encodeURIComponent(selectedDroneType.name)}&pickup=${encodeURIComponent(pickupAddress)}&destination=${encodeURIComponent(destinationAddress)}&price=${estimatedPrice}&eta=${estimatedTime}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Booking Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  <span>Request Drone Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Service Selection */}
                {!selectedService && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Select Service</label>
                    <div className="space-y-2">
                      {droneServices.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedDroneType(service)}
                          className={`w-full p-3 rounded-lg border text-left transition-colors ${
                            selectedDroneType?.id === service.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-sm text-muted-foreground">{service.description}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">${service.basePrice}+</div>
                              <div className="text-xs text-muted-foreground">~{service.estimatedTime}min</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                {/* Address Inputs */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Pickup Location</label>
                    <AddressInput
                      placeholder="Enter pickup address"
                      value={pickupAddress}
                      onChange={handlePickupChange}
                      icon={<MapPin className="w-4 h-4 text-green-500" />}
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={swapAddresses}
                      className="h-8 w-8 p-0 rounded-full"
                    >
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Destination</label>
                    <AddressInput
                      placeholder="Where to?"
                      value={destinationAddress}
                      onChange={handleDestinationChange}
                      icon={<MapPin className="w-4 h-4 text-red-500" />}
                    />
                  </div>
                </div>

                {/* Drone Availability */}
                {pickupCoords && (
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Drone Availability</span>
                      </div>
                      <Badge variant="secondary">
                        {availableDrones} drone{availableDrones !== 1 ? 's' : ''} nearby
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Pricing Card */}
            {selectedDroneType && pickupCoords && destinationCoords && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span>Trip Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {selectedDroneType.icon}
                      </div>
                      <div>
                        <div className="font-medium">{selectedDroneType.name}</div>
                        <div className="text-sm text-muted-foreground">
                          ETA: {estimatedTime} minutes
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${estimatedPrice}</div>
                      <div className="text-xs text-muted-foreground">Total fare</div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base fare</span>
                      <span>${selectedDroneType.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance charge</span>
                      <span>${(estimatedPrice - selectedDroneType.basePrice).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookDrone}
                    disabled={isBooking || !pickupAddress || !destinationAddress}
                    className="w-full"
                    size="lg"
                  >
                    {isBooking ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Requesting Drone...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Book Drone - ${estimatedPrice}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Panel - Map */}
          <div className="lg:sticky lg:top-6">
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <RealTimeMap
                  pickupAddress={pickupAddress}
                  destinationAddress={destinationAddress}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneBooking;