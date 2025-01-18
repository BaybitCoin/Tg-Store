import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="pt-32 pb-8">
      <div className="container px-4">
        <h2 className="text-xl font-semibold mb-4">Recently Opened</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 mb-8">
          {recentApps.map((app) => (
            <div key={app.name} className="text-center">
              <img
                src={app.icon}
                alt={app.name}
                className="w-16 h-16 rounded-2xl mx-auto mb-2"
              />
              <p className="text-sm truncate">{app.name}</p>
            </div>
          ))}
        </div>

        <Card className="bg-purple-600 text-white p-6 mb-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-2">Complete day 1 of your streak</h3>
          <p className="text-purple-200 mb-4">Days left to Bronze League</p>
          <div className="flex justify-between items-center">
            <p className="text-purple-200">Complete your daily task</p>
            <p>0/1</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

const recentApps = [
  {
    name: "BIRD",
    icon: "https://placehold.co/64x64/4F46E5/ffffff?text=B",
  },
  {
    name: "Catap",
    icon: "https://placehold.co/64x64/F59E0B/ffffff?text=C",
  },
  {
    name: "Scroo-G",
    icon: "https://placehold.co/64x64/10B981/ffffff?text=S",
  },
  {
    name: "Yescoin",
    icon: "https://placehold.co/64x64/6366F1/ffffff?text=Y",
  },
];
