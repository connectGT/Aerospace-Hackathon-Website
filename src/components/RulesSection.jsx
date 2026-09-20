import React from 'react';
import { ShieldAlert, CheckSquare, AlertTriangle, Scale, FileText } from 'lucide-react';
import { playHoverBlip } from '../utils/audio';

export default function RulesSection() {
  const rulesList = [
    { text: 'Single Crew Membership: Each participant can be an active member of only one team across the hackathon.', icon: CheckSquare },
    { text: 'Squadron Composition: Each team must strictly consist of 2 to 4 verified members.', icon: CheckSquare },
    { text: 'Single Track & Problem: Teams must select and engineer solutions for one problem statement only.', icon: CheckSquare },
    { text: 'Original Intellectual Property: The submitted solution must be the team\'s genuine, original work.', icon: CheckSquare },
    { text: 'Zero Tolerance on Plagiarism: Plagiarism, copying, impersonation, or misrepresentation will lead to immediate disqualification.', icon: AlertTriangle, alert: true },
    { text: 'Strict PPT Deadline: Round 1 PPT submission must be completed before 30 September 2026, 12:59 PM IST.', icon: CheckSquare },
    { text: 'On-Campus Mandatory Presence: Shortlisted teams must physically attend the offline Final Round at MITS Gwalior.', icon: CheckSquare },
    { text: 'Adherence to Directives: Participants must follow all instructions and safety protocols issued by the Aerospace Club.', icon: CheckSquare },
    { text: 'Finality of Jury Verdict: The judgment rendered by the evaluation panel will be definitive and absolute.', icon: Scale },
    { text: 'Administrative Prerogative: Organizers reserve the right to amend timelines or rules with due notice to participants.', icon: CheckSquare },
    { text: 'Final Round Onboarding: Teams qualifying for the offline round will receive detailed logistic and kit guidelines.', icon: FileText }
  ];

  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-space-850 border border-space-700 text-xs font-mono text-crimson-400 mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>CODE OF CONDUCT // 05</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide mb-4">
          RULES & FLIGHT PROTOCOLS
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mx-auto">
          Ensure your crew operates within official mission parameters. Integrity and originality are paramount.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-space-700">
        <div className="grid md:grid-cols-2 gap-6">
          {rulesList.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                onMouseEnter={playHoverBlip}
                className={`p-4 sm:p-5 rounded-2xl transition-all flex items-start space-x-4 ${
                  rule.alert
                    ? 'bg-crimson-950/40 border border-crimson-500/40 text-slate-200'
                    : 'bg-space-950/60 border border-space-800/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 rounded-xl flex-shrink-0 mt-0.5 ${
                  rule.alert
                    ? 'bg-crimson-500/20 text-crimson-400'
                    : 'bg-space-900 text-crimson-500 border border-space-800'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm leading-relaxed block font-medium">
                    {rule.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
