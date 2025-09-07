import { useEffect, useState } from 'react';
import { Clock, Navigation, MapPin, Gauge, Shield, Video, Signal } from 'lucide-react';
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
  const [droneId] = useState(`#${Math.floor(Math.random() * 900) + 100}`); // Random 3-digit number
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(85 + Math.floor(Math.random() * 15));
  const [statusMessage, setStatusMessage] = useState("Drone dispatched and en route");
  const [altitude, setAltitude] = useState(120 + Math.floor(Math.random() * 80));
  const [signalStrength] = useState(85 + Math.floor(Math.random() * 15));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Realistic drone movement simulation synced with countdown
    const moveInterval = setInterval(() => {
      setDronePosition(prev => {
        const deltaX = 50 - prev.x;
        const deltaY = 50 - prev.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 2 || timeRemaining <= 0) {
          setCurrentSpeed(0);
          setStatusMessage("Service delivery complete");
          return prev;
        }
        
        // Speed synchronized with remaining time for realistic arrival
        const totalDistance = Math.sqrt(Math.pow(50 - 10, 2) + Math.pow(50 - 10, 2));
        const progressNeeded = (totalDistance - distance) / totalDistance;
        const timeProgress = 1 - (timeRemaining / (eta * 60));
        
        // Adjust speed based on how close we should be vs actual position
        let speedMultiplier = 1.0;
        if (timeProgress > progressNeeded) speedMultiplier = 1.4; // Speed up if behind
        if (timeProgress < progressNeeded) speedMultiplier = 0.7; // Slow down if ahead
        
        const baseSpeed = (1.2 + Math.random() * 0.6) * speedMultiplier;
        const speedVariation = 0.85 + Math.random() * 0.3;
        const actualSpeed = baseSpeed * speedVariation;
        setCurrentSpeed(Math.round(actualSpeed * 28 + Math.random() * 8)); // 20-40 km/h range
        
        // Slightly curved path with wind effect
        const noise = (Math.random() - 0.5) * 0.25;
        const windEffect = Math.sin(Date.now() / 10000) * 0.1;
        
        return {
          x: prev.x + (deltaX / distance) * actualSpeed + noise + windEffect,
          y: prev.y + (deltaY / distance) * actualSpeed + noise
        };
      });
    }, 1200 + Math.random() * 800); // Variable but more frequent updates

    return () => clearInterval(moveInterval);
  }, [timeRemaining, eta]);

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
              <Gauge className="w-4 h-4 text-green-500" />
              <span>Speed: {currentSpeed} km/h</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Service:</span> {serviceName}
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Battery: {batteryLevel}%</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Signal className="w-4 h-4 text-green-500" />
              <span>Signal: {signalStrength}%</span>
            </div>
          </div>
          <div className="text-sm text-primary font-medium">
            {statusMessage}
          </div>
        </CardContent>
      </Card>

      {/* Live Camera Feed */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-primary" />
            <span>Live Camera Feed - Drone {droneId}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg h-48 border overflow-hidden">
            {/* Simulated camera view with moving landscape */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-green-300">
              {/* Clouds moving */}
              <div className="absolute top-2 left-0 w-full h-12 opacity-60">
                <div className="animate-pulse bg-white/40 rounded-full w-16 h-8 absolute top-2 left-1/4"></div>
                <div className="animate-pulse bg-white/30 rounded-full w-12 h-6 absolute top-4 left-1/2 animation-delay-1000"></div>
                <div className="animate-pulse bg-white/50 rounded-full w-20 h-10 absolute top-1 right-1/4 animation-delay-2000"></div>
              </div>
              
              {/* Ground features */}
              <div className="absolute bottom-0 w-full h-32">
                <div className="absolute bottom-0 left-0 w-full h-16 bg-green-600/60"></div>
                <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-green-800/70 rounded-full"></div>
                <div className="absolute bottom-6 right-1/3 w-6 h-6 bg-green-800/70 rounded-full"></div>
                <div className="absolute bottom-8 left-1/2 w-4 h-12 bg-amber-800/60"></div>
              </div>
              
              {/* Building silhouettes */}
              <div className="absolute bottom-16 left-0 w-full h-16 opacity-50">
                <div className="bg-gray-600 w-12 h-12 absolute bottom-0 left-1/6"></div>
                <div className="bg-gray-700 w-8 h-16 absolute bottom-0 left-1/3"></div>
                <div className="bg-gray-600 w-16 h-8 absolute bottom-0 right-1/4"></div>
              </div>
            </div>
            
            {/* Camera UI overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                REC ● LIVE
              </div>
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                ALT: {altitude}m
              </div>
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                GPS: {dronePosition.x.toFixed(1)}, {dronePosition.y.toFixed(1)}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                {formatTime(timeRemaining)}
              </div>
              
              {/* Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border border-white/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Live GPS Tracking</CardTitle>
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