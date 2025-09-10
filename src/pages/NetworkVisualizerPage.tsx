import React, { useState } from 'react';
import { Navigation, Search, Users, Activity, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import RealTimeMap from '@/components/RealTimeMap';

const NetworkVisualizerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const nodes = [
    { id: '1', name: 'CityNet Hub', type: 'wisp', status: 'online', connections: 145, strength: 95 },
    { id: '2', name: 'Metro Tower', type: 'tower', status: 'online', connections: 89, strength: 88 },
    { id: '3', name: 'Midtown Relay', type: 'tower', status: 'maintenance', connections: 67, strength: 42 },
    { id: '4', name: 'Drone Alpha-7', type: 'drone', status: 'online', connections: 12, strength: 78 }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Network Coverage Map</h1>
          <p className="text-muted-foreground">Real-time network infrastructure visualization</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Search Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search nodes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Nodes</span>
                  <Badge variant="secondary">{nodes.length}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Online</span>
                  <Badge className="bg-green-500/10 text-green-600">
                    {nodes.filter(n => n.status === 'online').length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <RealTimeMap
                  pickupAddress=""
                  destinationAddress=""
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualizerPage;