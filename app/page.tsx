import Image from 'next/image';
import { ArrowRight, Check, ChevronRight, Layers3, MousePointerClick, ShieldCheck, Sparkles, Timer } from 'lucide-react';

const trustLogos = ['Tourism', 'Retail', 'SaaS', 'Hospitality', 'Education'];

const metrics = [
  { value: '2.7x', label: 'Average conversion lift' },
  { value: '<1.9s', label: 'Typical mobile load time' },
  { value: '94+', label: 'Lighthouse performance' },
];

const techniques = [
  {
    title: 'Scannable hierarchy',
    description: 'Clear visual rhythm inspired by world-class product pages: one message, one action, one outcome.',
    icon: Layers3,
  },
  {
    title: 'Intent-driven interactions',
    description: 'Micro-interactions and hover feedback that guide users without distracting from the conversion path.',
    icon: MousePointerClick,
  },
  {
    title: 'Trust architecture',
    description: 'Proof blocks, concise process steps, and confident language to reduce friction before contact.',
    icon: ShieldCheck,
  },
];

const showcase = [
  {
    title: 'EcoTours booking experience',
    result: '+63% completed bookings',
    image: '/images/project-ecotours.jpg',
  },
  {
    title: 'Food marketplace checkout',
    result: '+41% checkout completion',
    image: '/images/project-foodie.jpg',
  },
  {
    title: 'Local business service hub',
    result: '3.1x higher lead quality',
    image: '/images/project-hub.jpg',
  },
];

const process = [
  ['01', 'Strategy sprint', 'Message, audience, and conversion mapping in one focused workshop.'],
  ['02', 'Bento-style design', 'Modern layouts inspired by top SaaS and portfolio websites.'],
  ['03', 'Build + optimize', 'Performance-first development with accessibility and SEO built in.'],
  ['04', 'Ship + iterate', 'Post-launch analytics and CRO tweaks to keep performance compounding.'],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.28),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_50%_110%,rgba(99,102,241,0.2),transparent_40%),linear-gradient(130deg,#020617,#0b1225_45%,#0f172a)]" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-8">
          <header className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
            <Image src="/logo-white.svg" alt="MugnaDigital logo" width={190} height={44} priority />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-300/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:scale-[1.02] hover:bg-sky-300/30"
            >
              Book strategy call <ArrowRight size={15} />
            </a>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                <Sparkles size={14} />
                Inspired by top-performing global UI patterns
              </p>
              <h1 className="mt-5 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Premium web experiences that feel iconic and convert like crazy.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                We applied proven UX principles used by world-class digital products: strong hierarchy, frictionless navigation,
                social proof, and conversion-focused storytelling.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#showcase"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                >
                  Explore outcomes
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#techniques"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  See UX techniques used
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><Check className="text-emerald-300" size={16} /> Fast & accessible</span>
                <span className="inline-flex items-center gap-2"><Check className="text-emerald-300" size={16} /> SEO-ready architecture</span>
                <span className="inline-flex items-center gap-2"><Check className="text-emerald-300" size={16} /> Conversion-first messaging</span>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">Performance snapshot</p>
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-slate-800/70 p-3 text-center">
                    <p className="text-xl font-black text-emerald-300">{metric.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                  <Timer size={16} />
                  Why this works
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  People decide in seconds. We designed this page for immediate clarity, trust, and decisive next actions.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Trusted design language across industries</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-200">
              {trustLogos.map((brand) => (
                <span key={brand} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-1.5">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="techniques" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-black">Top UI/UX techniques now embedded in your site</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Borrowing patterns seen in globally admired products (clear hero messaging, bento layouts, strong trust blocks, and crisp micro-feedback) while tailoring them to MugnaDigital.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {techniques.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <Icon className="mb-4 text-cyan-300" size={23} />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="showcase" className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-black">Results-driven visual showcase</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {showcase.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-300 hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-300">Case snapshot</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    {item.result} <ChevronRight size={14} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-black">How we execute premium UX</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([step, title, detail]) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs font-black tracking-[0.2em] text-emerald-300">{step}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">Next step</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Want this level of UX polish on your full brand presence?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Let&apos;s turn your website into a premium growth asset with world-class UX thinking adapted for your market.
        </p>
        <a
          href="mailto:hello@mugnadigital.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Start the conversation
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
