
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  // Added missing onOpenProfile prop to fix App.tsx error
  onOpenProfile: () => void;
}

const Testimonials: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Member Stories</h1>
        {/* Added menu button for consistency and to use the onOpenProfile prop */}
        <button onClick={onOpenProfile} className="text-slate-400 p-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
      </header>

      <div className="px-6 py-8">
        <h2 className="text-2xl font-black text-slate-900 mb-2">What Our Members Say</h2>
        <div className="bg-white p-8 rounded-[40px] shadow-soft border border-slate-50 flex items-center justify-between gap-6 mt-6">
           <div className="text-center">
              <h3 className="text-5xl font-black text-slate-900 leading-none mb-2">4.9</h3>
              <p className="text-[9px] font-black text-slate-300 uppercase">15.2k reviews</p>
           </div>
           <div className="flex-1 space-y-2">
              {[80, 15, 3, 1, 1].map((pct, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 w-2">{5-i}</span>
                    <div className="flex-1 h-1 bg-slate-50 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }}></div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
