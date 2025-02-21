
import { translations } from "../utils/translations";

const About = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen pt-20">
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
    </div>
  );
};

export default About;
