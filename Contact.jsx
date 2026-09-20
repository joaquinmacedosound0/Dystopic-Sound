import Reveal from './Reveal.jsx';
import { SOCIAL_LINKS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 section-void overflow-hidden">
      <div className="hero-blob hero-blob-3" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="eyebrow mb-5">{t.contact.eyebrow}</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
            {t.contact.heading}
          </h2>
          <p className="font-body text-stone text-base md:text-lg mb-14 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={social.label}
                >
                  <Icon size={20} strokeWidth={1.25} />
                  <span className="font-body text-xs mt-2">{social.label}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
