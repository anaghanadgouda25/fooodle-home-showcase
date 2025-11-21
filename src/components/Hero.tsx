import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroFood})` }}
      />
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[600px] text-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Delicious Food,
            <br />
            <span className="text-secondary">Order Fast</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fresh, hot meals prepared with love and delivered straight to your door. 
            Experience the taste of quality food in every bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              Browse Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8"
            >
              View Offers
            </Button>
          </div>
        </div>
      </div>
      
      <div className="torn-edge" />
    </section>
  );
};

export default Hero;
