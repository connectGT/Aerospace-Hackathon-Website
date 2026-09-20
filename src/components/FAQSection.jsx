import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { playHoverBlip, playTelemetryChime } from '../utils/audio';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in Nakshatra 2026?',
      a: 'Any enrolled college or university student across India — whether Undergraduate or Postgraduate, across Engineering, Sciences, Management, Design, Law, or Medical — is eligible to compete.'
    },
    {
      q: 'Is Round 1 registration and PPT submission free?',
      a: 'Yes! Registration and Round 1 PPT submission are hosted entirely through Unstop. All teams can register and submit their idea PPT free of cost before the deadline.'
    },
    {
      q: 'Are cross-college and inter-branch teams permitted?',
      a: 'Absolutely! We actively encourage interdisciplinary and inter-college collaboration. Your team of 2 to 4 members can consist of students from different engineering disciplines, years, or colleges.'
    },
    {
      q: 'What should our Round 1 PPT presentation contain?',
      a: 'Your presentation must address your chosen problem statement from either the Software or Hardware track. It should clearly outline: (1) Problem Analysis, (2) Proposed Solution & Innovation, (3) High-Level System Architecture, (4) Tech Stack / Components, and (5) Expected Impact.'
    },
    {
      q: 'Where will the Round 2 offline hackathon take place?',
      a: 'Round 2 is an intensive 12-hour offline hackathon held on-campus at the Student Activity Center (SAC), Madhav Institute of Technology and Science (MITS), Gwalior, Madhya Pradesh.'
    },
    {
      q: 'How many teams will advance to the offline round at MITS?',
      a: 'The top 50 teams will be shortlisted based on the technical evaluation of their Round 1 PPT submissions to attend the on-campus offline finale on 24-25 October 2026.'
    },
    {
      q: 'Will hardware tools and components be provided at the venue?',
      a: 'High-speed internet, power points, testing space, and mentor assistance will be provided. Teams in the Hardware Track are expected to bring their preferred development boards, sensors, and basic fabrication kits.'
    },
    {
      q: 'What amenities will be provided during the 12-hour sprint?',
      a: 'Shortlisted teams will receive meals, high tea, refreshments, workstation pods, mentor guidance, and free entry into the Day 2 live telescope stargazing workshop!'
    }
  ];

  const toggleFAQ = (idx) => {
    playTelemetryChime();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-cyan-400 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>QUERY RESOLUTION // 06</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-slate-400 text-base">
          Everything you need to know before initiating your registration countdown.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'glass-card-crimson border-crimson-500/50 shadow-[0_0_20px_rgba(224,36,68,0.15)]'
                  : 'glass-card border-space-700 hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                onMouseEnter={playHoverBlip}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
              >
                <span className="font-orbitron font-semibold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? 'bg-crimson-500 text-white rotate-180' : 'bg-space-900 text-slate-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-space-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions? */}
      <div className="mt-12 text-center p-6 rounded-2xl bg-space-950/60 border border-space-800">
        <p className="text-xs text-slate-400">
          Have an unlisted query? Reach out directly to the organizers via <a href="mailto:shreyagoyal401@gmail.com" className="text-crimson-400 font-semibold underline underline-offset-2">shreyagoyal401@gmail.com</a>.
        </p>
      </div>

    </section>
  );
}
