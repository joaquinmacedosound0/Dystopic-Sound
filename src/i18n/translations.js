/* =============================================================================
   All translatable site copy lives here, split into `en` and `es`.
   Structural data that doesn't change with language (icons, video IDs,
   hrefs) stays in data.js and is merged with these translations by index
   inside each component.
============================================================================= */

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      showreel: 'Showreel',
      projects: 'Projects',
      contact: 'Contact',
    },
    brand: {
      tagline: ['Cinematic Music', 'Sound Design', 'Audio That Tells Stories'],
      subtitle:
        'A cinematic audio production studio crafting original music and immersive sound for film, games, trailers, and television.',
      ctaPrimary: 'View Our Work',
      ctaSecondary: 'Work With Us',
    },
    whoWeAre: {
      eyebrow: 'Who We Are',
      heading: 'A Studio Built On Story',
      paragraph:
        "Dystopic Sound is a cinematic audio production studio based in Argentina, Buenos Aires, specializing in original music, immersive sound design, and professional mixing for film, games, trailers, advertising, and visual media. We partner with directors, studios, and brands to craft audio that doesn't just accompany the picture, it completes it.",
    },
    services: {
      eyebrow: 'What We Do',
      heading: 'Our Services',
      items: [
        {
          title: 'Original Music',
          description: 'Custom-composed music built around the emotional architecture of your story.',
          items: ['Films', 'Trailers', 'Games', 'Commercials', 'Documentaries'],
        },
        {
          title: 'Sound Design',
          description: 'Immersive soundscapes and effects that bring every frame and scene to life.',
          items: ['Foley', 'Ambiences', 'Cinematic Sound Effects', 'Audio Editing', 'Creative Sound Design'],
        },
        {
          title: 'Dolby Atmos & Mixing',
          description: 'Delivery-ready mixes finished to broadcast and cinema-grade technical standards.',
          items: ['Stereo', '5.1', 'Dolby Atmos', 'Mastering', 'Delivery-Ready Mixes'],
        },
      ],
    },
    showreel: {
      eyebrow: 'Showreel',
      heading: 'See & Hear The Work',
      subtitle:
        'A closer look at the sound of Dystopic Sound — from cinematic reimaginings to original electronic productions.',
      watchVideo: 'Watch Video',
      items: [
        { title: 'Love & Death (HBO) – Opening Theme Reimagined' },
        { title: 'Dark Techno Rave in a Thunderstorm 🌧️⚡ | 15 MIN Ambient House Journey' },
      ],
    },
    projects: {
      eyebrow: 'Selected Projects',
      heading: 'Featured Work',
      items: [
        {
          line1: 'Al Nabbash — Short Film directed by Omar Al Omeeri',
          line2: 'Full sound design, mixing and mastered by Dystopic Sound.',
        },
        {
          line1: 'No Easy Way Out — Film directed by M. Legend Brown',
          line2: 'Full sound design, mixing and mastered by Dystopic Sound.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's Create Something Unforgettable.",
      subtitle: "Have a project in mind? Let's talk about the sound of your next story.",
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      showreel: 'Showreel',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    brand: {
      tagline: ['Música Cinematográfica', 'Diseño de Sonido', 'Audio Que Cuenta Historias'],
      subtitle:
        'Un estudio de producción de audio cinematográfico que crea música original y sonido inmersivo para cine, videojuegos, trailers y televisión.',
      ctaPrimary: 'Ver Nuestro Trabajo',
      ctaSecondary: 'Trabajá Con Nosotros',
    },
    whoWeAre: {
      eyebrow: 'Quiénes Somos',
      heading: 'Un Estudio Construido Sobre Historias',
      paragraph:
        'Dystopic Sound es un estudio de producción de audio cinematográfico con base en Buenos Aires, Argentina, especializado en música original, diseño de sonido inmersivo y mezcla profesional para cine, videojuegos, trailers, publicidad y medios audiovisuales. Trabajamos junto a directores, estudios y marcas para crear audio que no solo acompaña la imagen, sino que la completa.',
    },
    services: {
      eyebrow: 'Qué Hacemos',
      heading: 'Nuestros Servicios',
      items: [
        {
          title: 'Música Original',
          description: 'Música compuesta a medida, construida alrededor de la arquitectura emocional de tu historia.',
          items: ['Películas', 'Trailers', 'Videojuegos', 'Comerciales', 'Documentales'],
        },
        {
          title: 'Diseño de Sonido',
          description: 'Paisajes sonoros y efectos inmersivos que le dan vida a cada escena y cada plano.',
          items: ['Foley', 'Ambientes', 'Efectos de Sonido Cinematográficos', 'Edición de Audio', 'Diseño de Sonido Creativo'],
        },
        {
          title: 'Dolby Atmos y Mezcla',
          description: 'Mezclas listas para entrega, finalizadas con estándares técnicos de nivel broadcast y cine.',
          items: ['Estéreo', '5.1', 'Dolby Atmos', 'Masterización', 'Mezclas Listas para Entrega'],
        },
      ],
    },
    showreel: {
      eyebrow: 'Showreel',
      heading: 'Mirá y Escuchá el Trabajo',
      subtitle:
        'Un vistazo más cercano al sonido de Dystopic Sound — desde reinterpretaciones cinematográficas hasta producciones electrónicas originales.',
      watchVideo: 'Ver Video',
      items: [
        { title: 'Love & Death (HBO) – Opening Theme Reimagined' },
        { title: 'Dark Techno Rave in a Thunderstorm 🌧️⚡ | 15 MIN Ambient House Journey' },
      ],
    },
    projects: {
      eyebrow: 'Proyectos Seleccionados',
      heading: 'Trabajos Destacados',
      items: [
        {
          line1: 'Al Nabbash — Cortometraje dirigido por Omar Al Omeeri',
          line2: 'Diseño de sonido completo, mezcla y masterización por Dystopic Sound.',
        },
        {
          line1: 'No Easy Way Out — Película dirigida por M. Legend Brown',
          line2: 'Diseño de sonido completo, mezcla y masterización por Dystopic Sound.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Creemos Algo Inolvidable.',
      subtitle: '¿Tenés un proyecto en mente? Hablemos sobre el sonido de tu próxima historia.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
};
