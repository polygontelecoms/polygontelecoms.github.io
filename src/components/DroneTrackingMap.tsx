import { useEffect, useState } from 'react';
import { Clock, Navigation, MapPin, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DroneTrackingMapProps {
  eta: number;
  userLocation: string;
  serviceName: string;
}

const DroneTrackingMap = ({ eta, userLocation, serviceName }: DroneTrackingMapProps) => {
  const [timeRemaining, setTimeRemaining] = useState(eta * 60); // Convert to seconds
  const [dronePosition, setDronePosition] = useState({ x: 10, y: 10 }); // Starting position
  const [droneId] = useState(`PG${Math.floor(Math.random() * 9000) + 1000}`);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(85 + Math.floor(Math.random() * 15));
  const [statusMessage, setStatusMessage] = useState("Drone dispatched and en route");
  const [altitude, setAltitude] = useState(120 + Math.floor(Math.random() * 80));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Realistic drone movement simulation
    const moveInterval = setInterval(() => {
      setDronePosition(prev => {
        const deltaX = 50 - prev.x;
        const deltaY = 50 - prev.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 2) {
          setCurrentSpeed(0);
          setStatusMessage("Arriving at destination");
          return prev;
        }
        
        // Variable speed based on distance and obstacles
        const baseSpeed = 1.2 + Math.random() * 0.8;
        const speedVariation = 0.8 + Math.random() * 0.4;
        const actualSpeed = baseSpeed * speedVariation;
        setCurrentSpeed(Math.round(actualSpeed * 25)); // Convert to km/h for display
        
        // Slightly curved path (not perfectly straight)
        const noise = (Math.random() - 0.5) * 0.3;
        
        return {
          x: prev.x + (deltaX / distance) * actualSpeed + noise,
          y: prev.y + (deltaY / distance) * actualSpeed + noise
        };
      });
    }, 1500 + Math.random() * 1000); // Variable update intervals

    return () => clearInterval(moveInterval);
  }, []);

  useEffect(() => {
    // Status updates based on time remaining
    const statusInterval = setInterval(() => {
      if (timeRemaining > 240) {
        setStatusMessage("Navigating to your location");
      } else if (timeRemaining > 120) {
        setStatusMessage("Approaching destination area");
      } else if (timeRemaining > 60) {
        setStatusMessage("Preparing for service deployment");
      } else if (timeRemaining > 30) {
        setStatusMessage("Final approach - stand by");
      } else if (timeRemaining > 0) {
        setStatusMessage("Landing sequence initiated");
      } else {
        setStatusMessage("Service delivery complete");
      }
    }, 5000);

    return () => clearInterval(statusInterval);
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      {/* Status Header */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-primary" />
              <span>Drone {droneId}</span>
            </span>
            <Badge variant="secondary" className="bg-green-500/10 text-green-600">
              <Clock className="w-3 h-3 mr-1" />
              ETA: {formatTime(timeRemaining)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">To: {userLocation}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Speed: {currentSpeed} km/h</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Service:</span> {serviceName}
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Battery: {batteryLevel}%</span>
            </div>
          </div>
          <div className="text-sm text-primary font-medium">
            {statusMessage}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Live Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg h-80 border">
            {/* Map Grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* User Location (Center) */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: '50%', top: '50%' }}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute -bottom-6 -left-4 text-xs font-medium text-blue-600 whitespace-nowrap">
                  You
                </div>
                {/* Pulsing circle for user */}
                <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

            {/* Drone Position */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-2000 ease-in-out"
              style={{ 
                left: `${dronePosition.x}%`, 
                top: `${dronePosition.y}%` 
              }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-primary rounded border-2 border-white shadow-lg flex items-center justify-center">
                  <Navigation className="w-3 h-3 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 text-xs font-medium text-primary whitespace-nowrap bg-background/80 px-1 rounded">
                  {droneId}
                </div>
                {/* Movement trail */}
                <div className="absolute inset-0 w-6 h-6 bg-primary/30 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="50%"
                y1="50%"
                x2={`${dronePosition.x}%`}
                y2={`${dronePosition.y}%`}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="opacity-50 text-primary"
              />
            </svg>

            {/* Distance and altitude indicators */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="bg-white/90 dark:bg-black/90 px-3 py-1 rounded-full text-sm font-medium">
                Distance: {Math.floor(Math.sqrt(Math.pow(50 - dronePosition.x, 2) + Math.pow(50 - dronePosition.y, 2)) * 10)}m
              </div>
              <div className="bg-white/90 dark:bg-black/90 px-3 py-1 rounded-full text-sm font-medium">
                Altitude: {altitude}m
              </div>
            </div>
          </div>

          {/* Enhanced Status Updates */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">Flight path optimized</span>
              </div>
              <span className="text-xs text-muted-foreground">✓</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">Weather conditions checked</span>
              </div>
              <span className="text-xs text-muted-foreground">✓</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${timeRemaining < 180 ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                <span className="text-muted-foreground">Service equipment ready</span>
              </div>
              <span className="text-xs text-muted-foreground">{timeRemaining < 180 ? '✓' : '○'}</span>
            </div>
            {timeRemaining < 120 && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-600 font-medium">Landing zone secured</span>
                </div>
                <span className="text-xs text-blue-600">○</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DroneTrackingMap;