import { Mail, Linkedin, Briefcase, ShoppingBag, Youtube, Music, Waves, SlidersHorizontal, BookOpen, Cog, Users } from 'lucide-react';

/* =============================================================================
   All site copy and links live here. Edit freely — components just read
   from these exports, so changes here update the whole site.
============================================================================= */

export const BRAND = {
  name: 'Dystopic Sound',
  tagline: 'Cinematic Music. Sound Design. Audio That Tells Stories.',
  subtitle:
    'A cinematic audio production studio crafting original music and immersive sound for film, games, trailers, and television.',
};

export const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:hello@dystopicsound.com', icon: Mail },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Upwork', href: '#', icon: Briefcase },
  { label: 'Fiverr', href: '#', icon: ShoppingBag },
  { label: 'YouTube', href: '#', icon: Youtube },
];

export const SERVICES = [
  {
    icon: Music,
    title: 'Original Music',
    description: 'Custom-composed music built around the emotional architecture of your story.',
    items: ['Films', 'Trailers', 'Games', 'Commercials', 'Documentaries'],
  },
  {
    icon: Waves,
    title: 'Sound Design',
    description: 'Immersive soundscapes and effects that bring every frame and scene to life.',
    items: ['Foley', 'Ambiences', 'Cinematic Sound Effects', 'Audio Editing', 'Creative Sound Design'],
  },
  {
    icon: SlidersHorizontal,
    title: 'Dolby Atmos & Mixing',
    description: 'Delivery-ready mixes finished to broadcast and cinema-grade technical standards.',
    items: ['Stereo', '5.1', 'Dolby Atmos', 'Mastering', 'Delivery-Ready Mixes'],
  },
];

export const PROJECTS = [
  {
    title: 'Sound Design of: Memories of the meadow FINAL scene',
    description: 'Original score and immersive sound design for a feature-length nature documentary.',
    href: '#',
  },
  {
    title: 'Football Hard Techno Project',
    description: 'High-energy hard techno production built for sports branding and promo content.',
    href: '#',
  },
  {
    title: 'Short Film Sound Design',
    description: 'Complete sound design and final mix for an award-submitted short film.',
    href: '#',
  },
  {
    title: 'Game Audio Demo',
    description: 'Adaptive music and interactive sound design built for an indie game demo.',
    href: '#',
  },
];

export const WHY_US = [
  {
    icon: BookOpen,
    title: 'Story-Driven Composition',
    description: 'Music designed to support narrative and emotion — never decoration for its own sake.',
  },
  {
    icon: Cog,
    title: 'Industry Standard Workflow',
    description:
      'Professional production using modern cinematic tools and deliverables your team already works with.',
  },
  {
    icon: Users,
    title: 'Built for Directors & Producers',
    description: 'A collaborative approach focused on fast turnarounds and production-ready audio, every time.',
  },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
