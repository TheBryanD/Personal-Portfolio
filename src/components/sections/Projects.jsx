import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Briefcase } from 'lucide-react';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5">
              <Briefcase size={16} />
              Projects
            </div>
            <h2 className="section-title text-slate-50">Personal projects across automation, internal platforms, and product development.</h2>
          </div>
          {/* <p className="section-copy">
            These projects reflect the kind of work I enjoy most: practical systems, better workflows, and interfaces that make complex work easier to handle.
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;