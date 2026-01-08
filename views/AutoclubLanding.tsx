
import React from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
}

const AutoclubLanding: React.FC<Props> = ({ onNavigate, user }) => {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('DASHBOARD')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Autoclub</h1>
        <button className="p-2 -mr-2 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </button>
      </header>

      <div className="px-6 py-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
           <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
           </div>
           <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
        </div>

        <h2 className="text-2xl font-black text-slate-900 mb-4 text-center leading-tight">Unlock Your Autoclub Benefits</h2>
        <p className="text-xs text-slate-400 text-center leading-relaxed px-6 mb-10 font-medium">
          Access to the Autoclub income distribution is currently locked. Complete the goal below to join the inner circle.
        </p>

        <section className="w-full space-y-8">
           <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/20"></div>
              <div className="flex items-start gap-4 mb-5">
                 <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Requirement</h4>
                    <p className="text-[13px] font-bold text-slate-800">Make 2 direct course sales</p>
                 </div>
              </div>

              <div>
                 <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest mb-2">
                    <span className="text-blue-600">Keep going!</span>
                    <span className="text-slate-400">1/2 Completed</span>
                 </div>
                 <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-1/2"></div>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-1">Autoclub Benefits</h3>
              {[
                { title: 'Daily Spin to Earn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-4.4 3.6-8 8-8 1.5 0 2.8.4 4 1.1M22 12c0 4.4-3.6 8-8 8-1.5 0-2.8-.4-4-1.1"/></svg>, desc: 'Withdraw rewards daily' },
                { title: 'Shared Earnings', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, desc: 'Profit from network activity' },
                { title: 'Passive Income', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-2a2 2 0 1 1 0-4h2"/><path d="M12 5v2m0 10v2"/></svg>, desc: 'Automated revenue streams' }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-white shadow-sm">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                      {benefit.icon}
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-800">{benefit.title}</h4>
                      <p className="text-[9px] text-slate-400 font-medium">{benefit.desc}</p>
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
              ))}
           </div>
        </section>
      </div>

      <div className="mt-auto p-6 bg-white border-t border-slate-50">
         <button 
          onClick={() => onNavigate('AUTOCLUB_ONBOARDING')}
          className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
         >
            Go to Home
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
         </button>
      </div>
    </div>
  );
};

export default AutoclubLanding;
