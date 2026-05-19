import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Steps from './components/Steps.jsx';
import Formats from './components/Formats.jsx';
import Gallery from './components/Gallery.jsx';
import Studio from './components/Studio.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import StatusStrip from './components/StatusStrip.jsx';
import Oferta from './pages/Oferta.jsx';
import Privacy from './pages/Privacy.jsx';

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
