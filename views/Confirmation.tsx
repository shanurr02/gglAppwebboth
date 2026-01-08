
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Confirmation: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] items-center px-8 py-12">
      <header className="w-full flex justify-between items-center mb-12">
        <h2 className="font-bold text-slate-800">Confirmation</h2>
        <button onClick={() => onNavigate('DASHBOARD')} className="p-2 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </header>

      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-blue-50">
         <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
         </div>
      </div>

      <h1 className="text-3xl font-black text-slate-900 mb-4 text-center">Purchase Confirmed!</h1>
      <p className="text-slate-400 text-center text-sm leading-relaxed mb-12 px-4">
        You have successfully enrolled in the advanced training program.
      </p>

      <div className="w-full bg-white rounded-[32px] p-6 shadow-soft border border-slate-50 mb-12">
         <div className="flex gap-4 items-center mb-6">
            <div className="w-16 h-16 bg-blue-900 rounded-2xl overflow-hidden shrink-0">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1">
               <span className="text-[8px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest">Course</span>
               <h3 className="font-bold text-slate-800 text-xs mt-1 leading-snug">All-in-one Digital Business & AI Course</h3>
               <p className="text-[9px] text-slate-400 mt-0.5">ID: GGL-2023-A</p>
            </div>
         </div>

         <div className="space-y-4 pt-6 border-t border-slate-50">
            <div className="flex justify-between items-center text-[10px]">
               <span className="font-bold text-slate-300 uppercase tracking-widest">Payment Method</span>
               <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  Visa **** 4242
               </span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
               <span className="font-bold text-slate-300 uppercase tracking-widest">Transaction ID</span>
               <span className="font-bold text-slate-800">#TRX-6839201</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
               <span className="font-bold text-slate-300 uppercase tracking-widest">Date</span>
               <span className="font-bold text-slate-800">Oct 24, 2023</span>
            </div>
            <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
               <span className="text-xs font-black text-slate-800">Total Paid</span>
               <span className="text-base font-black text-blue-600">₹1180.00</span>
            </div>
         </div>
      </div>

      <button className="text-[10px] font-black text-blue-600 flex items-center gap-2 mb-12 uppercase tracking-[0.2em]">
         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
         Download GST bill
      </button>

      <div className="w-full space-y-4">
         <button 
           onClick={() => onNavigate('COURSE_DETAILS')}
           className="w-full py-4 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
         >
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            Start Learning
         </button>
         <button 
           onClick={() => onNavigate('DASHBOARD')}
           className="w-full py-4 text-slate-400 text-xs font-bold hover:text-slate-600 transition-all"
         >
            Return to Home
         </button>
      </div>

      <p className="mt-auto text-[10px] text-slate-300 font-bold uppercase tracking-widest">Need help with this order?</p>
    </div>
  );
};

export default Confirmation;
