export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-slate-100">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">404</p>
        <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you requested doesn&apos;t exist or has been moved.</p>
        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-emerald-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
