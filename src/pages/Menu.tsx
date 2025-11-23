import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import buns_pic from "@/assets/buns_pic.jpg";
import dosa_pic from "@/assets/dosa_pic.jpg";
import idli_pic from "@/assets/idli_pic.jpg";
import burger from "@/assets/burger.jpg";

const menuItems = [
  {
    id: 1,
    name: "Manglore Buns",
    description: "Freshly made manglore Buns with chutney",
    price: "Rs. 50",
    image: buns_pic,
    category: "South Indian",
  },
  {
    id: 2,
    name: "Mini Meals",
    description: "Meal containing Rice and Chapati/Puri",
    price: "Rs.120",
    image: dosa_pic,
    category: "South Indian",
  },
  {
    id: 3,
    name: "Idly Vada",
    description: "A plate of Idly Vada with Sambar and Chutney",
    price: "Rs.40",
    image: idli_pic,
    category: "Breakfast",
  },
  {
    id: 4,
    name: " Masala Dosa",
    description: "Masala Dosa with chutney and sambar",
    price: "Rs. 40",
    image: dosa_pic,
    category: "Breakfast",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Our Menu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our delicious selection of freshly prepared dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {item.price}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
