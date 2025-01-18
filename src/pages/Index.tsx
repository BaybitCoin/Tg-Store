import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { MiniAppCard } from "@/components/MiniAppCard";
import { useState } from "react";

const Index = () => {
  const [selectedApp, setSelectedApp] = useState<null | {
    name: string;
    description: string;
    image: string;
    category: string;
    screenshots: string[];
    details: {
      developer: string;
      version: string;
      size: string;
      lastUpdate: string;
    };
  }>(null);

  const handleOpenApp = (app: any) => {
    setSelectedApp(app);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-16 pt-24">
        {selectedApp ? (
          <div className="container px-4 pt-6">
            <MiniAppCard {...selectedApp} />
          </div>
        ) : (
          <>
            <HeroSection />
            <FeaturedSection onOpenApp={handleOpenApp} />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
