import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, MapPin, Users, Trophy, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playHoverBlip, playTelemetryChime, playWarpSound } from '../utils/audio';

export default function Hero() {
  // Registration deadline: 26 Sep 2026, 10:08 PM IST
  const targetDate = new Date('2026-09-26T22:08:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d.toString().padStart(2, '0'),
          hours: h.toString().padStart(2, '0'),
          minutes: m.toString().padStart(2, '0'),
          seconds: s.toString().padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleLaunchRegister = (e) => {
    playWarpSound();
    
    // Trigger festive cosmic confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e02444', '#ff7849', '#ffd166', '#06b6d4', '#ffffff']
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Cinematic Red Atmosphere Vignette (Inspiration from reference image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] sm:w-[900px] sm:h-[700px] bg-gradient-to-r from-crimson-600/25 via-red-700/15 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* Floating Orbital Command Beacon & Astronaut Graphic */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 my-auto">
        
        {/* Left Column: Mission Brief & Title */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          
          {/* Mission Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-crimson-500/10 border border-crimson-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(224,36,68,0.2)]">
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping"></span>
            <span className="text-xs font-mono tracking-widest text-crimson-300 uppercase font-semibold">
              NATIONAL AEROSPACE INITIATIVE • MITS GWALIOR
            </span>
          </div>

          {/* Sanskrit Header Tagline */}
          <div className="font-sanskrit text-lg sm:text-xl text-amber-300/80 mb-2 tracking-wide">
            ॥ नभःस्पृशं दीप्तम् • नक्षत्रम् २०२६ ॥
          </div>

          {/* Epic Title */}
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-none mb-4">
            NAKSHATRA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-orange-400 to-amber-300 text-glow-crimson mt-2">
              2026
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
            The premier aerospace-focused hackathon organized by the <span className="text-white font-medium underline decoration-crimson-500/60 underline-offset-4">Aerospace Club, MITS Gwalior</span>. Solve high-stakes challenges across Space Exploration, Aeronautics, Avionics, and Astronomy.
          </p>

          {/* Live Countdown Timer to Registration Deadline */}
          <div className="mb-10 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase mb-2 px-1">
              <span className="flex items-center space-x-1.5 text-crimson-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>REGISTRATION CLOSES: 26 SEP 2026, 10:08 PM IST</span>
              </span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">LAUNCH WINDOW: ACTIVE</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 p-3 rounded-2xl bg-space-900/80 border border-space-700/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="text-center p-2 rounded-xl bg-space-950/70 border border-space-800">
                <div className="font-orbitron font-bold text-2xl sm:text-3xl text-white">{timeLeft.days}</div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">DAYS</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-space-950/70 border border-space-800">
                <div className="font-orbitron font-bold text-2xl sm:text-3xl text-crimson-400">{timeLeft.hours}</div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">HOURS</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-space-950/70 border border-space-800">
                <div className="font-orbitron font-bold text-2xl sm:text-3xl text-white">{timeLeft.minutes}</div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">MINS</div>
              </div>
              <div className="text-center p-2 rounded-xl bg-space-950/70 border border-space-800">
                <div className="font-orbitron font-bold text-2xl sm:text-3xl text-amber-400">{timeLeft.seconds}</div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">SECS</div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLaunchRegister}
              onMouseEnter={playHoverBlip}
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl p-px font-bold text-white shadow-[0_0_35px_rgba(224,36,68,0.4)] hover:shadow-[0_0_50px_rgba(224,36,68,0.8)] transition-all transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-crimson-500 via-orange-500 to-crimson-600 animate-shimmer"></div>
              <div className="relative px-8 py-4 rounded-xl bg-space-950/90 group-hover:bg-opacity-0 transition-all flex items-center justify-center space-x-3 text-base">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="tracking-wide">REGISTER VIA UNSTOP</span>
                <ArrowRight className="w-5 h-5 text-slate-200 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="#tracks"
              onMouseEnter={playHoverBlip}
              onClick={playTelemetryChime}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-300 hover:text-white bg-space-900/80 border border-space-700 hover:border-slate-500 backdrop-blur-md transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>EXPLORE TRACKS</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Spacewalk Astronaut Visual Experience */}
        <div className="w-full lg:w-2/5 flex justify-center items-center relative">
          <div className="relative w-[320px] h-[360px] sm:w-[420px] sm:h-[460px] flex items-center justify-center">
            
            {/* Holographic Concentric Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-crimson-500/20 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full border border-dashed border-cyan-400/25 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
            <div className="absolute inset-16 rounded-full border border-space-700/60"></div>

            {/* Glowing Singularity Beacon (Inspired by red elevator reference beacon) */}
            <div className="absolute top-10 right-14 w-6 h-6 rounded-full bg-crimson-500 shadow-[0_0_25px_#e02444] animate-ping opacity-80"></div>
            <div className="absolute top-10 right-14 w-6 h-6 rounded-full bg-white shadow-[0_0_20px_#ffffff] border-2 border-crimson-500"></div>

            {/* Astronaut & Spaceship SVG Illustration with Zero-G Floating Physics */}
            <div className="relative z-10 animate-float-slow filter drop-shadow-[0_20px_40px_rgba(224,36,68,0.35)]">
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-w-[340px]"
              >
                {/* Orbital Command Module Tether */}
                <path
                  d="M 60 40 Q 140 90 190 130"
                  stroke="#e02444"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="animate-pulse"
                />

                {/* Command Ship Docking Section */}
                <rect x="25" y="15" width="55" height="35" rx="8" fill="#0f172a" stroke="#e02444" strokeWidth="2" />
                <circle cx="52" cy="32" r="5" fill="#38bdf8" className="animate-pulse" />
                <path d="M 15 32 L 25 32" stroke="#e02444" strokeWidth="2" />

                {/* Astronaut Body */}
                {/* Jetpack Thruster Plume */}
                <path d="M 145 195 L 130 230 L 155 205 Z" fill="url(#thrusterGlow)" className="animate-pulse" />
                <path d="M 175 195 L 190 230 L 165 205 Z" fill="url(#thrusterGlow)" className="animate-pulse" />

                {/* Backpack / Life Support Unit */}
                <rect x="135" y="130" width="50" height="70" rx="10" fill="#1e293b" stroke="#e02444" strokeWidth="2" />
                
                {/* Suit Torso */}
                <rect x="140" y="135" width="40" height="60" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                {/* Aerospace Patch on Chest */}
                <circle cx="160" cy="155" r="5" fill="#e02444" />
                <line x1="148" y1="168" x2="172" y2="168" stroke="#0284c7" strokeWidth="2" />

                {/* Arms Reaching Forward (Zero-G Spacewalk) */}
                <path d="M 140 145 Q 110 160 105 185" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
                <path d="M 180 145 Q 210 160 215 185" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
                {/* Glove cuffs */}
                <circle cx="105" cy="185" r="7" fill="#e02444" />
                <circle cx="215" cy="185" r="7" fill="#e02444" />

                {/* Legs Floating */}
                <path d="M 148 195 Q 135 240 125 265" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
                <path d="M 172 195 Q 185 240 195 265" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" />
                {/* Magnetic Boots */}
                <rect x="115" y="260" width="18" height="10" rx="4" fill="#1e293b" stroke="#e02444" strokeWidth="1.5" />
                <rect x="188" y="260" width="18" height="10" rx="4" fill="#1e293b" stroke="#e02444" strokeWidth="1.5" />

                {/* Helmet Base */}
                <circle cx="160" cy="108" r="28" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                
                {/* Golden/Crimson Mirrored Visor */}
                <ellipse cx="160" cy="108" rx="20" ry="16" fill="url(#visorGradient)" stroke="#e02444" strokeWidth="2" />
                
                {/* Visor Starlight Reflection */}
                <path d="M 150 102 Q 165 96 172 105" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffd166" />
                    <stop offset="50%" stopColor="#e02444" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="thrusterGlow" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#e02444" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Orbiting Satellite / Telemetry Beacon Box */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-2 p-3 rounded-xl glass-card-crimson border border-crimson-500/40 text-xs font-mono backdrop-blur-xl animate-float-reverse shadow-lg">
              <div className="flex items-center space-x-2 text-crimson-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-crimson-400 animate-pulse"></span>
                <span className="font-bold">TELEMETRY LOCK</span>
              </div>
              <div className="text-slate-300">ALT: 240 KM (LEO)</div>
              <div className="text-slate-400">ORBIT: SAC MITS CAMPUS</div>
            </div>

            {/* Top 50 Teams Badge */}
            <div className="absolute -top-4 -right-2 sm:top-2 sm:right-2 p-3 rounded-xl glass-panel border border-cyan-500/30 text-xs font-mono backdrop-blur-xl animate-float-slow shadow-lg">
              <div className="text-cyan-400 font-bold flex items-center space-x-1">
                <Trophy className="w-3.5 h-3.5" />
                <span>TOP 50 SHORTLIST</span>
              </div>
              <div className="text-slate-300 mt-0.5">12-HR ON-CAMPUS BUILD</div>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Mission Metrics Footer Strip */}
      <div className="w-full max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 backdrop-blur-md flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-crimson-500/15 text-crimson-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase">PRIZE VAULT</div>
            <div className="font-orbitron font-bold text-lg text-white">₹10,000+ CASH</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 backdrop-blur-md flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-orange-500/15 text-orange-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase">FINAL ROUND</div>
            <div className="font-orbitron font-bold text-lg text-white">12-HR OFFLINE</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 backdrop-blur-md flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase">CREW SIZE</div>
            <div className="font-orbitron font-bold text-lg text-white">2 - 4 MEMBERS</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 backdrop-blur-md flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase">LOCATION</div>
            <div className="font-orbitron font-bold text-lg text-white">MITS GWALIOR</div>
          </div>
        </div>
      </div>

    </section>
  );
}
