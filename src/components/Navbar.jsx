import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-950/85 backdrop-blur-xl border-b border-space-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Title */}
          <a
            href="#"
            onMouseEnter={playHoverBlip}
            className="flex items-center space-x-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-crimson-600/30 to-space-900 border border-crimson-500/40 flex items-center justify-center group-hover:border-crimson-400 transition-all group-hover:scale-105 shadow-[0_0_15px_rgba(224,36,68,0.2)]">
              <Rocket className="w-6 h-6 text-crimson-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-orbitron font-extrabold text-xl sm:text-2xl tracking-wider text-white">
                  NAKSHATRA<span className="text-crimson-500">.</span>
                </span>
                <span className="font-sanskrit text-xs px-2 py-0.5 rounded bg-crimson-500/15 border border-crimson-500/30 text-crimson-300 hidden sm:inline-block">
                  नक्षत्र
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                AEROSPACE CLUB • MITS GWALIOR
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={playHoverBlip}
                onClick={playTelemetryChime}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-space-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Unstop Registration CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverBlip}
              onClick={playTelemetryChime}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-bold group shadow-[0_0_20px_rgba(224,36,68,0.3)] hover:shadow-[0_0_30px_rgba(224,36,68,0.6)] transition-shadow"
            >
              <span className="w-full h-full bg-gradient-to-r from-crimson-500 via-orange-500 to-crimson-600 group-hover:from-crimson-400 group-hover:to-orange-400 absolute"></span>
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-space-950 rounded-full group-hover:bg-opacity-0 flex items-center space-x-2 text-sm text-white">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>REGISTER ON UNSTOP</span>
                <ArrowUpRight className="w-4 h-4 text-slate-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-space-850 border border-space-700 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-950/95 border-b border-space-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                playTelemetryChime();
                setMobileMenuOpen(false);
              }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-space-850 hover:text-crimson-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl font-bold bg-gradient-to-r from-crimson-600 to-orange-500 text-white shadow-lg"
            >
              <span>REGISTER ON UNSTOP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
