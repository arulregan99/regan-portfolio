import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { InspiredQuotes } from './components/InspiredQuotes';
import { Footer } from './components/Footer';
import { ScrollAnimations } from './components/ScrollAnimations';

function App() {
  return (
    <div className="relative">
      <ScrollAnimations />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <InspiredQuotes />
        <Footer />
      </main>
    </div>
  );
}

export default App; 