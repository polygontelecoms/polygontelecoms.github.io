import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, MapPin, Clock } from 'lucide-react';

// Fix Leaflet default markers in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RealTimeMapProps {
  pickupAddress: string;
  destinationAddress: string;
  dronePosition?: [number, number];
  userPosition?: [number, number];
  isTracking?: boolean;
  onLocationSelect?: (lat: number, lng: number, address: string) => void;
}

const RealTimeMap: React.FC<RealTimeMapProps> = ({
  pickupAddress,
  destinationAddress,
  dronePosition,
  userPosition,
  isTracking = false,
  onLocationSelect
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [pickupCoords, setPickupCoords] = useState<[number, number] | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<[number, number] | null>(null);
  const [droneMarker, setDroneMarker] = useState<L.Marker | null>(null);
  const [routeLine, setRouteLine] = useState<L.Polyline | null>(null);

  // Create custom drone icon
  const droneIcon = L.divIcon({
    html: `<div style="background: #3b82f6; border: 2px solid white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
      </svg>
    </div>`,
    className: 'drone-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  // Geocoding function using Nominatim (OpenStreetMap)
  const geocodeAddress = async (address: string): Promise<[number, number] | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    return null;
  };

  // Reverse geocoding
  const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    } catch (error) {
      console.error('Reverse geocoding error:', error);
      return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setCurrentLocation(coords);
          initializeMap(coords);
        },
        () => {
          // Default to New York City
          const defaultCoords: [number, number] = [40.7128, -74.0060];
          setCurrentLocation(defaultCoords);
          initializeMap(defaultCoords);
        }
      );
    } else {
      const defaultCoords: [number, number] = [40.7128, -74.0060];
      setCurrentLocation(defaultCoords);
      initializeMap(defaultCoords);
    }

    function initializeMap(center: [number, number]) {
      if (!mapRef.current) return;

      const map = L.map(mapRef.current, {
        center,
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      // Add current location marker
      L.marker(center).addTo(map)
        .bindPopup('Your current location')
        .openPopup();

      // Handle map clicks for location selection
      if (onLocationSelect) {
        map.on('click', async (e) => {
          const { lat, lng } = e.latlng;
          const address = await reverseGeocode(lat, lng);
          onLocationSelect(lat, lng, address);
        });
      }

      mapInstanceRef.current = map;
    }
  }, [onLocationSelect]);

  // Geocode addresses and add markers
  useEffect(() => {
    const geocodeAndAddMarkers = async () => {
      if (!mapInstanceRef.current) return;

      // Geocode pickup address
      if (pickupAddress && pickupAddress !== pickupCoords?.[0]?.toString()) {
        const coords = await geocodeAddress(pickupAddress);
        if (coords) {
          setPickupCoords(coords);
          L.marker(coords, {
            icon: L.divIcon({
              html: '<div style="background: #10b981; border: 2px solid white; border-radius: 50%; width: 16px; height: 16px;"></div>',
              className: 'pickup-marker',
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })
          }).addTo(mapInstanceRef.current)
            .bindPopup(`Pickup: ${pickupAddress}`);
        }
      }

      // Geocode destination address
      if (destinationAddress && destinationAddress !== destinationCoords?.[0]?.toString()) {
        const coords = await geocodeAddress(destinationAddress);
        if (coords) {
          setDestinationCoords(coords);
          L.marker(coords, {
            icon: L.divIcon({
              html: '<div style="background: #ef4444; border: 2px solid white; border-radius: 50%; width: 16px; height: 16px;"></div>',
              className: 'destination-marker',
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })
          }).addTo(mapInstanceRef.current)
            .bindPopup(`Destination: ${destinationAddress}`);
        }
      }

      // Draw route if both addresses are available
      if (pickupCoords && destinationCoords && !routeLine) {
        const line = L.polyline([pickupCoords, destinationCoords], {
          color: '#3b82f6',
          weight: 4,
          opacity: 0.8,
          dashArray: '10, 10'
        }).addTo(mapInstanceRef.current);
        setRouteLine(line);

        // Fit map to show entire route
        const group = new L.FeatureGroup([
          L.marker(pickupCoords),
          L.marker(destinationCoords)
        ]);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }
    };

    geocodeAndAddMarkers();
  }, [pickupAddress, destinationAddress, pickupCoords, destinationCoords]);

  // Update drone position
  useEffect(() => {
    if (!mapInstanceRef.current || !dronePosition) return;

    if (droneMarker) {
      droneMarker.setLatLng(dronePosition);
    } else {
      const marker = L.marker(dronePosition, { icon: droneIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup('Drone location');
      setDroneMarker(marker);
    }
  }, [dronePosition, droneMarker]);

  // Clean up
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      
      {isTracking && (
        <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Live Tracking</span>
          </div>
          {dronePosition && (
            <div className="text-xs text-muted-foreground mt-1">
              Drone: {dronePosition[0].toFixed(4)}, {dronePosition[1].toFixed(4)}
            </div>
          )}
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border text-xs text-muted-foreground">
        © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default RealTimeMap;