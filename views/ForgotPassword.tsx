
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const ForgotPassword: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <header className="h-14 flex items-center px-6 sticky top-0 bg-white z-10 shrink-0">
        <button onClick={() => onNavigate('LOGIN')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center px-8 py-12">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-10 relative">
           <div className="w-16 h-16 bg-blue-50 border-2 border-dashed border-blue-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path><rect x="9" y="10" width="6" height="6" rx="1" ry="1"></rect></svg>
           </div>
           <div className="absolute top-0 right-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Forgot Password?</h2>
        <p className="text-slate-400 text-center text-sm leading-relaxed mb-12 px-4">
          Don't worry! It happens. Please enter the mobile number linked to your account.
        </p>

        <div className="w-full space-y-8">
           <div className="space-y-2">
             <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Mobile Number</label>
             <div className="flex gap-2">
                <div className="relative group">
                   <select className="appearance-none h-12 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600 font-bold focus:outline-none focus:border-blue-500">
                      <option>+1</option>
                      <option>+91</option>
                      <option>+44</option>
                   </select>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                   </div>
                </div>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000" 
                  className="flex-1 h-12 px-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:outline-none focus:border-blue-500"
                />
             </div>
           </div>

           <button 
             onClick={() => onNavigate('LOGIN')}
             className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
           >
             Send Code
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
           </button>
        </div>

        <div className="mt-auto py-8">
           <p className="text-sm text-slate-500 font-medium">
             Remember password? <button onClick={() => onNavigate('LOGIN')} className="text-blue-600 font-bold">Log In</button>
           </p>
        </div>

        <button className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mt-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
           Need help? Contact Support
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
