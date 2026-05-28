import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { Modules } from './components/Modules';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Hero />
      <LogoBar />
      <Modules />
      <Workflow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
