import React from 'react';
import { Target, CheckCircle2, Building2, GraduationCap, Compass, Layers, Globe, Shield } from 'lucide-react';
import { playHoverBlip } from '../utils/audio';

export default function AboutSection() {
  const eligibilityList = [
    'Undergraduate Students',
    'Postgraduate Scholars',
    'Engineering & Tech Disciplines',
    'Sciences & Applied Physics',
    'Management & Strategy',
    'Arts, Commerce & Design',
    'Law & Space Policy',
    'Medical & Bio-Astronautics'
  ];

  const guidelines = [
    'Open to all enrolled college and university students across India.',
    'Team Crew Size: Strictly 2 to 4 members per squadron.',
    'Inter-college teams are wholeheartedly encouraged.',
    'Inter-specialisation and inter-branch teams are allowed.',
    'Teams choose ONE problem statement from either Software or Hardware track.',
    'Top 50 shortlisted teams from Round 1 qualify for the 12-hour offline finale at MITS SAC Campus.'
  ];

  return (
    <section id="overview" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-crimson-400 mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>MISSION BRIEFING // 01</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          ABOUT THE HACKATHON
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-crimson-500 to-amber-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Mission Overview & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-space-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-crimson-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="font-orbitron font-bold text-2xl text-white mb-4 flex items-center space-x-3">
              <Target className="w-6 h-6 text-crimson-500" />
              <span>THE NAKSHATRA ODYSSEY</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-base mb-6">
              <strong className="text-white">NAKSHATRA 2026</strong> is the flagship aerospace-focused hackathon organized by the <span className="text-crimson-400 font-semibold">Aerospace Club, Madhav Institute of Technology & Science (MITS), Gwalior</span>. 
            </p>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Our vision is to bring together the brightest minds across India to solve critical frontiers in space science, satellite communications, autonomous avionics, deep-space exploration, and orbital propulsion. Through two dedicated tracks — <strong className="text-slate-200">Software & Hardware</strong> — participants will engineer working prototypes that redefine the boundaries of modern aeronautics.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-space-800 text-sm">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">National Horizon</span>
                  <span className="text-slate-400 text-xs">Welcoming innovators from institutes across the nation.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Layers className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Dual Domain Tracks</span>
                  <span className="text-slate-400 text-xs">Tailored problem statements for Software & Hardware engineers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Participation Guidelines Card */}
          <div className="glass-card p-8 rounded-3xl border border-space-700">
            <h4 className="font-orbitron font-bold text-xl text-white mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>CREW & PARTICIPATION GUIDELINES</span>
            </h4>
            <div className="space-y-3">
              {guidelines.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-crimson-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Venue & Broad Eligibility Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Venue Card */}
          <div className="glass-card-crimson p-8 rounded-3xl border border-crimson-500/30 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono tracking-widest text-crimson-400 uppercase font-semibold">
                MISSION GROUND // VENUE
              </span>
              <Building2 className="w-6 h-6 text-crimson-400" />
            </div>

            <h3 className="font-orbitron font-bold text-2xl text-white mb-1">
              MITS GWALIOR
            </h3>
            <p className="text-crimson-300 font-medium text-sm mb-3">
              Madhav Institute of Technology & Science
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Offline Grand Finale & 12-Hour Hackathon will be held on-campus at the renowned <span className="text-white font-semibold underline decoration-crimson-500/50">Student Activity Center (SAC)</span>, MITS Campus, Gwalior, Madhya Pradesh, India.
            </p>

            <div className="p-3.5 rounded-xl bg-space-950/70 border border-space-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>COORDINATES:</span>
              <span className="text-slate-200">26.2307° N, 78.2045° E</span>
            </div>
          </div>

          {/* Broad Eligibility Grid */}
          <div className="glass-card p-8 rounded-3xl border border-space-700 flex-1">
            <h4 className="font-orbitron font-bold text-xl text-white mb-2 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>OPEN ELIGIBILITY SPECTRUM</span>
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              Nakshatra is inclusive. We invite all passion-driven problem solvers regardless of discipline:
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {eligibilityList.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={playHoverBlip}
                  className="p-3 rounded-xl bg-space-900/80 border border-space-800 hover:border-crimson-500/40 hover:bg-space-850 transition-all text-xs text-slate-200 font-medium flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
