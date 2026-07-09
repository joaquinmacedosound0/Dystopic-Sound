import Reveal from './Reveal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 section-abyss">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center">
          <p className="eyebrow mb-4">{t.whoWeAre.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">{t.whoWeAre.heading}</h2>
          <p className="font-body text-stone text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            {t.whoWeAre.paragraph}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
