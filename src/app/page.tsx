import { Monitor } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-display text-4xl sm:text-6xl font-bold flex items-center gap-2">
          <span className="font-mono text-3xl">{`{M}`}</span> MugnaDigital
        </h1>
        <p className="text-lg sm:text-xl font-sans max-w-xl text-center sm:text-left">
          Professional but Senpai-like. We build systems, not just websites.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <Monitor size={20} />
            Get Started
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MugnaDigital
      </footer>
    </div>
  );
}
