import { Mail, Linkedin, Briefcase, ShoppingBag, Youtube, Music, Waves, SlidersHorizontal, BookOpen, Cog, Users } from 'lucide-react';

/* =============================================================================
   Structural / non-text data — icons, links, and video IDs that don't change
   between languages. All display copy lives in src/i18n/translations.js and
   is merged with this data by array index inside each component.
============================================================================= */

export const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:joaquinmacedosound@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaquin-macedo', icon: Linkedin },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~016bd23a05bf52c2a9?mp_source=share', icon: Briefcase },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/5rwyAq1', icon: ShoppingBag },
  { label: 'YouTube', href: 'https://www.youtube.com/@Joaquin-macedo', icon: Youtube },
];

export const SERVICE_ICONS = [Music, Waves, SlidersHorizontal];

export const SHOWREEL_ITEMS = [
  { videoId: '-GBFX-vLZF0' },
  { videoId: 'LF9T_M2rTg0' },
];

export const PROJECTS = [
  { videoId: '6JJrWB3jm8c' },
  { videoId: 'r2koubwVPsE' },
  { videoId: 'E0TEhztH3SI' },
  { videoId: '2oSYDUcXkDo' },
];

export const WHY_US_ICONS = [BookOpen, Cog, Users];

export const NAV_IDS = ['home', 'about', 'services', 'showreel', 'projects', 'contact'];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
