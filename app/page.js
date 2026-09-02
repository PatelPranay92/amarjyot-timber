'use client';

import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Processing from './components/Processing';
import Quality from './components/Quality';

import Applications from './components/Applications';


import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Processing />

        <Quality />


        <Applications />


        <Contact />
      </main>
      <Footer />
    </>
  );
}
