import React from 'react';
import { Code2 } from 'lucide-react';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/skills';

function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="w-full mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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