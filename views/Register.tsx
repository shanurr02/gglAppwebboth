
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Register: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center px-6 border-b border-slate-100 sticky top-0 bg-white z-10 shrink-0">
        <button onClick={() => onNavigate('SPLASH')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="flex-1 text-center font-bold text-slate-800 -ml-8">Register</h1>
      </header>

      <div className="px-6 py-8">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Join GGL Global</h2>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          Create an account to start your journey in our international network.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Full Name</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ex. Sarah Williams" 
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Mobile Number</label>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 h-12 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 font-medium">
                🇺🇸 +1
              </button>
              <input 
                type="tel" 
                placeholder="555 123-4567" 
                className="flex-1 h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="text-[11px] font-bold text-blue-600 flex items-center gap-1">
              Send verification code <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">OTP Verification Code</label>
            <div className="grid grid-cols-4 gap-3">
              {[8, 2, 4, 9].map((val, i) => (
                <input 
                  key={i}
                  type="text" 
                  defaultValue={val}
                  className="w-full aspect-square text-center font-bold text-xl bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
              ))}
            </div>
            <p className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>
              System will automatically verify the code upon entry.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Set Password</label>
              <div className="relative">
                <input type="password" placeholder="••••••••" className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Confirm</label>
              <div className="relative">
                <input type="password" placeholder="••••••••" className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Referral Code</label>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">Required</span>
            </div>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="GGL-REF-00392" 
                className="w-full h-12 px-4 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
                readOnly
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 flex items-center gap-1.5 px-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Referred by: <span className="font-bold text-slate-600">Michael Scott</span>
            </p>
          </div>

          <button 
            onClick={() => onNavigate('DASHBOARD')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
          >
            Create Account
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <p className="text-[11px] text-center text-slate-400 px-10 leading-relaxed">
            By creating an account, you agree to our <span className="text-blue-500 underline font-medium">Terms of Service</span> & <span className="text-blue-500 underline font-medium">Privacy Policy</span>.
          </p>
        </div>

        <div className="mt-12 py-6 border-t border-slate-50 text-center">
          <p className="text-sm text-slate-500">
            Already have an account? <button onClick={() => onNavigate('LOGIN')} className="text-blue-600 font-bold">Log In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
