import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <div className="bg-[#0b1020] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
