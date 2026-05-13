import Header from './components/Header';
import Hero from './components/Hero';
import TourSection from './components/TourSection';
import MusicSection from './components/MusicSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <TourSection />
        <MusicSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

