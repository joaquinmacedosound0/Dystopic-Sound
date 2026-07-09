import Reveal from './Reveal.jsx';
import { WHY_US_ICONS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 md:py-36 px-6 section-abyss">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">{t.whyUs.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">{t.whyUs.heading}</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {t.whyUs.items.map((item, i) => {
            const Icon = WHY_US_ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 120}>
                <div className="text-center md:text-left">
                  <div className="why-icon mb-6 mx-auto md:mx-0">
                    <Icon size={24} strokeWidth={1.25} />
                  </div>
                  <h3 className="font-heading text-xl mb-3">{item.title}</h3>
                  <p className="font-body text-stone leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
