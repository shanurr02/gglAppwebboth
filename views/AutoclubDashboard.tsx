
import React from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
  user: User;
}

const AutoclubDashboard: React.FC<Props> = ({ onNavigate, onOpenProfile, user }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="text-slate-600 p-1 active:scale-90 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="" />
          </div>
          <div>
             <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block">Autoclub Member</span>
             <h2 className="text-xs font-black text-slate-800 leading-none">{user.name}</h2>
          </div>
        </div>
        <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl active:scale-90 transition-transform" onClick={() => onNavigate('HELP_SUPPORT')}>
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </button>
      </header>

      <div className="px-6 py-6 space-y-8">
        <div className="blue-gradient rounded-[32px] p-8 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
           <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Autoclub Wallet Balance</p>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center" onClick={() => onNavigate('AUTOCLUB_WALLET')}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
           </div>
           <h2 className="text-4xl font-black mb-6 tracking-tight">₹{user.autoclubBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
           <button 
            onClick={() => onNavigate('AUTOCLUB_WALLET')}
            className="w-full py-4 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest border border-white/30 active:scale-[0.98] transition-all"
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              Manage Autoclub Wallet
           </button>
        </div>

        <section className="text-center">
           <span className="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] mb-4 block">Daily Reward</span>
           <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">Ready to Claim</h3>
           <p className="text-[10px] text-slate-400 font-medium mb-10">Tap the bonus to add to your balance today.</p>
           
           <div className="relative group cursor-pointer active:scale-95 transition-all mx-auto w-fit" onClick={() => alert('Daily Reward Claimed!')}>
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <div className="w-32 h-44 bg-white rounded-[24px] shadow-2xl border border-slate-100 flex items-center justify-center relative z-10 overflow-hidden transform transition-transform">
                 <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl font-black shadow-lg border border-blue-100">₹</div>
              </div>
           </div>

           <button 
            onClick={() => alert('Reward Claimed Successfully!')}
            className="w-full mt-12 py-5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-[24px] shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
           >
              Claim autoclub income
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
           </button>
        </section>

        <section>
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800">Recent Activity</h3>
              <button onClick={() => onNavigate('WITHDRAWAL_HISTORY')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest active:scale-95 transition-all">View All</button>
           </div>
           <div className="space-y-3">
              {[
                { title: 'Daily Spin Reward', date: 'Today, 10:30 AM', amount: '+ ₹12.50', color: 'green' },
                { title: 'Network Bonus', date: 'Yesterday', amount: '+ ₹80.00', color: 'green' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-soft border border-slate-50 flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-green-50 text-green-500`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[9px] text-slate-300 font-bold uppercase">{item.date}</p>
                   </div>
                   <span className="text-xs font-black text-green-500">{item.amount}</span>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default AutoclubDashboard;
