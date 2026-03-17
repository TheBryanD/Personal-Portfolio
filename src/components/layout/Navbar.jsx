import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ activeSection, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <button
            onClick={() => onSectionChange('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 font-['Space_Grotesk'] text-sm font-bold tracking-[0.24em] text-slate-50">
              BD
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-[0.28em] text-slate-100">Bryan Davis</div>
              <div className="text-xs text-slate-400">Software developer</div>
            </div>
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onSectionChange(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all ${
                  activeSection === item
                    ? 'bg-white text-slate-950 shadow-[0_8px_30px_rgba(248,250,252,0.18)]'
                    : 'text-slate-300 hover:bg-white/6 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => onSectionChange('contact')}
              className="rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
            </button>
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="glass-panel mt-3 rounded-3xl p-4 md:hidden">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSectionChange(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-base font-medium capitalize transition-colors ${
                  activeSection === item ? 'bg-white text-slate-950' : 'text-slate-200 hover:bg-white/6'
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => {
                onSectionChange('contact');
                setIsMenuOpen(false);
              }}
              className="mt-3 w-full rounded-2xl bg-amber-300 px-4 py-3 text-left font-semibold text-slate-950"
            >
              Let&apos;s talk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;