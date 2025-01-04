'use client';
import "./globals.css";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';


const Page = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
      delay: 50,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="main-container">
      <Hero />
      < About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Page;


