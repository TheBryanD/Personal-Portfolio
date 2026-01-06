import React from 'react';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ project }) {
  const { title, description, tags, image, link } = project;
  
  return (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            View Project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;