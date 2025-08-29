import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { X, Users, Activity, Network } from 'lucide-react';
import { Button } from './ui/button';

const communities = [
  { id: 'A', color: '#ff4444', nodes: 26, edges: 330, name: 'Community A' },
  { id: 'B', color: '#4444ff', nodes: 31, edges: 440, name: 'Community B' },
  { id: 'C', color: '#44ff44', nodes: 21, edges: 246, name: 'Community C' },
  { id: 'D', color: '#aa44ff', nodes: 23, edges: 273, name: 'Community D' },
  { id: 'E', color: '#ff8844', nodes: 29, edges: 392, name: 'Community E' },
  { id: 'F', color: '#ffff44', nodes: 16, edges: 169, name: 'Community F' },
];

// Generate network data based on communities
const generateNetworkData = () => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  communities.forEach((community, communityIndex) => {
    const centerX = (communityIndex % 3) * 400;
    const centerY = Math.floor(communityIndex / 3) * 300;
    
    // Create central node for community
    nodes.push({
      id: `central-${community.id}`,
      type: 'default',
      position: { x: centerX, y: centerY },
      data: { 
        label: `Central ${community.id}`,
        community: community.id
      },
      style: {
        backgroundColor: community.color,
        color: 'white',
        border: `2px solid ${community.color}`,
        borderRadius: '50%',
        width: 60,
        height: 60,
        fontSize: '12px',
        fontWeight: 'bold',
      },
    });
    
    // Create surrounding nodes
    for (let i = 0; i < Math.min(community.nodes - 1, 15); i++) {
      const angle = (i * 2 * Math.PI) / (community.nodes - 1);
      const radius = 80 + Math.random() * 60;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      nodes.push({
        id: `${community.id}-${i}`,
        type: 'default',
        position: { x, y },
        data: { 
          label: `${community.id}${i}`,
          community: community.id
        },
        style: {
          backgroundColor: community.color,
          color: 'white',
          border: `1px solid ${community.color}`,
          borderRadius: '50%',
          width: 30,
          height: 30,
          fontSize: '10px',
        },
      });
      
      // Connect to central node
      edges.push({
        id: `edge-central-${community.id}-${i}`,
        source: `central-${community.id}`,
        target: `${community.id}-${i}`,
        style: { stroke: community.color, strokeOpacity: 0.6 },
        type: 'straight',
      });
      
      // Add some random connections within community
      if (Math.random() > 0.7 && i > 0) {
        const targetIndex = Math.floor(Math.random() * i);
        edges.push({
          id: `edge-${community.id}-${i}-${targetIndex}`,
          source: `${community.id}-${i}`,
          target: `${community.id}-${targetIndex}`,
          style: { stroke: community.color, strokeOpacity: 0.4 },
          type: 'straight',
        });
      }
    }
  });
  
  // Add inter-community connections
  for (let i = 0; i < communities.length - 1; i++) {
    for (let j = i + 1; j < communities.length; j++) {
      if (Math.random() > 0.5) {
        edges.push({
          id: `edge-inter-${communities[i].id}-${communities[j].id}`,
          source: `central-${communities[i].id}`,
          target: `central-${communities[j].id}`,
          style: { stroke: '#666', strokeOpacity: 0.3, strokeDasharray: '5,5' },
          type: 'straight',
        });
      }
    }
  }
  
  return { nodes, edges };
};

interface NetworkVisualizerProps {
  onClose: () => void;
}

const NetworkVisualizer: React.FC<NetworkVisualizerProps> = ({ onClose }) => {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => generateNetworkData(), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-80 bg-muted/30 border-r border-border p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Network Visualizer</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>All Stakeholders</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Activity className="w-4 h-4" />
              <span>Recent Activity</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Network className="w-4 h-4" />
              <span>Engagements</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-4">Communities</h3>
            <div className="space-y-3">
              {communities.map((community) => (
                <div key={community.id} className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-center space-x-3 mb-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: community.color }}
                    />
                    <span className="font-medium">{community.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Nodes: {community.nodes}</div>
                    <div>Edges: {community.edges}</div>
                    <div className="text-xs">Central: {community.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main visualization area */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            style={{ backgroundColor: '#fafafa' }}
            nodesDraggable={true}
            nodesConnectable={true}
            elementsSelectable={true}
          >
            <Background color="#ddd" gap={20} />
            <Controls />
            <MiniMap 
              nodeStrokeWidth={3}
              zoomable
              pannable
              style={{
                backgroundColor: '#f8f8f8',
              }}
            />
            <Panel position="top-right">
              <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium mb-2">Network Stats</div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Total Nodes: {nodes.length}</div>
                  <div>Total Edges: {edges.length}</div>
                  <div>Communities: {communities.length}</div>
                </div>
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualizer;