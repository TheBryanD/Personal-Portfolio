import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
  <div className="w-full flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <Navbar activeSection={activeSection} onSectionChange={scrollToSection} />
    <main className="flex-1 pt-16">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);
}

export default App;
