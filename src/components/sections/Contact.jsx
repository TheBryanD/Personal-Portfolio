import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { send } from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await send(serviceId, templateId, templateParams, publicKey);

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Email error', err);
      setStatus({
        type: 'error',
        message: 'Message failed to send. Please try again or email me directly at 123bryan1998@gmail.com.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker mb-5">
            <Mail size={16} />
            Contact
          </div>
          <h2 className="section-title text-slate-50">Let&apos;s build something useful.</h2>
          <p className="section-copy mt-5">
            If you have a role, project, or idea worth discussing, send a note. I&apos;m most interested in work that values ownership, thoughtful engineering, and execution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 w-fit">
              Available now
            </div>
            <h3 className="mt-5 font-['Space_Grotesk'] text-3xl font-bold text-white">Get in touch</h3>
            <p className="mt-4 text-slate-300 leading-8">
              Have a project in mind or want to discuss opportunities? 
              Feel free to reach out!
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                <Mail size={18} className="text-cyan-300" />
                <span>123bryan1998@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                <MapPin size={18} className="text-amber-300" />
                <span>Tennessee, United States</span>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Best fit</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Full-time software engineering roles, internal tools, workflow automation, and product-focused web development or Desktop applications.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-7 sm:p-8 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-white/8"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-white/8"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-white/8"
                placeholder="Tell me a bit about the role or project."
                required
              />
            </div>

            {status.message && (
              <div
                className={`rounded-2xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
                    : 'border border-rose-300/30 bg-rose-300/10 text-rose-100'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;