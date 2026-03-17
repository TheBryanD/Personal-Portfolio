import React from 'react';

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="glass-panel flex flex-col items-start justify-between gap-3 rounded-[1.75rem] px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Bryan Davis. Built with React, Vite, and Tailwind CSS.</p>
          <p className="uppercase tracking-[0.22em] text-slate-500">Personal Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;