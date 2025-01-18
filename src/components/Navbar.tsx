import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        setIsNavbarExpanded(true);
      } else if (prevScrollPos > currentScrollPos) {
        setIsNavbarExpanded(true);
      } else {
        setIsNavbarExpanded(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        isNavbarExpanded ? "h-24" : "h-16"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-between py-2.5">
        <div
          className={`relative transition-all duration-300 overflow-hidden ${
            isNavbarExpanded ? "opacity-100 h-auto pb-2.5" : "opacity-0 h-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="w-full pl-9 bg-muted/50 border-none"
            />
          </div>
        </div>
        <div
          className={`flex gap-4 overflow-x-auto scrollbar-hide items-end`}
        >
          <Button
            variant="ghost"
            className="flex items-center gap-2 shrink-0 min-w-[80px] justify-center"
          >
            <span className="text-rose-500">🎮</span>
            Games
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 shrink-0 min-w-[80px] justify-center"
          >
            <span className="text-blue-500">⚙️</span>
            Utilities
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 shrink-0 min-w-[80px] justify-center"
          >
            <span className="text-purple-500">🌐</span>
            Web3
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 shrink-0 min-w-[80px] justify-center"
          >
            <span className="text-green-500">💰</span>
            Finance
          </Button>
        </div>
      </div>
    </nav>
  );
}
