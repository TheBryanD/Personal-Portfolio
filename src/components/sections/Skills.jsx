import React from 'react';
import { Code2 } from 'lucide-react';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/skills';

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker mb-5">
            <Code2 size={16} />
            Skills
          </div>
          <h2 className="section-title text-slate-50">A toolkit built around shipping useful products.</h2>
          <p className="section-copy mt-5">
            I move comfortably between front-end implementation, back-end systems, and the tooling needed to support reliable delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skillGroup, idx) => (
            <SkillCard 
              key={idx}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;