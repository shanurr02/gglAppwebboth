
import React, { useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
}

const HelpSupport: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    { 
      q: "When are GGL commissions paid out?", 
      a: "Commissions are calculated daily based on your direct activity. Payouts are processed via your GGL wallet every Tuesday and Thursday (10 AM - 6 PM EST). You can withdraw these funds instantly to your linked Bank Account as per standard GGL International policies." 
    },
    { 
      q: "How do I activate a new course?", 
      a: "Once you purchase a course from the Academy, it is automatically added to your 'Continue Learning' section on the Dashboard." 
    },
    { 
      q: "What benefits are in Autoclub Silver?", 
      a: "Silver members get 10% higher shared earnings coefficient and early access to global sales reports." 
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Help Center</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8 space-y-8">
        <div className="relative">
           <input 
            type="text" 
            placeholder="Search for answers..." 
            className="w-full h-14 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl shadow-soft focus:outline-none focus:border-blue-500 font-medium"
           />
           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
           </div>
        </div>

        <section>
           <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-6">Common Questions</h3>
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-3xl border border-slate-50 shadow-soft overflow-hidden">
                   <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 flex items-center justify-between text-left gap-4"
                   >
                      <span className="text-xs font-black text-slate-800 leading-snug">{faq.q}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`text-slate-300 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                   </button>
                   {activeFaq === i && (
                     <div className="px-6 pb-6 pt-0">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <p className="text-xs text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                        </div>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </section>

        <div className="pt-10 flex flex-col items-center">
           <h4 className="text-sm font-black text-slate-800 mb-2">Still need help?</h4>
           <p className="text-[10px] text-slate-400 font-medium mb-8 text-center px-10">Our support team is available 24/7 via the official chat.</p>
           <button 
            onClick={() => onNavigate('SUPPORT_CHAT')}
            className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-95 transition-all"
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Start Live Support Chat
           </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
