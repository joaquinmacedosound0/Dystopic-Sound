import Reveal from './Reveal.jsx';
import { PROJECTS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="poster-card">
        <div className="poster-image">
          <img src={project.poster} alt={project.line1} loading="lazy" className="poster-img" />
        </div>
        <div className="pt-6 text-center">
          <p className="font-body text-stone text-sm leading-relaxed mb-2">{project.line1}</p>
          <p className="font-body text-stone-dim text-xs leading-relaxed">{project.line2}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function SelectedProjects() {
  const { t } = useLanguage();

  const projects = PROJECTS.map((data, i) => ({
    ...data,
    line1: t.projects.items[i].line1,
    line2: t.projects.items[i].line2,
  }));

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 section-void">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">{t.projects.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">{t.projects.heading}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-10 md:gap-14 justify-items-center">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
