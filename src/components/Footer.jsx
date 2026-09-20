import React from 'react';
import { Rocket, Mail, MapPin, Compass, ArrowUp, ArrowUpRight, Heart, Shield } from 'lucide-react';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    playTelemetryChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-950 border-t border-space-800 text-slate-400 pt-16 pb-12 z-10 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-crimson-600/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-footer Cosmic Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-space-900 via-crimson-950/30 to-space-900 border border-crimson-500/40 relative overflow-hidden shadow-[0_0_40px_rgba(224,36,68,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-crimson-400 font-semibold uppercase tracking-widest block mb-2">
              FINAL LAUNCH COUNTDOWN
            </span>
            <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mb-2">
              READY TO TOUCH THE STRATOSPHERE?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Registration is open exclusively on Unstop. Assemble your squadron of 2-4 innovators and secure your place in Nakshatra 2026.
            </p>
          </div>

          <a
            href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverBlip}
            onClick={playTelemetryChime}
            className="whitespace-nowrap px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-crimson-600 to-orange-500 hover:from-crimson-500 hover:to-orange-400 text-white shadow-[0_0_25px_rgba(224,36,68,0.5)] transition-all flex items-center space-x-2 text-base"
          >
            <span>REGISTER ON UNSTOP</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-space-800">
          
          {/* Col 1: Brand & Sanskrit Motto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-crimson-500/20 border border-crimson-500/40 flex items-center justify-center text-crimson-400">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="font-orbitron font-extrabold text-2xl tracking-wider text-white">
                NAKSHATRA<span className="text-crimson-500">.</span>
              </div>
            </div>

            <p className="font-sanskrit text-amber-300 text-sm">
              ॥ नभःस्पृशं दीप्तम् — Touch the Sky with Glory ॥
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Organized with pride by the <strong className="text-slate-200">Aerospace Club</strong> at <strong className="text-slate-200">Madhav Institute of Technology and Science (MITS)</strong>, Gwalior. Empowering the next generation of aerospace engineers, roboticists, and astrophysicists.
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider mb-4">
              TELEMETRY LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">Mission Briefing</a></li>
              <li><a href="#tracks" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">Software & Hardware Tracks</a></li>
              <li><a href="#timeline" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">Day 1 & Day 2 Chronology</a></li>
              <li><a href="#rewards" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">₹10K Prize Vault</a></li>
              <li><a href="#rules" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">Flight Protocols & Rules</a></li>
              <li><a href="#faq" onMouseEnter={playHoverBlip} className="hover:text-crimson-400 transition-colors">Query Resolution FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Distress Comms & Organizers */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider mb-4">
              MISSION GROUND COMMS
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-crimson-400 flex-shrink-0 mt-0.5" />
                <span>
                  SAC, MITS Gwalior Campus,<br />
                  Madhya Pradesh 474005, India
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:shreyagoyal401@gmail.com"
                  className="text-slate-300 hover:text-crimson-400 transition-colors"
                >
                  shreyagoyal401@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-500 block">LEAD ORGANIZER</span>
                <span className="text-slate-200 font-semibold">Shreya Goyal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Aerospace Club, MITS Gwalior. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverBlip}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-space-900 border border-space-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
          >
            <span>RETURN TO ORBIT (TOP)</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
