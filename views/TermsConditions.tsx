
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  // Added missing onOpenProfile prop to resolve Type error in App.tsx
  onOpenProfile: () => void;
}

const TermsConditions: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const sections = [
    { title: ' Refund Policy', content: 'We maintain a strict zero-refund policy once the course content has been accessed or the Autoclub fee has been paid. This ensures the stability of the distribution model.' },
    { title: 'Commission Payouts', content: 'Withdrawals are processed every Tuesday and Thursday. Minimum withdrawal is ₹100. A 10% maintenance charge applies to all outgoing transactions.' },
    { title: 'Autoclub Terms', content: 'Membership requires active status. Inactivity for more than 30 days may result in suspension of shared earnings coefficient.' },
    { title: 'Income Disclaimer', content: 'Earnings are based on individual effort and network growth. There are no guarantees of specific income levels.' }
  ];

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={() => onNavigate('DASHBOARD')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Terms & Conditions</h1>
        {/* Added drawer trigger button for header consistency */}
        <button onClick={onOpenProfile} className="text-slate-600 p-1 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </header>

      <div className="p-6">
        <div className="text-center mb-10">
           <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 block">Last Updated: October 24, 2023</span>
           <div className="blue-gradient p-8 rounded-[40px] text-white shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <span className="text-[10px] font-black uppercase text-blue-200 tracking-widest block mb-1">Financial Commitment</span>
              <h2 className="text-2xl font-black mb-4">Total Payable: ₹1180</h2>
              <div className="flex gap-2 justify-center">
                 <div className="px-3 py-1 bg-white/20 rounded-full text-[9px] font-black uppercase">Basic Course: ₹1000</div>
                 <div className="px-3 py-1 bg-white/20 rounded-full text-[9px] font-black uppercase">GST (18%): ₹180</div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
           {sections.map((sec, i) => (
             <div key={i} className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                   <h3 className="text-sm font-black text-slate-800">{sec.title}</h3>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {sec.content}
                   </p>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 border-dashed text-center">
           <p className="text-[10px] text-blue-600 leading-relaxed font-bold">
              By proceeding with the purchase, you acknowledge that you have read and agree to follow the GGL system rules.
           </p>
        </div>
      </div>

      <div className="mt-auto p-6 bg-white border-t border-slate-100">
         <button 
          onClick={() => onNavigate('DASHBOARD')}
          className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
         >
            Accept & Continue
         </button>
      </div>
    </div>
  );
};

export default TermsConditions;
