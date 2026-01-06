import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Briefcase } from 'lucide-react';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;