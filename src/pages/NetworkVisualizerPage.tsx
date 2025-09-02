import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NetworkVisualizerPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Network Visualizer</h1>
          </div>
          <div className="w-full h-[calc(100vh-8rem)] border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://polygontelecoms.github.io/Drone-Network-visualizer.github.io/"
              className="w-full h-full"
              title="Network Visualizer"
              frameBorder="0"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetworkVisualizerPage;