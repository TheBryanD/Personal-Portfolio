import React from 'react';
import { User } from 'lucide-react';
import ProfileImage from '../../assets/profile.jpg';

function About() {
  const highlights = [
    'Built internal tools, automation workflows, and deployment systems across solo and team settings.',
    'Grounded in computer science fundamentals with a practical bias toward maintainable solutions.',
    'Interested in roles where product quality, ownership, and continuous learning all matter.',
  ];

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker mb-5">
            <User size={16} />
            About
          </div>
          <h2 className="section-title text-slate-50">A developer shaped by systems thinking and hands-on problem solving.</h2>
          <p className="section-copy mt-5">
            My background spans custom business tooling, internal platforms, automation, and delivery-focused engineering work. I care about software that solves the actual problem cleanly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/4.6] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/18 via-transparent to-amber-300/18" />
              <img
                src={ProfileImage}
                alt="Bryan Davis"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-px bg-white/8 sm:grid-cols-3">
              <div className="bg-slate-950/50 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Experience</div>
                <div className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-white">3+ years</div>
              </div>
              <div className="bg-slate-950/50 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Location</div>
                <div className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-white">Tennessee</div>
              </div>
              <div className="bg-slate-950/50 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Degree</div>
                <div className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-white">CS</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
              <p className="text-lg leading-8 text-slate-300">
              Hi! I'm a software developer with 3+ years of experience building applications. 
              I went to Tennessee Tech University where I earned my degree in Computer Science.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
              My journey in tech started when I built my first computer at 15. 
              Since then, I've worked with different teams to create scalable and efficient programs. I started my work as a solo developer 
              creating an application to automate laser machine orders. After this I went on to work at Aristocrat Gaming, a slot machine company, 
              where I contributed to various projects including an inventory management system that I also solo developed. I worked along side team members
              to create a tool that deployed our servers, and I worked on a large project for creating specialized files for our gaming machines.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
              I'm passionate about learning new technologies and improving my skills. 
              In my free time, I enjoy a wide variety of hobbies including drumming, guitar, hiking, rock climbing, photography, Dungeons and Dragons, weight lifting, and more. 
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={import.meta.env.BASE_URL + 'BryanDavisResume.pdf'}
                  download
                  className="rounded-full bg-slate-50 px-6 py-3 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Download Resume
                </a>
                <a
                  href="mailto:123bryan1998@gmail.com"
                  className="rounded-full border border-white/12 bg-white/6 px-6 py-3 font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Email Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="glass-panel rounded-[1.5rem] p-5 text-sm leading-7 text-slate-300">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;