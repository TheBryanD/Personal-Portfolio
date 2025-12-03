import React from 'react';

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bryan Davis. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;