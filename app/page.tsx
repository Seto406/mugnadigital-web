import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { CallToAction } from './components/sections/CallToAction';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import ParticlesBackground from './components/ui/ParticlesBackground';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)] selection:bg-[var(--brand-palay)] selection:text-[var(--brand-void-static)] transition-colors duration-300">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
