import Reveal from './Reveal.jsx';
import { SERVICE_ICONS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function ServiceCard({ icon: Icon, service, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="service-card h-full">
        <div className="service-icon mb-6">
          <Icon size={28} strokeWidth={1.25} />
        </div>
        <h3 className="font-heading text-xl md:text-2xl mb-3">{service.title}</h3>
        <p className="font-body text-stone mb-6 leading-relaxed">{service.description}</p>
        <ul className="space-y-2">
          {service.items.map((item) => (
            <li key={item} className="font-body text-sm text-stone-dim flex items-center gap-2">
              <span className="dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 section-void">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">{t.services.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">{t.services.heading}</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, i) => (
            <ServiceCard key={service.title} icon={SERVICE_ICONS[i]} service={service} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
