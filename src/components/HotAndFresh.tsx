import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const liveItems = [
  {
    id: 1,
    name: "Hot Masala Dosa",
    prepTime: "8 min",
    available: 10,
  },
  {
    id: 2,
    name: "Fresh Idli Sambar",
    prepTime: "5 min",
    available: 15,
  },
  {
    id: 3,
    name: "Medu Vada",
    prepTime: "10 min",
    available: 12,
  },
  {
    id: 4,
    name: "Uttapam",
    prepTime: "12 min",
    available: 8,
  },
  {
    id: 5,
    name: "Pongal",
    prepTime: "10 min",
    available: 6,
  },
];

const HotAndFresh = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Flame className="h-10 w-10 text-accent animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Hot & Fresh Now
          </h2>
          <Flame className="h-10 w-10 text-accent animate-float" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <p className="text-center text-lg mb-12 text-primary-foreground/90">
          Currently cooking and ready to be delivered to your doorstep
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {liveItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-primary-foreground text-foreground rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge variant="secondary" className="mb-3">
                <Flame className="h-3 w-3 mr-1" />
                Live
              </Badge>
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <div className="text-sm text-muted-foreground mb-3">
                Ready in: <span className="font-semibold text-accent">{item.prepTime}</span>
              </div>
              <div className="text-sm mb-4">
                Available: <span className="font-bold">{item.available} orders</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="torn-edge" />
    </section>
  );
};

export default HotAndFresh;
