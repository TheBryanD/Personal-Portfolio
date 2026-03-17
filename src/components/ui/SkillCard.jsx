import React from 'react';

function SkillCard({ category, items }) {
  return (
    <div className="glass-panel rounded-[1.75rem] p-6">
      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">{category}</h3>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {items.map((skill, i) => (
          <li key={i} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-200">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;