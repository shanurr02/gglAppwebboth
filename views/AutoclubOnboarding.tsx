
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onJoin: () => void;
}

const AutoclubOnboarding: React.FC<Props> = ({ onNavigate, onJoin }) => {
  const handleJoin = () => {
    onJoin();
    onNavigate('AUTOCLUB_DASHBOARD');
  };

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('AUTOCLUB_LANDING')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Autoclub</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-4">
        <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-8 shadow-xl bg-blue-900 flex items-center justify-center">
           <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
           <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-3xl font-black text-white leading-tight mb-2">Unlock Daily Earnings</h2>
              <p className="text-white/70 text-xs font-medium">Be part of an elite growth system logic circle.</p>
           </div>
        </div>

        <section className="space-y-8 mb-12">
           <p className="text-xs text-slate-400 font-medium text-center px-10 leading-relaxed">
             Join an exclusive circle in the global GGL system circle generated share daily rewards for everyone.
           </p>

           <div className="space-y-6">
              <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest border-l-4 border-blue-600 pl-4">How Autoclub Works</h3>
              {[
                { title: 'Daily Spin', icon: '🎰', desc: 'Claim your daily autoclub income every 24 hours to boost your participation coefficient.' },
                { title: 'Eternal Earnings', icon: '💎', desc: 'A percentage of all global sales is distributed among Autoclub members daily.' },
                { title: 'Passive Income', icon: '📈', desc: 'Gain weekly recurring income from the active Autoclub members.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium leading-relaxed mt-1">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>

           <div className="bg-blue-50/50 p-6 rounded-[32px] border border-blue-100 flex items-center justify-between">
              <div>
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-1">Generated Pool Balance</span>
                 <h4 className="text-2xl font-black text-blue-600 tracking-tight">5,420 <span className="text-xs font-bold opacity-60">GGL</span></h4>
              </div>
              <div className="w-10 h-10 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
           </div>
        </section>
      </div>

      <div className="mt-auto p-6 bg-white border-t border-slate-50">
         <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
               <span className="text-[11px] font-black text-slate-800">1,000 GGL</span>
               <span className="text-[9px] font-bold text-slate-300 line-through">1,500</span>
            </div>
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">See Discounts</button>
         </div>
         <button 
          onClick={handleJoin}
          className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
         >
            Pay 1,000 & Join Autoclub
         </button>
         <p className="text-[9px] text-slate-300 text-center mt-4 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure payment via Play Store
         </p>
      </div>
    </div>
  );
};

export default AutoclubOnboarding;
