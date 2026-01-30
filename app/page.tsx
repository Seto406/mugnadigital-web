import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { CallToAction } from './components/sections/CallToAction';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-void selection:bg-brand-palay selection:text-brand-void">
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
