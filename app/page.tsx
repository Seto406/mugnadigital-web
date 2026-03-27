import Image from 'next/image';
import { ArrowRight, CheckCircle2, Globe2, Layers3, Rocket, Sparkles, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Brand-first websites',
    description: 'Fast, responsive websites designed to convert and reflect your local identity.',
    icon: Globe2,
  },
  {
    title: 'Product design systems',
    description: 'Reusable UI systems that keep your team consistent and your product scalable.',
    icon: Layers3,
  },
  {
    title: 'Automation & launch support',
    description: 'From analytics to deployment pipelines, we streamline your digital operations.',
    icon: Workflow,
  },
];

const pillars = [
  'Built for speed and accessibility from day one',
  'Clear messaging crafted for your target audience',
  'SEO-ready architecture with clean semantic markup',
  'Conversion-focused layouts and calls-to-action',
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-slate-950 text-slate-100 outline-none">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.2),transparent_38%),linear-gradient(to_bottom,_#020617,_#0f172a)]" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
          <header className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="MugnaDigital logo" width={160} height={40} priority />
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-300/20"
            >
              Book a free strategy call <ArrowRight size={16} aria-hidden="true" />
            </a>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                <Sparkles size={14} aria-hidden="true" />
                Rebuilt with intention
              </p>
              <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                A sharper, faster MugnaDigital website designed to win premium clients.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg text-slate-300">
                We reimagined your web presence from the ground up with clearer storytelling, stronger visual hierarchy, and modern performance standards.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                >
                  See sample outcomes
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Explore capabilities
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-sky-500/10 backdrop-blur">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">What improved</p>
              <ul className="space-y-3">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="mt-0.5 text-emerald-300" size={18} aria-hidden="true" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  ['95+', 'Performance score'],
                  ['48h', 'Average page iteration'],
                  ['3x', 'Lead quality uplift'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-slate-800/70 p-3">
                    <p className="text-xl font-bold text-emerald-300">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <Rocket className="text-sky-300" aria-hidden="true" />
          <h2 className="text-3xl font-bold">Services engineered for growth</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-emerald-300/40">
              <Icon className="mb-4 text-emerald-300" size={24} aria-hidden="true" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-3 lg:px-8">
          {[
            ['Tourism Platform', 'Doubled bookings with clearer trip discovery + mobile-first UX.'],
            ['Retail Marketplace', 'Improved checkout completion by simplifying navigation and trust cues.'],
            ['Agency Rebrand', 'Turned an outdated website into a high-converting authority asset.'],
          ].map(([name, detail]) => (
            <article key={name} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm uppercase tracking-widest text-sky-300">Case study</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
              <p className="mt-4 text-slate-300">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready for a website that feels premium and performs like a machine?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Keep the brand you already built. Upgrade the execution. Let&apos;s map your next version in one focused call.
        </p>
        <a
          href="mailto:hello@mugnadigital.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Start the conversation
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
