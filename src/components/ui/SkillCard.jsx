import React from 'react';

function SkillCard({ category, items }) {
  return (
    <div className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20">
      <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
      <ul className="space-y-2">
        {items.map((skill, i) => (
          <li key={i} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;