# Dystopic Sound — Website

A cinematic audio production studio website built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production-ready site is output to `dist/` — upload that folder to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Project structure

```
src/
  data.js              ← all copy, links, and service/project content
  index.css            ← Tailwind + brand design system (colors, fonts, animations)
  App.jsx              ← composes the page sections
  components/
    Navbar.jsx
    Hero.jsx
    WhoWeAre.jsx
    Services.jsx
    SelectedProjects.jsx
    WhyChooseUs.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx          ← scroll fade-in wrapper
    ParticleField.jsx    ← animated hero background
    PlaceholderBlock.jsx ← swap for real <img>/<video> once you have assets
  hooks/
    useInView.js
```

## Customizing

- **Copy & links**: edit `src/data.js` — brand tagline, services, projects, social links.
- **Colors**: brand palette is defined twice, kept in sync intentionally —
  as CSS variables in `src/index.css` (`--c-void`, `--c-abyss`, `--c-forest`, `--c-accent`)
  and as Tailwind colors in `tailwind.config.js` (`void`, `abyss`, `forest`, `accent`).
  Change both if you re-theme.
- **Images/video**: every `<PlaceholderBlock>` marks a spot meant for a real photo,
  poster, or video still — replace with an `<img>` or `<video>` tag.
- **Fonts**: loaded via Google Fonts `<link>` tags in `index.html`
  (Cinzel, Cormorant Garamond, Inter).
