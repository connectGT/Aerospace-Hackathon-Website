import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Radio, Compass, ShieldCheck, ExternalLink } from 'lucide-react';
import { toggleAudioEngine, getAudioState, playHoverBlip } from '../utils/audio';

export default function TelemetryHUD() {
  const [audioActive, setAudioActive] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const state = toggleAudioEngine();
    setAudioActive(state);
  };

  return (
    <div className="w-full bg-space-950/90 border-b border-space-800 text-[11px] font-mono tracking-wider text-slate-400 py-1.5 px-4 hidden sm:flex items-center justify-between z-50 relative backdrop-blur-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1.5 text-crimson-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500"></span>
          </span>
          <span className="font-semibold text-slate-200">MISSION: NAKSHATRA-26</span>
        </div>
        <span className="text-space-600">|</span>
        <div className="flex items-center space-x-1 text-slate-300">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>MITS GWALIOR (26.2307° N, 78.2045° E)</span>
        </div>
        <span className="text-space-600 hidden md:inline">|</span>
        <div className="hidden md:flex items-center space-x-1 text-slate-400">
          <Radio className="w-3.5 h-3.5 text-emerald-400" />
          <span>SYS STATUS: FLIGHT READY</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-slate-300 hidden lg:inline">SYS TIME: {currentTime}</span>
        <span className="text-space-600 hidden lg:inline">|</span>
        
        {/* Audio Engine Button */}
        <button
          onClick={handleAudioToggle}
          onMouseEnter={playHoverBlip}
          className={`flex items-center space-x-2 px-2.5 py-0.5 rounded border transition-all ${
            audioActive
              ? 'border-crimson-500/50 bg-crimson-500/10 text-crimson-300 shadow-[0_0_10px_rgba(224,36,68,0.3)]'
              : 'border-space-700 bg-space-900/60 text-slate-400 hover:border-slate-500 hover:text-slate-200'
          }`}
          title="Toggle Procedural Sci-Fi Audio Synthesizer"
        >
          {audioActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-crimson-400 animate-pulse" />
              <span className="font-bold text-slate-200">SFX / AUDIO: ON</span>
              <div className="flex items-center space-x-0.5 h-2.5">
                <span className="w-0.5 h-2 bg-crimson-400 animate-pulse"></span>
                <span className="w-0.5 h-3 bg-crimson-400 animate-pulse delay-75"></span>
                <span className="w-0.5 h-1.5 bg-crimson-400 animate-pulse delay-150"></span>
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span>SFX / AUDIO: MUTED</span>
            </>
          )}
        </button>

        <a
          href="https://unstop.com/p/nakshatra-the-aerospace-hackathon-2026-madhav-institute-of-technology-and-science-mits-gwalior-1751540"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={playHoverBlip}
          className="flex items-center space-x-1 text-slate-300 hover:text-crimson-400 transition-colors"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-medium">UNSTOP PORTAL</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
