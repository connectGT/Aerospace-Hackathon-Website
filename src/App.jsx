import React, { useEffect } from 'react';
import CosmicBackground from './components/CosmicBackground';
import TelemetryHUD from './components/TelemetryHUD';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import RulesSection from './components/RulesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-crimson-600 selection:text-white bg-space-950">
      {/* 3D WebGL Three.js Starfield and Accretion Disk */}
      <CosmicBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TelemetryHUD />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <TracksSection />
          <TimelineSection />
          <PrizesSection />
          <RulesSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
