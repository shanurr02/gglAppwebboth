
import React, { useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const Login: React.FC<Props> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-[#2563eb]">
      <div className="h-64 flex flex-col items-center justify-center text-white px-6">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </div>
        <h2 className="text-3xl font-bold mb-2">Welcome to GGL</h2>
        <p className="text-white/80 text-center text-sm px-10">
          Access your courses and income dashboard anywhere.
        </p>
      </div>

      <div className="flex-1 bg-white rounded-t-[40px] px-8 py-10 shadow-2xl">
        <h3 className="text-xl font-bold text-center mb-8">Login to your account</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Mobile Number</label>
            <div className="flex gap-2">
              <div className="w-16 h-12 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl text-slate-600 font-medium">+1</div>
              <input 
                type="tel" 
                placeholder="555 000-0000" 
                className="flex-1 h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
            <button 
              onClick={() => onNavigate('FORGOT_PASSWORD')}
              className="w-full text-right text-xs font-medium text-blue-600 mt-2"
            >
              Forgot Password?
            </button>
          </div>

          <button 
            onClick={() => onNavigate('DASHBOARD')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
          >
            Log In
          </button>

          <div className="relative py-4 flex items-center justify-center">
            <div className="absolute w-full h-px bg-slate-100"></div>
            <span className="relative px-4 bg-white text-[10px] text-slate-400 font-bold tracking-widest uppercase">OR</span>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500">
              New to GGL? <button onClick={() => onNavigate('REGISTER')} className="text-blue-600 font-bold">Create an Account</button>
            </p>
          </div>
        </div>

        <p className="mt-16 text-center text-[10px] text-slate-400">
          GGL International System © 2023
        </p>
      </div>
    </div>
  );
};

export default Login;
