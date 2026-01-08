
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onUpdate: () => void;
}

const KYCDetails: React.FC<Props> = ({ onNavigate, onUpdate }) => {
  const handleVerify = () => {
    onUpdate();
    onNavigate('WITHDRAWAL_FORM');
  };

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('WITHDRAWAL_FORM')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">KYC Details</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-6 space-y-8 pb-32">
        <div className="bg-blue-50/50 p-5 rounded-[24px] border border-blue-100/50 flex items-start gap-4">
           <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line><circle cx="12" cy="12" r="10"></circle></svg>
           </div>
           <div>
              <h4 className="text-xs font-bold text-blue-800 mb-1">Important Policy</h4>
              <p className="text-[10px] text-blue-600/70 leading-relaxed font-medium">
                 To protect your income stream, please ensure KYC matches your bank account. Any changes require support approval.
              </p>
              <button className="text-[9px] font-black text-blue-600 mt-2 uppercase tracking-widest flex items-center gap-1">
                 View Data Policy <span className="text-xs">→</span>
              </button>
           </div>
        </div>

        <section>
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Personal Information</h3>
              <span className="text-[9px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded uppercase">Verified</span>
           </div>

           <div className="space-y-4">
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                 <input type="text" defaultValue="Jonathan Doe" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                 <div className="relative">
                    <input type="text" defaultValue="15/05/1995" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                 </div>
              </div>
              <div className="space-y-1.5">
                 <div className="flex justify-between items-center ml-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mobile Number</label>
                    <span className="text-[8px] font-bold text-slate-300">Read-only</span>
                 </div>
                 <div className="relative">
                    <input type="text" defaultValue="+1 (555) 123-4567" readOnly className="w-full h-12 px-5 bg-slate-100 border border-slate-100 rounded-xl font-bold text-slate-400" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                 </div>
              </div>
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                 <input type="email" defaultValue="jonathan.doe@example.com" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
              </div>
           </div>
        </section>

        <section>
           <div className="flex items-center justify-between mb-6">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Bank Details</h3>
              <span className="text-[9px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded uppercase">Pending</span>
           </div>

           <div className="space-y-4">
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Holder Name</label>
                 <input type="text" placeholder="John Doe" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Bank Name</label>
                 <div className="relative">
                    <select className="appearance-none w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500">
                       <option>Chase Bank</option>
                       <option>Bank of America</option>
                       <option>Wells Fargo</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                 </div>
              </div>
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Number</label>
                 <input type="text" placeholder="000 000 0000 4221" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Routing / SWIFT Code</label>
                 <input type="text" placeholder="CHASEUS33" className="w-full h-12 px-5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-800 focus:outline-none focus:border-blue-500" />
              </div>
           </div>

           <div className="mt-6 flex items-start gap-2.5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Your data is secured using AES-256 encryption.</p>
           </div>
        </section> section

        <div className="fixed bottom-0 left-0 right-0 max-w-[450px] mx-auto p-6 bg-white border-t border-slate-50">
           <button 
            onClick={handleVerify}
            className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
           >
              Update & Verify
           </button>
        </div>
      </div>
    </div>
  );
};

export default KYCDetails;
