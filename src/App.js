import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';

import "./App.css";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/UI/Hero';
import About from './components/UI/About';
import Services from './components/UI/Services';
import Testimonials from './components/UI/Testimonials';
import Contact from './components/UI/Contact';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
