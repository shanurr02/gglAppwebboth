
import React, { useState } from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
}

const WithdrawalForm: React.FC<Props> = ({ onNavigate, user }) => {
  const [amount, setAmount] = useState('125.00');
  const numericAmount = parseFloat(amount) || 0;
  const fee = numericAmount * 0.1;
  const net = numericAmount - fee;

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('WALLET')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Withdrawal</h1>
        <button className="p-2 -mr-2 text-slate-400" onClick={() => onNavigate('WITHDRAWAL_HISTORY')}>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="9"></circle></svg>
        </button>
      </header>

      <div className="px-6 py-4">
        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-6 w-fit mx-auto border border-green-100 shadow-sm">
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
           Withdrawal Unlocked
        </div>

        <div className="blue-gradient rounded-[32px] p-6 text-white shadow-xl shadow-blue-200 mb-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
           <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-2">Available Balance</p>
           <h2 className="text-3xl font-black">₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
           <p className="text-[8px] font-bold mt-2 opacity-50 uppercase tracking-widest">Withdrawals processed within 48h</p>
        </div>

        <section className="space-y-6">
           <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Withdrawal Amount</label>
              <div className="relative group">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</div>
                 <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-14 pl-8 pr-16 bg-white border border-slate-100 rounded-2xl font-bold text-slate-800 focus:outline-none focus:border-blue-500 shadow-soft"
                 />
                 <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-600 uppercase tracking-widest">MAX</button>
              </div>
              <p className="text-[10px] text-slate-300 ml-1">Min. withdrawal: ₹100.00</p>
           </div>

           <div className="bg-white p-6 rounded-[24px] shadow-soft border border-slate-50 space-y-4">
              <div className="flex justify-between items-center text-xs font-medium">
                 <span className="text-slate-400">Gross Amount</span>
                 <span className="text-slate-800 font-bold">₹{numericAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-medium">
                 <span className="text-slate-400">Maintenance Fee (10%)</span>
                 <span className="text-red-500 font-bold">- ₹{fee.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                 <span className="text-sm font-bold text-slate-800">Net Receivable</span>
                 <span className="text-lg font-black text-blue-600">₹{net.toFixed(2)}</span>
              </div>
           </div>

           {!user.isKycVerified ? (
              <div className="bg-blue-600 rounded-[24px] p-6 text-white shadow-lg shadow-blue-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                 </div>
                 <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    Verification Required
                 </h4>
                 <p className="text-[10px] font-medium opacity-80 leading-relaxed mb-4 pr-12">
                    To ensure secure payouts, please complete your KYC and bank details before proceeding.
                 </p>
                 <button 
                  onClick={() => onNavigate('KYC_DETAILS')}
                  className="w-full py-3 bg-white text-blue-600 text-[10px] font-black uppercase tracking-[0.1em] rounded-xl shadow-sm active:scale-[0.98] transition-all"
                 >
                    Complete KYC Now <span className="ml-1">→</span>
                 </button>
              </div>
           ) : (
             <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-soft flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                   <h4 className="text-xs font-bold text-slate-800">KYC Verified</h4>
                   <p className="text-[9px] text-slate-400 font-medium">Bank: Chase Savings •••• 4221</p>
                </div>
             </div>
           )}
        </section>
      </div>

      <div className="mt-auto p-6 bg-white border-t border-slate-50">
         <button 
          onClick={() => onNavigate('WITHDRAWAL_PREVIEW')}
          disabled={!user.isKycVerified || numericAmount < 100}
          className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg
            ${(!user.isKycVerified || numericAmount < 100) 
              ? 'bg-slate-100 text-slate-300 shadow-none cursor-not-allowed' 
              : 'bg-blue-600 text-white shadow-blue-100 active:scale-[0.98]'
            }
          `}
         >
            Confirm Withdrawal
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
         </button>
         <p className="text-[9px] text-slate-300 text-center mt-4 font-bold uppercase tracking-widest">GGL International System Security</p>
      </div>
    </div>
  );
};

export default WithdrawalForm;
