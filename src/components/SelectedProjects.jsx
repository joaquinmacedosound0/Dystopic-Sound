import { useState } from 'react';
import { Play } from 'lucide-react';
import Reveal from './Reveal.jsx';
import VideoModal from './VideoModal.jsx';
import { PROJECTS } from '../data.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function ProjectCard({ project, delay, onPlay, watchLabel }) {
  return (
    <Reveal delay={delay}>
      <button onClick={() => onPlay(project)} className="project-card block w-full text-left">
        <div className="project-image">
          <img
            src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
            alt={project.title}
            loading="lazy"
            className="project-thumb-img"
          />
          <span className="play-button">
            <Play size={22} strokeWidth={1.5} className="ml-1" />
          </span>
        </div>
        <div className="pt-6">
          <h3 className="font-heading text-xl mb-2">{project.title}</h3>
          <p className="font-body text-stone text-sm leading-relaxed mb-4">{project.description}</p>
          <span className="inline-flex items-center gap-2 font-body text-sm accent-text">
            <Play size={14} strokeWidth={1.5} />
            {watchLabel}
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export default function SelectedProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const { t } = useLanguage();

  const projects = PROJECTS.map((data, i) => ({
    ...data,
    title: t.projects.items[i].title,
    description: t.projects.items[i].description,
  }));

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 section-void">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">{t.projects.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">{t.projects.heading}</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.videoId}
              project={project}
              delay={i * 100}
              onPlay={setActiveProject}
              watchLabel={t.projects.watchVideo}
            />
          ))}
        </div>
      </div>

      <VideoModal item={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
