import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">About Fooodle</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing delicious food to your doorstep since 2020
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-card-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Fooodle was born from a simple idea: everyone deserves access to delicious, 
                high-quality food delivered right to their door. We started in a small kitchen 
                with a passion for creating memorable meals.
              </p>
              <p className="text-muted-foreground">
                Today, we serve thousands of happy customers daily, maintaining the same 
                commitment to quality and taste that we started with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-3xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with care and attention to detail
                </p>
              </div>

              <div className="bg-card rounded-3xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Hot, fresh food delivered in 30 minutes or less
                </p>
              </div>

              <div className="bg-card rounded-3xl p-6 text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">Quality First</h3>
                <p className="text-muted-foreground">
                  Only the finest ingredients make it to your plate
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
