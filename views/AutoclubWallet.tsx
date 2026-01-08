
import React from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
}

const AutoclubWallet: React.FC<Props> = ({ onNavigate, user }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('AUTOCLUB_DASHBOARD')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Autoclub Wallet</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8 space-y-10">
        <div className="text-center">
           <div className="flex justify-center items-center gap-2 mb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              Total Autoclub Balance
           </div>
           <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">₹{user.autoclubBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full text-[10px] font-black text-green-600 border border-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              + 12.5% this month
           </div>

           <button 
            onClick={() => onNavigate('AUTOCLUB_TRANSFER')}
            className="w-full mt-10 py-5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-3xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              Transfer to main wallet
           </button>
           <p className="text-[9px] text-slate-300 font-bold mt-4 uppercase tracking-widest">Funds are transferred instantly to your GGL Main Wallet.</p>
        </div>

        <section>
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800">Spin Earnings History</h3>
              <button className="text-xs font-bold text-blue-600">View All</button>
           </div>
           
           <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
              {['All Transactions', 'This Month', 'Last Month'].map((filter, i) => (
                 <button key={i} className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap border ${i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-100 shadow-sm'}`}>
                    {filter}
                 </button>
              ))}
           </div>

           <div className="space-y-4 mt-2">
              {[
                { title: 'Daily Spin Reward', date: 'Today, 10:30 AM', amount: '+ ₹1,250.50', icon: '🎰' },
                { title: 'Mega Spin Bonus', date: 'Oct 23, 2023', amount: '+ ₹5,500.00', icon: '🔥' },
                { title: 'Rank Achievement', date: 'Oct 20, 2023', amount: '+ ₹10,000.00', icon: '🏆' },
                { title: 'Transfer to Main', date: 'Oct 15, 2023', amount: '- ₹2,000.00', icon: '📤' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-[28px] shadow-soft border border-slate-50 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[10px] text-slate-300 font-bold uppercase">{item.date}</p>
                   </div>
                   <span className={`text-sm font-black ${item.amount.startsWith('+') ? 'text-blue-600' : 'text-slate-400'}`}>{item.amount}</span>
                </div>
              ))}
           </div>
        </section>

        <section className="pb-10">
           <div className="bg-white p-6 rounded-[32px] shadow-soft border border-slate-50">
              <div className="flex items-center justify-between mb-4">
                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">KYC Verification</h4>
                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-6">
                 Ensure all network details match your official identification documents for payout.
              </p>
              
              <div className="flex items-center justify-between mb-2">
                 <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Profile Identity</span>
                 <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Step 1/2</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 rounded-full w-1/2"></div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default AutoclubWallet;
