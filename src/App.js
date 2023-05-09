import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Support from './components/Support.js';
import Feature from './components/Feature.js';
import Feedback from './components/Feedback.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Support />
      <Feature />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
