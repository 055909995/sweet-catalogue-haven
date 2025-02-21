
import { useState } from "react";
import { ChevronRight, Cookie, Candy, CakeSlice } from "lucide-react";
import { translations } from "../utils/translations";
import LanguageSwitcher from "../components/LanguageSwitcher";

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
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen">
      <LanguageSwitcher 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      
      {/* Logo */}
      <div className="fixed top-4 left-4 z-50">
        <img 
          src="/lovable-uploads/7786c223-bca3-453f-b487-f4b0e433368e.png" 
          alt="CONFI Logo" 
          className="h-12 w-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="container mx-auto px-4 text-center animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.heroDescription}
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all">
            {t.exploreCollection}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-primary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourCategories}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title={t.premiumChocolates}
              description={t.premiumChocolatesDesc}
              icon={Cookie}
            />
            <ProductCard
              title={t.artisanalCandies}
              description={t.artisanalCandiesDesc}
              icon={Candy}
            />
            <ProductCard
              title={t.specialtyPastries}
              description={t.specialtyPastriesDesc}
              icon={CakeSlice}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ourStory}</h2>
            <p className="text-muted-foreground mb-8">
              {t.storyDescription}
            </p>
            <div className="glass p-8 rounded-lg">
              <p className="text-lg font-medium text-foreground">
                {t.storyQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.getInTouch}</h2>
          <p className="text-muted-foreground mb-8">
            {t.contactDescription}
          </p>
          <div className="inline-flex gap-4">
            <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              {t.contactUs}
            </button>
            <button className="bg-white text-accent px-6 py-3 rounded-full font-medium border border-accent hover:bg-accent hover:text-white transition-all">
              {t.viewCatalog}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
