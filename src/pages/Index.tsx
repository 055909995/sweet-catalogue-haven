
import { ChevronRight, Cookie, Candy, CakeSlice } from "lucide-react";

const ProductCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <div className="product-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="container mx-auto px-4 text-center animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Crafting Sweet Moments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our artisanal collection of premium confectionery, made with passion and the finest ingredients
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all">
            Explore Collection
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-primary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Premium Chocolates"
              description="Handcrafted chocolates made with the finest cocoa beans"
              icon={Cookie}
            />
            <ProductCard
              title="Artisanal Candies"
              description="Traditional recipes with a modern twist"
              icon={Candy}
            />
            <ProductCard
              title="Specialty Pastries"
              description="Delicate pastries that melt in your mouth"
              icon={CakeSlice}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-8">
              CONFI LLC has been crafting exceptional confectionery since 1925. Our dedication to quality and innovation has made us a trusted name in premium sweets and chocolates.
            </p>
            <div className="glass p-8 rounded-lg">
              <p className="text-lg font-medium text-foreground">
                "We believe that every sweet creation should be a moment of pure joy."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Want to learn more about our products or discuss a custom order?
          </p>
          <div className="inline-flex gap-4">
            <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
            <button className="bg-white text-accent px-6 py-3 rounded-full font-medium border border-accent hover:bg-accent hover:text-white transition-all">
              View Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
