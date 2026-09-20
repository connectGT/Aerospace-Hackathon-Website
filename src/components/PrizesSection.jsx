import React from 'react';
import { Trophy, Award, Gift, Sparkles, Star, CheckCircle, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function PrizesSection() {
  const triggerConfetti = () => {
    playTelemetryChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ffd700', '#e02444', '#ffffff', '#38bdf8']
    });
  };

  return (
    <section id="rewards" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-amber-400 mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>RECOGNITION & GLORY // 04</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          REWARDS & PRIZE VAULT
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto">
          Honor, cash bounties, national recognition, and coveted aerospace club trophies await the triumphant teams.
        </p>
      </div>

      {/* Main Prize Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
        
        {/* Tier 2: Finalists */}
        <div
          onMouseEnter={playHoverBlip}
          className="glass-card rounded-3xl p-8 border border-space-700 hover:border-slate-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              TOP 50 SHORTLIST
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
              FINALIST SQUADRONS
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Teams selected from Round 1 will gain on-campus access to MITS SAC for the 12-hour offline showdown.
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Official Finalist Certificate of Merit</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Exclusive Hackathon Swag & Goodies</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Free Entry to Astronomy Telescope Workshop</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Meals, High-Tea & Workspace Provided</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-space-800 text-xs font-mono text-cyan-300">
            50 TEAMS ADVANCE
          </div>
        </div>

        {/* Tier 1: Grand Champions (Centerpiece) */}
        <div
          onClick={triggerConfetti}
          onMouseEnter={playHoverBlip}
          className="glass-card-crimson rounded-3xl p-8 sm:p-10 border-2 border-crimson-500/80 shadow-[0_0_40px_rgba(224,36,68,0.3)] hover:shadow-[0_0_60px_rgba(224,36,68,0.6)] transition-all transform hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between cursor-pointer group"
        >
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-crimson-600 to-amber-500 text-[10px] font-mono font-bold tracking-widest text-white rounded-bl-2xl uppercase">
            CHAMPIONS OF NAKSHATRA
          </div>

          <div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/30 to-crimson-600/30 border border-amber-400/50 text-amber-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-9 h-9" />
            </div>

            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              GRAND CASH POOL
            </div>
            <h3 className="font-orbitron font-black text-3xl sm:text-4xl text-white mb-2">
              ₹10,000 CASH
            </h3>
            <p className="text-amber-200/90 text-sm mb-6 leading-relaxed">
              Awarded to the most innovative, mathematically sound, and functional aerospace prototypes.
            </p>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Grand Champion Trophy & Medals</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>₹10,000 Cash Prize Pool Distribution</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Featured Cover Story in Aerospace Magazine</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Winner Certificate of Excellence</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-crimson-500/30 flex items-center justify-between text-xs font-mono text-amber-300">
            <span>CLICK TO CELEBRATE</span>
            <Sparkles className="w-4 h-4 animate-spin" />
          </div>
        </div>

        {/* Tier 3: Goodies & Participation */}
        <div
          onMouseEnter={playHoverBlip}
          className="glass-card rounded-3xl p-8 border border-space-700 hover:border-slate-500 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              SWAG & KITS
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
              GOODIES & PERKS
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Every participating mind receives recognition for their intellectual contribution to aerospace engineering.
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Verified Digital Participation Certificate</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Aerospace Club Official Sticker Pack & Badges</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Access to Aerospace Technical Resource Vault</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Future Internship / Recruitment Consideration</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-space-800 text-xs font-mono text-amber-300">
            ALL VERIFIED PARTICIPANTS
          </div>
        </div>

      </div>

    </section>
  );
}
