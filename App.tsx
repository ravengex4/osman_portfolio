
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GithubSection from './components/GithubSection';
import LeetCodeCounter from './components/LeetCodeCounter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import profileImage from './assets/osman.jpg';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'skills', 'achievements', 'github'];
    
    const observerOptions = {
      root: null,
      // Increased detection area to prevent state flickering
      rootMargin: '-20% 0px -20% 0px', 
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 overflow-hidden">
      <Navbar 
        activeSection={activeSection} 
        onContactClick={() => setIsContactOpen(true)} 
      />
      
      {/* 
          Main scroll container. 
          Using snap-proximity instead of mandatory for a more natural feel on desktop,
          and ensuring every child is a snap point to prevent 'glitchy' jumps.
      */}
      <main className="h-[100dvh] overflow-y-auto snap-y snap-proximity scroll-smooth">
        <section id="hero" className="snap-start min-h-[100dvh] flex flex-col items-center justify-center">
          <Hero onContactClick={() => setIsContactOpen(true)} profileImage={profileImage} />
        </section>

        <section id="skills" className="snap-start min-h-[100dvh] bg-zinc-900/30 flex flex-col items-center justify-center">
          <Skills />
        </section>

        <section id="achievements" className="snap-start min-h-[100dvh] flex flex-col items-center justify-center">
          <Achievements />
        </section>

        {/* 
            Merged LeetCode and Github into one cohesive snapped section 
            to prevent the scroll engine from glitching on small intermediate divs.
        */}
        <section id="github" className="snap-start min-h-[100dvh] bg-zinc-900/30 flex flex-col items-center justify-center overflow-y-auto py-20">
          <div className="w-full">
            <div className="mb-12">
               <LeetCodeCounter />
            </div>
            <GithubSection />
          </div>
        </section>

        <section className="snap-start">
          <Footer />
        </section>
      </main>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Background Decor - Optimization: Reduced blur radius to improve rendering performance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-indigo-500/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[80px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
