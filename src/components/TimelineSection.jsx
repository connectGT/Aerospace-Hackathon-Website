import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, CheckCircle, ChevronRight, Award, Telescope, Users, ShieldAlert } from 'lucide-react';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function TimelineSection() {
  const [activeView, setActiveView] = useState('day1'); // 'stages', 'day1', 'day2'

  // Master Stages from Unstop
  const masterStages = [
    {
      step: '01',
      title: 'Registration Closes',
      date: '26 Sep 2026',
      time: '10:08 PM IST',
      status: 'CRITICAL DEADLINE',
      description: 'Registration window officially closes on Unstop. All team members must be registered before the countdown ends.',
      highlight: true
    },
    {
      step: '02',
      title: 'Round 1: PPT Submission',
      date: '20 Sep – 30 Sep 2026',
      time: 'Ends 12:59 PM IST',
      status: 'ONLINE ROUND',
      description: 'Teams download their chosen problem statement (Software or Hardware) and upload their solution PPT outlining architecture, benefits, innovation, and tech stack.',
      highlight: false
    },
    {
      step: '03',
      title: 'Shortlisting (~50 Teams)',
      date: 'Early October 2026',
      time: 'Result Declaration',
      status: 'EVALUATION',
      description: 'Expert aerospace jury evaluates all PPT submissions and selects the top 50 finalist teams to advance to the offline round.',
      highlight: false
    },
    {
      step: '04',
      title: 'Round 2: Final 12-Hour Hackathon',
      date: '24 Oct – 25 Oct 2026',
      time: '07:00 AM – Next Day',
      status: 'OFFLINE @ MITS GWALIOR',
      description: 'Top 50 teams assemble on-campus at MITS SAC Gwalior for an intense 12-hour offline sprint, prototype testing, mentor sessions, and jury rounds.',
      highlight: true
    }
  ];

  // Day 1 Hourly Schedule from content1.jpeg
  const day1Schedule = [
    { time: '07:00 – 08:30 AM', title: 'Registration + Opening Ceremony', desc: 'Onboarding, badge collection, team desk allocation, and inaugural address by Aerospace Club dignitaries.', tag: 'CHECK-IN' },
    { time: '08:30 – 11:30 AM', title: 'Build Sprint 1: Conception to Code', desc: 'Hackathon commences! Teams initialize system architectures, wiring, CAD modeling, or software repository setup.', tag: 'SPRINT' },
    { time: '11:30 AM – 12:30 PM', title: 'Technical Mentorship Session', desc: 'Domain mentors from aerospace and industry visit team pods for technical debugging and constructive feedback.', tag: 'MENTOR' },
    { time: '12:30 – 02:00 PM', title: 'Checkpoint 1 & Catered Lunch', desc: 'Midday progress logging and buffet lunch for all participants.', tag: 'MEAL' },
    { time: '02:00 – 05:30 PM', title: 'Build Sprint 2: Integration & Refinement', desc: 'Testing flight algorithms, calibrating hardware actuators/sensors, stress testing payload prototypes.', tag: 'SPRINT' },
    { time: '05:30 – 06:00 PM', title: 'High Tea + Energizer Refreshments', desc: 'Coffee, snacks, and networking break.', tag: 'BREAK' },
    { time: '06:00 – 07:00 PM', title: 'Final Jury Evaluation Round', desc: 'Judges review working prototypes at team stations to select the Top 10 Finalists for Day 2 presentations.', tag: 'JURY' },
    { time: '07:00 – 08:00 PM', title: 'Final Code Freeze & Submission', desc: 'Repository freeze, video demo capture, code commit verification, and Day 1 wrap-up.', tag: 'DEADLINE' }
  ];

  // Day 2 Hourly Schedule from content1.jpeg
  const day2Schedule = [
    { time: '11:00 AM – 01:00 PM', title: 'Grand Finale Stage Presentations', desc: 'Top 10 shortlisted finalists pitch their live aerospace prototypes to senior judges in the main auditorium.', tag: 'PITCH' },
    { time: '01:00 – 02:00 PM', title: 'Guest Lecture + Telescope Astronomy Workshop', desc: 'Exclusive keynote by aerospace specialists followed by a live telescope astronomy observational workshop.', tag: 'WORKSHOP' },
    { time: '02:00 – 02:30 PM', title: 'Winner Announcement & Magazine Launch', desc: 'Official launch of the Aerospace Club Magazine, announcement of Champions, and award ceremonies.', tag: 'CEREMONY' },
    { time: '02:30 – 03:00 PM', title: 'Grand Closing Ceremony & Felicitations', desc: 'Vote of thanks, recognition of organizers, and distribution of trophies, cash prizes, and certificates.', tag: 'FINALE' }
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-crimson-400 mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>FLIGHT CHRONOLOGY // 03</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          STAGES & TIMELINES
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto mb-8">
          From online PPT shortlisting to the 12-hour offline sprint at MITS Gwalior. Explore the complete flight path.
        </p>

        {/* View Switcher Tabs */}
        <div className="inline-flex p-1.5 rounded-2xl bg-space-900/90 border border-space-800 backdrop-blur-xl">
          <button
            onClick={() => { playTelemetryChime(); setActiveView('stages'); }}
            onMouseEnter={playHoverBlip}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeView === 'stages'
                ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(224,36,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Master Milestones</span>
          </button>
          
          <button
            onClick={() => { playTelemetryChime(); setActiveView('day1'); }}
            onMouseEnter={playHoverBlip}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeView === 'day1'
                ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(224,36,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Day 1: 12-Hr Hack (24 Oct)</span>
          </button>

          <button
            onClick={() => { playTelemetryChime(); setActiveView('day2'); }}
            onMouseEnter={playHoverBlip}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
              activeView === 'day2'
                ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(224,36,68,0.4)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Telescope className="w-4 h-4" />
            <span>Day 2: Finale (25 Oct)</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Master Stages */}
      {activeView === 'stages' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masterStages.map((stage) => (
            <div
              key={stage.step}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                stage.highlight
                  ? 'glass-card-crimson border-crimson-500/50 shadow-[0_0_25px_rgba(224,36,68,0.2)]'
                  : 'glass-card border-space-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-orbitron font-bold text-3xl text-crimson-500/40">{stage.step}</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-space-950/80 border border-space-700 text-slate-300">
                    {stage.status}
                  </span>
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white mb-2">{stage.title}</h3>
                <div className="text-xs font-mono text-crimson-300 font-semibold mb-1">{stage.date}</div>
                <div className="text-xs font-mono text-slate-400 mb-4">{stage.time}</div>
                <p className="text-slate-300 text-xs leading-relaxed">{stage.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-space-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>CONFIRMED</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: Day 1 Schedule */}
      {activeView === 'day1' && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-space-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-space-800">
            <div>
              <div className="text-xs font-mono text-crimson-400 uppercase tracking-wider mb-1">
                DAY 1 SCHEDULE • 24 OCTOBER 2026
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white">
                OFFLINE 12-HOUR HACKATHON // BUILD • TEST • INNOVATE
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-space-950/80 px-4 py-2 rounded-xl border border-space-800">
              <MapPin className="w-4 h-4 text-crimson-400" />
              <span>SAC, MITS GWALIOR CAMPUS</span>
            </div>
          </div>

          <div className="space-y-4">
            {day1Schedule.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={playHoverBlip}
                className="p-4 sm:p-5 rounded-2xl bg-space-950/60 border border-space-800/80 hover:border-crimson-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="font-mono text-xs sm:text-sm font-semibold text-crimson-400 w-36 flex-shrink-0">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-sm sm:text-base text-white group-hover:text-crimson-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="self-start sm:self-center text-[10px] font-mono px-3 py-1 rounded-full bg-space-900 border border-space-700 text-slate-300 whitespace-nowrap">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: Day 2 Schedule */}
      {activeView === 'day2' && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-space-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-space-800">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                DAY 2 SCHEDULE • 25 OCTOBER 2026
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white">
                GRAND FINALE, TELESCOPE WORKSHOP & FELICITATION
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-space-950/80 px-4 py-2 rounded-xl border border-space-800">
              <Award className="w-4 h-4 text-amber-400" />
              <span>A DAY TO CELEBRATE INNOVATION</span>
            </div>
          </div>

          <div className="space-y-4">
            {day2Schedule.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={playHoverBlip}
                className="p-4 sm:p-5 rounded-2xl bg-space-950/60 border border-space-800/80 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="font-mono text-xs sm:text-sm font-semibold text-amber-400 w-36 flex-shrink-0">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span className="self-start sm:self-center text-[10px] font-mono px-3 py-1 rounded-full bg-space-900 border border-space-700 text-amber-300 whitespace-nowrap">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Exclusive Workshop Highlight */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-space-900 via-amber-950/20 to-space-900 border border-amber-500/30 flex items-center space-x-4">
            <Telescope className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div className="text-xs text-slate-300">
              <strong className="text-white block text-sm font-orbitron">Special Attraction: Live Telescope Stargazing Session</strong>
              Participants and finalists will experience direct observational astronomy guided by Aerospace Club astronomers.
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
