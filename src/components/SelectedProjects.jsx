import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { PROJECTS } from '../data.js';

function ProjectCard({ project, delay, onPlay }) {
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
            Watch Video
          </span>
        </div>
      </button>
    </Reveal>
  );
}

function VideoModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-frame" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          <X size={20} />
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
          title={project.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function SelectedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 section-void">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Selected Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">Featured Work</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} onPlay={setActiveProject} />
          ))}
        </div>
      </div>

      <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
