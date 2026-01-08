
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const WithdrawalPreview: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('WITHDRAWAL_FORM')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Withdrawal Request</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-10 flex flex-col items-center">
        <div className="text-center mb-10">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Net Amount to Receive</span>
           <h2 className="text-4xl font-black text-blue-600 tracking-tight">₹9,000.00</h2>
           <p className="text-[9px] text-slate-300 font-bold mt-2 uppercase tracking-widest">After standard deductions</p>
           
           <div className="mt-6 flex justify-center">
              <div className="px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black text-blue-600 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                 To linked bank account
              </div>
           </div>
        </div>

        <div className="w-full space-y-4">
           <div className="bg-white p-6 rounded-[32px] shadow-soft border border-slate-50">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Requested Amount</h3>
                 <span className="text-sm font-bold text-slate-800">₹10,000.00</span>
              </div>
              <div className="flex justify-between items-center">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Maintenance Fee <span className="text-red-500 ml-1">10%</span></h3>
                 <span className="text-sm font-bold text-red-500">- ₹1,000.00</span>
              </div>
           </div>

           <div className="bg-white p-6 rounded-[32px] shadow-soft border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <div className="flex-1">
                 <div className="flex items-center gap-1.5 mb-0.5">
                    <h4 className="text-xs font-bold text-slate-800">Primary Bank Account</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <p className="text-[10px] text-slate-400 font-medium">Chase Bank •••• 4221</p>
              </div>
           </div>

           <div className="bg-blue-600 rounded-[28px] p-6 text-white shadow-lg shadow-blue-100 relative overflow-hidden">
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <h4 className="text-xs font-bold flex items-center gap-2 mb-2 relative">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                 About the deduction
              </h4>
              <p className="text-[10px] font-medium opacity-80 leading-relaxed relative">
                 The 10% maintenance charge helps to support the GGL system and provides income distribution model.
              </p>
           </div>
        </div>

        <p className="text-[9px] text-slate-400 text-center mt-8 px-10 leading-relaxed">
           By clicking confirm, you agree to the processing of funds as per our international payout policies.
        </p>
      </div>

      <div className="mt-auto p-6 flex flex-col gap-4">
         <button 
          onClick={() => onNavigate('CONFIRMATION')}
          className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
         >
            Confirm Withdrawal
         </button>
         <button 
          onClick={() => onNavigate('WITHDRAWAL_FORM')}
          className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center py-2"
         >
            Cancel Request
         </button>
      </div>
    </div>
  );
};

export default WithdrawalPreview;
