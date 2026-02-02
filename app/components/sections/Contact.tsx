import React from 'react';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let&apos;s Build Something <br />
              <span className="text-brand-palay">Extraordinary</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Have a project in mind? Whether you need a simple website or a complex web application, we are ready to help you navigate the digital space.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                  <Mail className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Email Us</h4>
                  <a href="mailto:hello@mugnadigital.com" className="text-slate-600 dark:text-slate-400 hover:text-foreground transition-colors">
                    hello@mugnadigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                  <Phone className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Call Us</h4>
                  <a href="tel:+639123456789" className="text-slate-600 dark:text-slate-400 hover:text-foreground transition-colors">
                    +63 912 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                  <MapPin className="w-6 h-6 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Dumaguete City, Negros Oriental<br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/50 dark:bg-brand-void/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/50 dark:bg-brand-void/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all"
                    placeholder="juan@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    required
                    className="w-full bg-white/50 dark:bg-brand-void/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="project">Project Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-white/50 dark:bg-brand-void/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-brand-palay focus:ring-1 focus:ring-brand-palay transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
