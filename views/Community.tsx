
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
}

const Community: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Community</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-8 flex flex-col items-center">
        <div className="w-full aspect-square rounded-[40px] bg-slate-100 mb-10 overflow-hidden relative shadow-2xl shadow-blue-50">
           <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Community" />
           <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-[1px]"></div>
        </div>

        <h2 className="text-3xl font-black text-slate-900 mb-4 text-center leading-tight">Don't Miss an Update!</h2>
        <p className="text-xs text-slate-400 text-center mb-10 px-6 font-medium">Join our official WhatsApp channel for the latest GGL updates and member rewards.</p>

        <button onClick={() => window.open('https://whatsapp.com', '_blank')} className="w-full py-5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-3xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
           Join WhatsApp Channel
        </button>
      </div>
    </div>
  );
};

export default Community;
