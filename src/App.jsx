import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Steps from './components/Steps.jsx';
import Formats from './components/Formats.jsx';
import Gallery from './components/Gallery.jsx';
import Studio from './components/Studio.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import StatusStrip from './components/StatusStrip.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Formats />
        <Gallery />
        <Studio />
        <Pricing />
        <FAQ />
      </main>
      <StatusStrip />
    </>
  );
}
