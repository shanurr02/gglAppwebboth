
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNext: (screen: Screen) => void;
}

const Splash: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="flex-1 flex flex-col px-6 py-12 items-center">
      <div className="w-full flex justify-between items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <span className="text-xl">🇺🇸</span>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          EN
        </button>
      </div>

      <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden mb-12 shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1611974717483-5828ff797374?q=80&w=1000&auto=format&fit=crop" 
          alt="Growth" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mb-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 leading-tight px-4">
          Welcome to Goearns Global Learning pvt ltd.
        </h1>
        <p className="text-slate-500 text-base leading-relaxed px-8">
          The international platform for education and income growth. Learn. Earn. Grow together.
        </p>
      </div>

      <div className="w-full space-y-4 mt-12">
        <button 
          onClick={() => onNext('REGISTER')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
        >
          Register
        </button>
        <button 
          onClick={() => onNext('LOGIN')}
          className="w-full py-4 bg-white text-blue-600 border border-slate-200 rounded-xl font-semibold active:scale-[0.98] transition-all"
        >
          Login
        </button>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        By continuing, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default Splash;
