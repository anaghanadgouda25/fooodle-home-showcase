import { Flame, Pizza, Coffee, IceCream, Salad, Dessert } from "lucide-react";

const categories = [
  {
    icon: Flame,
    name: "Hot & Fresh",
    description: "Straight from the kitchen",
  },
  {
    icon: Pizza,
    name: "Fast Food",
    description: "Quick and delicious",
  },
  {
    icon: Coffee,
    name: "Beverages",
    description: "Refreshing drinks",
  },
  {
    icon: IceCream,
    name: "Desserts",
    description: "Sweet treats",
  },
  {
    icon: Salad,
    name: "Healthy",
    description: "Nutritious options",
  },
  {
    icon: Dessert,
    name: "Snacks",
    description: "Perfect bites",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-card rounded-2xl p-6 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
