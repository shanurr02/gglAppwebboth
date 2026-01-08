
import React, { useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Checkout: React.FC<Props> = ({ onNavigate }) => {
  const [method, setMethod] = useState('Google Pay');

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('COURSES')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Checkout</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8">
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 mb-10">
           <div className="flex-1">
              <span className="text-[8px] font-black uppercase text-white bg-blue-500 px-2 py-0.5 rounded tracking-widest">Best Seller</span>
              <h3 className="font-bold text-slate-800 text-sm mt-2">GGL Business Mastery Course</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Lifetime Access • 15 Modules</p>
           </div>
           <div className="w-16 h-16 bg-blue-900 rounded-xl overflow-hidden shrink-0 shadow-lg">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
           </div>
        </div>

        <section className="mb-10">
           <h3 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">Order Summary</h3>
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <span className="text-xs font-medium text-slate-400">Base Amount</span>
                 <span className="text-xs font-bold text-slate-800">₹1000</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs font-medium text-slate-400">GST (18%)</span>
                 <span className="text-xs font-bold text-slate-800">₹180</span>
              </div>
              <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                 <span className="text-sm font-bold text-slate-800">Total Payable</span>
                 <span className="text-base font-black text-blue-600">₹1180</span>
              </div>
           </div>
        </section>

        <section>
           <h3 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">Payment Method</h3>
           <div className="space-y-3">
              {[
                { name: 'Google Pay', desc: 'UPI ID: user@okaxis', icon: 'gpay' },
                { name: 'PhonePe', desc: 'Fast & Secure UPI', icon: 'phonepe' },
                { name: 'Credit / Debit Card', desc: 'Visa, Mastercard, Rupay', icon: 'card' }
              ].map((item) => (
                <div 
                  key={item.name}
                  onClick={() => setMethod(item.name)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer
                    ${method === item.name ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-50 hover:bg-slate-50'}
                  `}
                >
                   <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon === 'gpay' && <div className="w-6 h-6 rounded-full bg-blue-600"></div>}
                      {item.icon === 'phonepe' && <div className="w-6 h-6 rounded-full bg-purple-600"></div>}
                      {item.icon === 'card' && <div className="w-6 h-6 rounded bg-blue-900"></div>}
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                   </div>
                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                     ${method === item.name ? 'border-blue-600 bg-blue-600' : 'border-slate-200'}
                   `}>
                      {method === item.name && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                   </div>
                </div>
              ))}
           </div>
        </section>

        <div className="mt-8 flex items-center justify-center gap-2 py-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
           <span className="text-[10px] font-bold text-slate-400">Payments are 100% Secure & Encrypted</span>
        </div>
      </div>

      <div className="mt-auto p-6 border-t border-slate-50 flex items-center justify-between">
         <div className="flex-1">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Total to pay</span>
            <span className="text-xl font-black text-slate-800">₹1180</span>
         </div>
         <button 
          onClick={() => onNavigate('CONFIRMATION')}
          className="flex-1 py-4 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
         >
            Pay Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
         </button>
      </div>
    </div>
  );
};

export default Checkout;
