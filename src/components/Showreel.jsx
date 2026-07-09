import { useState } from 'react';
import { Play } from 'lucide-react';
import Reveal from './Reveal.jsx';
import VideoModal from './VideoModal.jsx';
import { SHOWREEL_ITEMS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function ShowreelCard({ item, delay, onPlay, watchLabel }) {
  return (
    <Reveal delay={delay}>
      <button onClick={() => onPlay(item)} className="project-card block w-full text-left">
        <div className="project-image">
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
            alt={item.title}
            loading="lazy"
            className="project-thumb-img"
          />
          <span className="play-button">
            <Play size={22} strokeWidth={1.5} className="ml-1" />
          </span>
        </div>
        <div className="pt-6">
          <h3 className="font-heading text-xl mb-2">{item.title}</h3>
          <span className="inline-flex items-center gap-2 font-body text-sm accent-text">
            <Play size={14} strokeWidth={1.5} />
            {watchLabel}
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export default function Showreel() {
  const [activeItem, setActiveItem] = useState(null);
  const { t } = useLanguage();

  const items = SHOWREEL_ITEMS.map((data, i) => ({ ...data, title: t.showreel.items[i].title }));

  return (
    <section id="showreel" className="relative py-28 md:py-36 px-6 section-abyss">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">{t.showreel.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">{t.showreel.heading}</h2>
          <p className="font-body text-stone max-w-2xl mx-auto">{t.showreel.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {items.map((item, i) => (
            <ShowreelCard
              key={item.videoId}
              item={item}
              delay={i * 100}
              onPlay={setActiveItem}
              watchLabel={t.showreel.watchVideo}
            />
          ))}
        </div>
      </div>

      <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
