import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_IDS, scrollToId } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function LanguageSwitch({ className = '' }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Language selector">
      <button
        onClick={() => setLang('en')}
        className={`lang-pill ${lang === 'en' ? 'lang-pill-active' : ''}`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`lang-pill ${lang === 'es' ? 'lang-pill-active' : ''}`}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(id) {
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <button onClick={() => handleNavClick('home')} className="wordmark text-sm md:text-base">
          DYSTOPIC <span className="accent-text">SOUND</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {NAV_IDS.map((id) => (
            <button key={id} onClick={() => handleNavClick(id)} className="nav-link font-body text-sm">
              {t.nav[id]}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSwitch />
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mobile-menu px-6 pb-8 flex flex-col gap-6">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="nav-link font-body text-left text-lg"
            >
              {t.nav[id]}
            </button>
          ))}
          <LanguageSwitch className="mt-2" />
        </div>
      )}
    </nav>
  );
}
