import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative px-6 py-10 section-abyss border-t-hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="wordmark text-sm">
          DYSTOPIC <span className="accent-text">SOUND</span>
        </span>
        <p className="font-body text-xs text-stone-dim">
          © {new Date().getFullYear()} Dystopic Sound. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
