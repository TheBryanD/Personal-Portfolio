import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ activeSection, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onSectionChange(item)}
                className={`capitalize transition-colors ${
                  activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSectionChange(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 capitalize hover:bg-purple-500/20 rounded"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

<section className="py-20">
  <div className="w-full bg-transparent px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* your content that stays centered */}
    </div>
  </div>
</section>