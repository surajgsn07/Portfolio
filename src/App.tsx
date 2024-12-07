import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeetCodeBadges from './components/LeetCode';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience/>
        <Skills />
        <Achievements />
        {/* <LeetCodeBadges/> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;