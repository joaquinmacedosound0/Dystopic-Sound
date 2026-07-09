import Reveal from './Reveal.jsx';

export default function WhoWeAre() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 section-abyss">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center">
          <p className="eyebrow mb-4">Who We Are</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">A Studio Built On Story</h2>
          <p className="font-body text-stone text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Dystopic Sound is a cinematic audio production studio based in Argentina, Buenos Aires,
            specializing in original music, immersive sound design, and professional mixing for film,
            games, trailers, advertising, and visual media. We partner with directors, studios, and
            brands to craft audio that doesn't just accompany the picture, it completes it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
