import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question? We'd love to hear from you
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us what's on your mind..." 
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sun 9am-10pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@fooodle.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Location</h3>
                    <p className="text-muted-foreground">123 Food Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
