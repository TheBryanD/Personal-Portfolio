import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  const stats = [
    { value: '3+', label: 'Years building software' },
    { value: '8', label: 'Projects highlighted below' },
    { value: 'CS', label: 'Computer science degree' },
  ];

  return (
    <section id="home" className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <div className="section-kicker mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Available for full-time opportunities
          </div>
          <h1 className="section-title max-w-4xl text-5xl text-slate-50 sm:text-6xl lg:text-7xl">
            Building thoughtful software with a sharp eye for <span className="accent-text">clarity and craft</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I&apos;m Bryan Davis, a software developer focused on polished front ends, reliable systems, and practical solutions that teams can ship and maintain.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-7 py-3.5 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              onClick={() => window.open('https://github.com/TheBryanD', '_blank', 'noopener,noreferrer')}
            >
              Explore my work
              <ArrowRight size={18} />
            </button>
            <a
              href={import.meta.env.BASE_URL + 'BryanDavisResume.pdf'}
              download
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-7 py-3.5 font-semibold text-slate-100 transition-colors hover:bg-white/10"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialLink href="https://github.com/TheBryanD" label="GitHub" icon={<Github size={18} />} />
            <SocialLink href="https://www.linkedin.com/in/bryan-davis-bb3b14264/" label="LinkedIn" icon={<Linkedin size={18} />} />
            <SocialLink href="mailto:123bryan1998@gmail.com" label="Email" icon={<Mail size={18} />} />
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-cyan-300/20 via-transparent to-amber-300/20" />
          <div className="relative space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Current focus</p>
                <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold text-white">Modern apps that feel clean, fast, and dependable</h2>
              </div>
              <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Open
              </div>
            </div>

            <p className="text-slate-300">
              Recent work spans automation, internal platforms, deployment tooling, and web experiences that reduce friction for both users and teams.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/6 p-4">
                  <div className="font-['Space_Grotesk'] text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <div className="mb-3 text-sm uppercase tracking-[0.22em] text-slate-500">Core stack</div>
              <div className="flex flex-wrap gap-2">
                {['C#', 'ASP.NET', 'React', 'JavaScript', 'Python', 'PostgreSQL'].map((item) => (
                  <span key={item} className="pill-chip text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default Hero;