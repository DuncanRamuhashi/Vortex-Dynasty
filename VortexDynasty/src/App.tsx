import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Crazy from './Components/Crazy';
import About from './Components/About';
import Footer from './Components/Footer';
import Press from './Components/Press';

function App() {
  return (
    <>
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Crazy Section */}
      <section id="crazy" >
        <Crazy />
      </section>

      {/* Press Section */}
      <section id="press">
        <Press />
      </section>
      {/* Press Section */}
      <section id="about">
        <About />
      </section>

      {/* Footer Section */}
      <section id="footer" >
        <Footer />
      </section>
    </>
  );
}

export default App;
