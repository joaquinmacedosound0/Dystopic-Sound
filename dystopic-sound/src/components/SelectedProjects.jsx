import { Play, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import PlaceholderBlock from './PlaceholderBlock.jsx';
import { PROJECTS } from '../data.js';

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <a href={project.href} className="project-card block">
        <div className="project-image">
          <PlaceholderBlock icon={Play} iconSize={24} />
        </div>
        <div className="pt-6">
          <h3 className="font-heading text-xl mb-2">{project.title}</h3>
          <p className="font-body text-stone text-sm leading-relaxed mb-4">{project.description}</p>
          <span className="inline-flex items-center gap-2 font-body text-sm accent-text">
            View Project <ArrowUpRight size={16} className="link-arrow" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function SelectedProjects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 section-void">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Selected Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">Featured Work</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
