import { useEffect, useState } from 'react';
import { Clock, Navigation, MapPin } from 'lucide-react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate drone movement towards user
    const moveInterval = setInterval(() => {
      setDronePosition(prev => ({
        x: Math.min(50, prev.x + 2), // Move towards center (user position)
        y: Math.min(50, prev.y + 1.5)
      }));
    }, 2000);

    return () => clearInterval(moveInterval);
  }, []);

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
              <span>Drone En Route</span>
            </span>
            <Badge variant="secondary" className="bg-green-500/10 text-green-600">
              <Clock className="w-3 h-3 mr-1" />
              ETA: {formatTime(timeRemaining)}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Delivering to: {userLocation}</span>
          </div>
          <div className="mt-2">
            <p className="text-sm"><span className="font-medium">Service:</span> {serviceName}</p>
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
                <div className="absolute -bottom-6 -left-6 text-xs font-medium text-primary whitespace-nowrap">
                  Drone #{Math.floor(Math.random() * 1000)}
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

            {/* Distance indicator */}
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 px-3 py-1 rounded-full text-sm font-medium">
              Distance: {Math.floor(Math.sqrt(Math.pow(50 - dronePosition.x, 2) + Math.pow(50 - dronePosition.y, 2)) * 10)}m
            </div>
          </div>

          {/* Status Updates */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Drone dispatched and en route</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Establishing connection protocols</span>
            </div>
            {timeRemaining < 120 && (
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-600 font-medium">Preparing to deploy service</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DroneTrackingMap;