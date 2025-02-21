
import { translations } from "../utils/translations";
import { Cookie, Candy, CakeSlice } from "lucide-react";

const ProductCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <div className="product-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Products = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = translations[currentLanguage];
  
  return (
    <div className="min-h-screen pt-20">
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
    </div>
  );
};

export default Products;
