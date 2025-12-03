import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-300">
              Have a project in mind or want to discuss opportunities? 
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} />
                <span>johndoe@example.com</span>
              </div>
              {/* Add more contact details as needed */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;