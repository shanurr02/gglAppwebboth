
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
}

const SupportChat: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Support</h1>
        <div className="w-10"></div>
      </header>

      <div className="p-4 bg-white border-b border-slate-100">
         <div className="bg-slate-50 p-4 rounded-3xl flex items-center justify-between">
            <div>
               <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Priority Support</h3>
               <p className="text-[10px] text-slate-400 font-medium">9 AM - 6 PM EST</p>
            </div>
            <button onClick={() => alert('Dialing +1-800-GGL-HELP...')} className="px-6 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2 active:scale-95 transition-all">
               Call Now
            </button>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
         <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white font-black text-[10px]">G</div>
            <div className="max-w-[80%] bg-white p-4 rounded-2xl rounded-tl-none shadow-soft border border-slate-50">
               <p className="text-xs text-slate-600 leading-relaxed font-medium">Welcome! How can we help you today?</p>
            </div>
         </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
         <div className="relative">
            <input type="text" placeholder="Type your message..." className="w-full h-14 pl-6 pr-14 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-medium focus:outline-none focus:border-blue-500" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white active:scale-90 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
         </div>
      </div>
    </div>
  );
};

export default SupportChat;
