export default function Footer() {
  return (
    <footer className="relative px-6 py-10 section-abyss border-t-hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="wordmark text-sm">
          DYSTOPIC <span className="accent-text">SOUND</span>
        </span>
        <p className="font-body text-xs text-stone-dim">
          © {new Date().getFullYear()} Dystopic Sound. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
