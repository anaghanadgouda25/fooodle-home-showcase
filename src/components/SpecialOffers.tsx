import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Percent, Tag } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Happy Hour Special",
    description: "Get 30% off on all beverages between 3-5 PM",
    discount: "30% OFF",
    icon: Clock,
    color: "bg-secondary",
  },
  {
    id: 2,
    title: "Weekend Deal",
    description: "Buy 2 Main Courses, Get 1 Dessert Free",
    discount: "BOGO",
    icon: Percent,
    color: "bg-accent",
  },
  {
    id: 3,
    title: "First Order Bonus",
    description: "New customers get $5 off on orders above $20",
    discount: "$5 OFF",
    icon: Tag,
    color: "bg-primary",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't miss out on our amazing deals and discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                
                <div className={`${offer.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <Badge variant="secondary" className="mb-4">
                  {offer.discount}
                </Badge>

                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {offer.description}
                </p>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Claim Offer
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
