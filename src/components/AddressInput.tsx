import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AddressSuggestion {
  display_name: string;
  lat: string;
  lon: string;
  place_id: string;
}

interface AddressInputProps {
  placeholder: string;
  value: string;
  onChange: (address: string, lat?: number, lng?: number) => void;
  icon?: React.ReactNode;
  className?: string;
  showCurrentLocation?: boolean;
}

const AddressInput: React.FC<AddressInputProps> = ({
  placeholder,
  value,
  onChange,
  icon = <MapPin className="w-4 h-4 text-muted-foreground" />,
  className = "",
  showCurrentLocation = true
}) => {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Get current location
  useEffect(() => {
    if (showCurrentLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.display_name) {
              setCurrentLocation(data.display_name);
            }
          } catch (error) {
            console.error('Error getting current location:', error);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  }, [showCurrentLocation]);

  // Debounced search
  const searchAddresses = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=us,ca,gb,au`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Address search error:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setShowSuggestions(true);

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Debounce search
    debounceRef.current = setTimeout(() => {
      searchAddresses(newValue);
    }, 300);
  };

  const handleSuggestionSelect = (suggestion: AddressSuggestion) => {
    onChange(
      suggestion.display_name,
      parseFloat(suggestion.lat),
      parseFloat(suggestion.lon)
    );
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleCurrentLocationSelect = () => {
    if (currentLocation) {
      onChange(currentLocation);
      setShowSuggestions(false);
    }
  };

  const clearInput = () => {
    onChange('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          className={`pl-10 pr-10 ${className}`}
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearInput}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {showSuggestions && (suggestions.length > 0 || currentLocation) && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {showCurrentLocation && currentLocation && (
            <button
              onClick={handleCurrentLocationSelect}
              className="w-full px-4 py-3 text-left hover:bg-muted/50 border-b flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Navigation className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-sm">Current Location</div>
                <div className="text-xs text-muted-foreground truncate">
                  {currentLocation}
                </div>
              </div>
            </button>
          )}
          
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.place_id}
              onClick={() => handleSuggestionSelect(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-muted/50 flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate">{suggestion.display_name}</div>
              </div>
            </button>
          ))}
          
          {isLoading && (
            <div className="px-4 py-3 text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 animate-spin" />
                <span>Searching...</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressInput;