import { useState, useEffect } from 'react';
import { Disc3, ChevronDown } from 'lucide-react';
import { scrollToId } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ParticleField from './ParticleField.jsx';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <ParticleField />

      <div
        className={`reveal ${
          loaded ? 'reveal-visible' : ''
        } relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center`}
      >
        <div className="flex flex-col items-center mb-8">
          <div className="logo-ring mb-4">
            <Disc3 size={26} strokeWidth={1.25} className="accent-text" />
          </div>
          <span className="wordmark text-base md:text-lg" style={{ letterSpacing: '0.3em' }}>
            DYSTOPIC <span className="accent-text">SOUND</span>
          </span>
        </div>

        <h1 className="hero-heading font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          {t.brand.tagline}
        </h1>

        <p className="font-subheading italic text-lg md:text-xl text-stone max-w-2xl mb-10">
          {t.brand.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button onClick={() => scrollToId('projects')} className="btn-primary">
            {t.brand.ctaPrimary}
          </button>
          <button onClick={() => scrollToId('contact')} className="btn-secondary">
            {t.brand.ctaSecondary}
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToId('about')}
        className="absolute z-10 scroll-cue"
        style={{ bottom: '2.5rem', left: '50%' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={26} strokeWidth={1.25} className="accent-text" />
      </button>
    </section>
  );
}
