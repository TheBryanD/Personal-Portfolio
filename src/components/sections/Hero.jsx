import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 mx-auto flex items-center justify-center text-6xl font-bold">
            JS
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Bryan Davis
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Software Developer & Creative Problem Solver
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <SocialLink href="#" icon={<Github size={24} />} />
          <SocialLink href="#" icon={<Linkedin size={24} />} />
          <SocialLink href="#" icon={<Mail size={24} />} />
        </div>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          View My Work
        </button>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a href={href} className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full transition-colors">
      {icon}
    </a>
  );
}

export default Hero;