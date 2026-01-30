import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { FeatureGrid } from './components/sections/FeatureGrid';
import { Testimonials } from './components/sections/Testimonials';
import { CallToAction } from './components/sections/CallToAction';
import { Footer } from './components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-void selection:bg-brand-palay selection:text-brand-void">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
