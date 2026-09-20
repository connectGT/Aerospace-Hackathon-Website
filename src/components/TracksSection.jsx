import React, { useState } from 'react';
import { Cpu, Code2, Rocket, Satellite, Radio, Compass, Eye, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function TracksSection() {
  const [activeTab, setActiveTab] = useState('all');

  const tracks = [
    {
      id: 'software',
      type: 'Software Track',
      title: 'AEROSPACE COMPUTING & FLIGHT SOFTWARE',
      badge: 'CODE & SIMULATION',
      icon: Code2,
      color: 'crimson',
      tagline: 'Algorithms, Telemetry, Orbital Mechanics & Space Intelligence',
      description: 'Harness high-performance software, simulation, and predictive AI models to navigate the complexities of flight systems and astronomical data.',
      domains: [
        { title: 'Orbital Mechanics & Trajectory Simulators', icon: Compass },
        { title: 'Satellite Telemetry & Ground Station Decoders', icon: Satellite },
        { title: 'Deep Space Image Processing & Planetary Mapping', icon: Eye },
        { title: 'Autonomous Drone Swarm Coordination & Mesh Comms', icon: Radio },
        { title: 'Space Debris Detection & Collision Avoidance Logic', icon: ShieldCheck }
      ],
      deliverable: 'Functional software prototype, algorithms, architecture diagram & live demo repository.'
    },
    {
      id: 'hardware',
      type: 'Hardware Track',
      title: 'AVIONICS, PAYLOADS & SPACE ROBOTICS',
      badge: 'CIRCUITS & MECHANICS',
      icon: Cpu,
      color: 'orange',
      tagline: 'CubeSats, UAVs, Thrust Vectoring & Microcontroller Avionics',
      description: 'Design, fabricate, and test physical hardware architectures engineered to endure extreme thermodynamic and gravitational conditions.',
      domains: [
        { title: 'CubeSat & CanSat Modular Subsystem Avionics', icon: Rocket },
        { title: 'Thrust Vector Control (TVC) & Actuator Mechanisms', icon: Layers },
        { title: 'Autonomous Rover Suspension & Planetary Samplers', icon: Compass },
        { title: 'Long-Range LoRa / RF Aerospace Telemetry Transceivers', icon: Radio },
        { title: 'Autonomous Flight Controller Boards & Power Distribution', icon: Cpu }
      ],
      deliverable: 'Physical hardware prototype, circuit schematics, CAD models & working bench demonstration.'
    }
  ];

  const filteredTracks = activeTab === 'all' ? tracks : tracks.filter(t => t.id === activeTab);

  return (
    <section id="tracks" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-crimson-400 mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>ARENA OF INNOVATION // 02</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          COMPETITION TRACKS
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto mb-8">
          Teams choose exactly ONE problem statement from either the Software or Hardware track to formulate their Round 1 presentation and offline prototype.
        </p>

        {/* Track Filter Tabs */}
        <div className="inline-flex p-1.5 rounded-2xl bg-space-900/90 border border-space-800 backdrop-blur-xl">
          <button
            onClick={() => { playTelemetryChime(); setActiveTab('all'); }}
            onMouseEnter={playHoverBlip}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(224,36,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Tracks (2)
          </button>
          <button
            onClick={() => { playTelemetryChime(); setActiveTab('software'); }}
            onMouseEnter={playHoverBlip}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'software'
                ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(224,36,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Software Track
          </button>
          <button
            onClick={() => { playTelemetryChime(); setActiveTab('hardware'); }}
            onMouseEnter={playHoverBlip}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'hardware'
                ? 'bg-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Hardware Track
          </button>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {filteredTracks.map((track) => {
          const Icon = track.icon;
          return (
            <div
              key={track.id}
              className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden group ${
                track.id === 'software'
                  ? 'glass-card-crimson hover:border-crimson-400'
                  : 'glass-card hover:border-orange-500/50'
              }`}
            >
              {/* Background watermark icon */}
              <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Icon className="w-64 h-64 text-white" />
              </div>

              {/* Track Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    track.id === 'software'
                      ? 'bg-crimson-500/20 text-crimson-400 border border-crimson-500/40'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">TRACK SPECIFICATION</span>
                    <h3 className="font-orbitron font-bold text-xl text-white">{track.type}</h3>
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${
                  track.id === 'software'
                    ? 'border-crimson-500/40 bg-crimson-500/10 text-crimson-300'
                    : 'border-orange-500/40 bg-orange-500/10 text-orange-300'
                }`}>
                  {track.badge}
                </span>
              </div>

              <div className="text-sm font-semibold text-amber-300 mb-3 tracking-wide">
                {track.tagline}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {track.description}
              </p>

              {/* Sample Problem Focus Domains */}
              <div className="mb-6">
                <div className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-3">
                  CORE SPECIALIZATION DOMAINS
                </div>
                <div className="space-y-2.5">
                  {track.domains.map((dom, i) => {
                    const DomIcon = dom.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center space-x-3 p-2.5 rounded-xl bg-space-950/60 border border-space-800 text-xs text-slate-200 hover:border-slate-700 transition-colors"
                      >
                        <DomIcon className="w-4 h-4 text-crimson-400 flex-shrink-0" />
                        <span>{dom.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expected Deliverables */}
              <div className="pt-4 border-t border-space-800 text-xs text-slate-400">
                <strong className="text-slate-200">Expected Deliverable:</strong> {track.deliverable}
              </div>
            </div>
          );
        })}
      </div>

      {/* Release Notice Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-crimson-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-2xl bg-crimson-500/20 text-crimson-400 flex-shrink-0">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="font-orbitron font-bold text-lg text-white mb-1">
              PROBLEM STATEMENTS LAUNCHING SOON
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Detailed aerospace problem statements for both Software and Hardware tracks will be released directly on the Unstop portal. Once released, registered teams can choose ONE statement and prepare their Round 1 PPT covering problem understanding, proposed innovation, system architecture, and tech stack.
            </p>
          </div>
        </div>

        <a
          href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverBlip}
          onClick={playTelemetryChime}
          className="whitespace-nowrap px-6 py-3 rounded-xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white transition-all shadow-[0_0_20px_rgba(224,36,68,0.4)] flex items-center space-x-2 text-sm"
        >
          <span>VIEW ON UNSTOP</span>
          <Rocket className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
}
