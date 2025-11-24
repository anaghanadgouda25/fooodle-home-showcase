import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dosa_pic from "@/assets/dosa_pic.jpg";
import buns_pic from "@/assets/buns_pic.jpg";
import idli_pic from "@/assets/idli_pic.jpg";
import burger from "@/assets/burger.jpg";

const dishes = [
  {
    id: 1,
    name: "Manglore Buns",
    description: "Freshly Made",
    price: "Rs.50",
    image: buns_pic,
    badge: "Popular",
    badgeVariant: "default" as const,
  },
  {
    id: 2,
    name: "Masala Dosa",
    description: "Crispy and Soft",
    price: "Rs.40",
    image: dosa_pic,
    badge: "Chef's Special",
    badgeVariant: "secondary" as const,
  },
  {
    id: 3,
    name: "Loaded French Fries",
    description: "Crispy fries with special seasoning and dipping sauce",
    price: "Rs.90",
    image: fries,
    badge: "Hot Deal",
    badgeVariant: "destructive" as const,
  },
  {
    id: 4,
    name: "Aloo Tikki Burger",
    description: "Premium beef patty with fresh vegetables and signature sauce",
    price: "Rs.50",
    image: burger,
    badge: "Best Seller",
    badgeVariant: "default" as const,
  },
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved dishes, prepared fresh daily with premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge
                  variant={dish.badgeVariant}
                  className="absolute top-4 right-4"
                >
                  {dish.badge}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {dish.price}
                  </span>
                  <Button className="bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
