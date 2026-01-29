export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-deep text-white p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tighter">
          Mugna<span className="text-brand-spark">Digital</span>
        </h1>

        <p className="text-xl text-slate-300">
          The Master Craftsman
        </p>

        <div className="flex flex-col gap-6 mt-8">
          <div className="p-6 border border-slate-700 rounded-lg bg-slate-800/50">
            <h2 className="text-2xl font-semibold mb-3 text-brand-spark">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To bridge the gap between imagination and execution for local businesses through cutting-edge digital craftsmanship.
            </p>
          </div>

          <div className="p-6 border border-slate-700 rounded-lg bg-slate-800/50">
            <h2 className="text-2xl font-semibold mb-3 text-brand-growth">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To become the premier digital engine of Negros Oriental, empowering the next generation of tech kohais to build world-class solutions.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-slate-500 text-sm">
        © {new Date().getFullYear()} MugnaDigital. Crafted in Negros Oriental.
      </footer>
    </div>
  );
}
