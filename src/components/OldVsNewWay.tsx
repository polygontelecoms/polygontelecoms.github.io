const oldWayImage = "/lovable-uploads/1a3ccfca-be85-435e-97c7-e5ffc147c33b.png";
const newWayImage = "/lovable-uploads/9dbe75ac-1703-41ea-97a0-45600270c423.png";
const sentryGunImage = "/lovable-uploads/1a3ccfca-be85-435e-97c7-e5ffc147c33b.png";
const droneSwarmImage = "/lovable-uploads/9dbe75ac-1703-41ea-97a0-45600270c423.png";

const OldVsNewWay = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Telemetry <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fixed ground stations to autonomous aerial networks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Old Way */}
          <div className="text-center">
            <div className="relative mb-6">
              <img 
                src={oldWayImage} 
                alt="Old Way: Fixed ground-based telecom towers and infrastructure"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                OLD WAY
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-600">Traditional Infrastructure</h3>
            <p className="text-muted-foreground text-sm">
              Fixed towers, limited coverage, expensive infrastructure, 
              security response that happens after incidents occur.
            </p>
          </div>
          
          {/* New Way */}
          <div className="text-center">
            <div className="relative mb-6">
              <img 
                src={newWayImage} 
                alt="New Way: Autonomous drone network with sentry turrets and mobile connectivity"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW WAY
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-600">Polygon Innovation</h3>
            <p className="text-muted-foreground text-sm">
              Autonomous drones, universal coverage, immediate security, 
              one network serving both connectivity and protection.
            </p>
          </div>
        </div>
        
        {/* Additional Technical Details */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mt-12">
          {/* Sentry Gun Details */}
          <div className="text-center">
            <img 
              src={sentryGunImage} 
              alt="Traditional solar powered industrial transmitter infrastructure"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Drone Swarm Details */}
          <div className="text-center">
            <img 
              src={droneSwarmImage} 
              alt="Advanced drone swarm with sentry turret and optional dongle technology"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNewWay;