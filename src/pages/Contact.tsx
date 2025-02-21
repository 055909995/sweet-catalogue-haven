
import { translations } from "../utils/translations";

const Contact = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen pt-20">
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

export default Contact;
