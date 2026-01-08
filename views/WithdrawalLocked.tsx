
import React from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
}

const WithdrawalLocked: React.FC<Props> = ({ onNavigate, user }) => {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0">
        <button onClick={() => onNavigate('WALLET')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Withdrawal</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8 flex flex-col items-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 relative">
           <div className="w-14 h-14 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
           </div>
           <div className="absolute top-0 right-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-white"></div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-3">Withdrawals Locked</h2>
        <p className="text-xs text-slate-400 text-center leading-relaxed mb-8 px-8">
          Your earnings are secure. You must complete a minimum of 2 direct course sales to unlock your funds for withdrawal.
        </p>

        <div className="w-full bg-slate-50 p-6 rounded-[32px] border border-slate-100 mb-10 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-slate-200"></div>
           <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2 block">Current Balance Available</span>
           <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-black text-slate-800">₹{user.balance.toLocaleString('en-IN')}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
           </div>
        </div>

        <section className="w-full">
           <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-6">Unlock Requirement</h3>
           
           <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-soft">
              <div className="flex items-start gap-4 mb-4">
                 <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                 </div>
                 <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-slate-800">Direct Course Sales</h4>
                    <p className="text-[10px] text-slate-400 mt-1">You need a minimum of 2 direct course sales to enable withdrawals.</p>
                 </div>
              </div>

              <div className="mt-4">
                 <div className="flex justify-between items-center text-[10px] font-bold mb-2 uppercase tracking-widest">
                    <span className="text-blue-600">In Progress</span>
                    <span className="text-slate-400">1 / 2 Sales</span>
                 </div>
                 <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '50%' }}></div>
                 </div>
              </div>
           </div>

           <div className="mt-8 flex items-start gap-3 px-2">
              <div className="w-4 h-4 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                 This requirement ensures the stability of the GGL International system for all members.
              </p>
           </div>
        </section>
      </div>

      <div className="mt-auto p-6 flex flex-col gap-4">
         <button className="w-full py-4 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-100 active:scale-[0.98] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            Share Referral Link
         </button>
         <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-2">Contact Support</button>
      </div>
    </div>
  );
};

export default WithdrawalLocked;
