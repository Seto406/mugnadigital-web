export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-deep text-white p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold tracking-tighter text-white">
            Mugna<span className="text-brand-spark">Digital</span>
          </h1>
          <span className="mt-2 text-xs uppercase tracking-[0.3em] text-brand-spark/80">
            Pinoy Tech
          </span>
        </div>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10 w-full">
          <p className="text-xl italic font-serif text-slate-200">
            &quot;Mugna&quot;
          </p>
          <p className="text-sm text-slate-400 uppercase tracking-wide mt-1">
            (Visayan) • To create, construct, or invent
          </p>
        </div>

        <p className="text-lg text-slate-300">
          The Master Craftsman of the Visayas
        </p>

        <div className="flex flex-col gap-6 mt-4 w-full">
          <div className="p-6 border border-brand-spark/20 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 text-brand-spark">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-200">
              To bridge the gap between imagination and execution for local businesses through cutting-edge digital craftsmanship.
            </p>
          </div>

          <div className="p-6 border border-brand-growth/20 rounded-lg bg-slate-900/50 hover:bg-slate-900/80 transition-colors">
            <h2 className="text-2xl font-semibold mb-3 text-brand-growth">Our Vision</h2>
            <p className="text-lg leading-relaxed text-slate-200">
              To become the premier digital engine of Negros Oriental, empowering the next generation of tech kohais to build world-class solutions.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-slate-500 text-sm">
        © {new Date().getFullYear()} MugnaDigital. Proudly made in the Philippines.
      </footer>
    </div>
  );
}
