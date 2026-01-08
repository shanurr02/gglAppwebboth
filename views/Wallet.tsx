
import React from 'react';
import { Screen, User, Transaction } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
  user: User;
}

const Wallet: React.FC<Props> = ({ onNavigate, onOpenProfile, user }) => {
  const transactions: Transaction[] = [
    { id: 'T83241', type: 'Direct Sale', amount: 1500.00, date: 'Today', time: '10:42 AM', icon: 'cap' },
    { id: 'T44028', type: 'Level 2 Bonus', amount: 255.80, date: 'Yesterday', time: '04:15 PM', icon: 'star' },
    { id: 'T88102', type: 'Autoclub Dividend', amount: 3200.00, date: 'Oct 25', time: '08:00 AM', icon: 'car' },
    { id: 'T49201', type: 'Direct Sale', amount: 1500.00, date: 'Oct 23', time: '02:30 PM', icon: 'cap' },
  ];

  const handleWithdraw = () => {
    if (user.withdrawalUnlocked) {
      onNavigate('WITHDRAWAL_FORM');
    } else {
      onNavigate('WITHDRAWAL_LOCKED');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">My Wallet</h1>
        <button className="p-2 -mr-2 text-slate-600 active:scale-90 transition-transform" onClick={() => onNavigate('PROFILE_SETTINGS')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
      </header>

      <div className="px-6 py-6 flex-1 flex flex-col">
        <div className="blue-gradient rounded-[40px] p-8 text-center text-white shadow-xl shadow-blue-200 mb-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
           <p className="text-xs font-bold opacity-70 uppercase tracking-widest mb-3">Total Balance</p>
           <h2 className="text-4xl font-black mb-4 tracking-tight">₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              + 12.5% this month
           </div>
        </div>

        <div className="flex gap-4 mb-10">
           <button onClick={handleWithdraw} className="flex-1 flex flex-col items-center gap-3 active:scale-95 transition-all">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-soft border border-slate-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              </div>
              <span className="text-xs font-bold text-slate-500">Withdraw</span>
           </button>
           <button onClick={() => onNavigate('WITHDRAWAL_HISTORY')} className="flex-1 flex flex-col items-center gap-3 active:scale-95 transition-all">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-soft border border-slate-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <span className="text-xs font-bold text-slate-500">Report</span>
           </button>
        </div>

        <section className="flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Commission History</h3>
            <button className="text-xs font-bold text-blue-600 active:scale-95 transition-all" onClick={() => onNavigate('WITHDRAWAL_HISTORY')}>See All</button>
          </div>

          <div className="space-y-3 overflow-y-auto custom-scrollbar pr-1">
            {transactions.map((tx, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-soft border border-slate-50 flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
                   ${tx.icon === 'cap' ? 'bg-blue-50' : tx.icon === 'star' ? 'bg-purple-50' : 'bg-orange-50'}
                 `}>
                    {tx.icon === 'cap' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>}
                    {tx.icon === 'star' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>}
                    {tx.icon === 'car' && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>}
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                       <h4 className="font-bold text-slate-800 text-sm truncate">{tx.type}</h4>
                       <span className="text-sm font-black text-green-500 whitespace-nowrap">+₹{tx.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-bold text-slate-300">ID: {tx.id} • {tx.time}</span>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.date}</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wallet;
