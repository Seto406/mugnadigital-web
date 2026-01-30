import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-void relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Build Something <br />
              <span className="text-brand-palay">Extraordinary</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Have a project in mind? Whether you need a simple website or a complex web application, we are ready to help you navigate the digital space.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a href="mailto:hello@mugnadigital.com" className="text-slate-400 hover:text-white transition-colors">
                    hello@mugnadigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a href="tel:+639123456789" className="text-slate-400 hover:text-white transition-colors">
                    +63 912 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-400">
                    Dumaguete City, Negros Oriental<br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-brand-void/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-brand-void/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all"
                    placeholder="juan@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full bg-brand-void/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="project">Project Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {/* Custom arrow could go here */}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-brand-void/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button variant="primary" className="w-full justify-center text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
