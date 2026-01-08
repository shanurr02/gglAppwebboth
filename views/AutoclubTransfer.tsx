
import React, { useState } from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
  onTransfer: (amount: number) => void;
}

const AutoclubTransfer: React.FC<Props> = ({ onNavigate, user, onTransfer }) => {
  const [amount, setAmount] = useState('');
  const numericAmount = parseFloat(amount) || 0;

  const handleConfirm = () => {
    if (numericAmount > 0 && numericAmount <= user.autoclubBalance) {
      onTransfer(numericAmount);
      onNavigate('CONFIRMATION');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('AUTOCLUB_WALLET')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Transfer Funds</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8 space-y-10">
        <section className="space-y-4">
           <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2">From Source</h3>
           <div className="bg-white p-6 rounded-[32px] shadow-soft border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <div>
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Autoclub Wallet</h4>
                 <h5 className="text-base font-black text-slate-800">₹{user.autoclubBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h5>
                 <div className="flex items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[8px] font-bold text-green-500 uppercase">Available</span>
                 </div>
              </div>
           </div>
        </section>

        <div className="flex justify-center -my-6 relative z-10">
           <div className="w-12 h-12 bg-blue-600 rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center border-4 border-[#f8fafc]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
           </div>
        </div>

        <section className="space-y-4">
           <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2">To Destination</h3>
           <div className="bg-white p-6 rounded-[32px] shadow-soft border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <div>
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Main GGL Wallet</h4>
                 <h5 className="text-base font-black text-slate-800">Current: ₹{user.balance.toLocaleString()}</h5>
              </div>
           </div>
        </section>

        <section className="space-y-4">
           <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Amount to Transfer</h3>
           <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-xl font-black">₹</div>
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full h-20 pl-12 pr-20 bg-white border border-slate-100 rounded-[32px] text-2xl font-black text-slate-800 focus:outline-none focus:border-blue-500 shadow-soft"
              />
              <button 
                onClick={() => setAmount(user.autoclubBalance.toString())}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] px-3 py-2 bg-blue-50 rounded-xl"
              >
                Max Fund
              </button>
           </div>
           <p className="text-[9px] text-slate-300 font-bold ml-4 uppercase tracking-widest">Minimum transfer amount: ₹10.00</p>
        </section>

        <div className="space-y-4 pt-4">
           <div className="flex justify-between items-center px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transfer Fee</span>
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Free</span>
           </div>
           <div className="flex justify-between items-center px-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Processing Time</span>
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Instant</span>
           </div>
           <div className="pt-4 border-t border-slate-100 flex justify-between items-center px-4">
              <span className="text-sm font-black text-slate-800">Projected Main Balance</span>
              <span className="text-xl font-black text-blue-600">₹{(user.balance + numericAmount).toLocaleString()}</span>
           </div>
        </div>
      </div>

      <div className="mt-auto p-6 bg-white border-t border-slate-50">
         <button 
          onClick={handleConfirm}
          disabled={numericAmount <= 0 || numericAmount > user.autoclubBalance}
          className={`w-full py-5 rounded-[24px] text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg transition-all
            ${numericAmount <= 0 || numericAmount > user.autoclubBalance 
              ? 'bg-slate-100 text-slate-300 shadow-none cursor-not-allowed' 
              : 'bg-blue-600 text-white shadow-blue-100 active:scale-[0.98]'
            }
          `}
         >
            Confirm Transfer
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
         </button>
         <p className="text-[9px] text-slate-300 text-center mt-4 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure, 256-bit encrypted transaction
         </p>
      </div>
    </div>
  );
};

export default AutoclubTransfer;
