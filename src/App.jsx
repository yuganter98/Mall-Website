import { Suspense, lazy } from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';

// Lazy load below-fold sections
const WhyMOA = lazy(() => import('./sections/WhyMOA'));
const Retail = lazy(() => import('./sections/Retail'));
const Luxury = lazy(() => import('./sections/Luxury'));
const Dining = lazy(() => import('./sections/Dining'));
const Entertainment = lazy(() => import('./sections/Entertainment'));
const Events = lazy(() => import('./sections/Events'));
const Sponsorship = lazy(() => import('./sections/Sponsorship'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-32" style={{ background: '#0A0E1A' }}>
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-8 bg-[#C9A84C]/30 animate-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0A0E1A' }}>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <WhyMOA />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Retail />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Luxury />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Dining />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Entertainment />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Events />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Sponsorship />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
