import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

function ProjectCard({ project }) {
  const { title, description, tags, image, link } = project;
  
  return (
    <article className="glass-panel group overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute right-4 top-4 rounded-full border border-white/12 bg-slate-950/60 p-2 text-slate-100 backdrop-blur-sm">
          {link ? <ExternalLink size={16} /> : <ArrowUpRight size={16} />}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-slate-200">
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
          >
            View project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;