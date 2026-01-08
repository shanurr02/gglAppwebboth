
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  // Added missing onOpenProfile prop to resolve Type error in App.tsx
  onOpenProfile: () => void;
}

const SocialConnect: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const channels = [
    { name: 'GGL Official Website', platform: 'Official Domain', icon: '🌐' },
    { name: 'YouTube Channel', platform: 'Video Training', icon: '📹' },
    { name: 'Facebook Page', platform: 'Community Group', icon: '👥' },
    { name: 'Instagram', platform: '@ggl_official', icon: '📸' },
    { name: 'Twitter / X', platform: '@ggl_news', icon: '🐦' },
    { name: 'Telegram Channel', platform: 'Latest Updates', icon: '📢' },
    { name: 'Google Reviews', platform: 'Rate Us', icon: '⭐' },
    { name: 'Play Store App', platform: 'Mobile App', icon: '📱' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('DASHBOARD')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Connect with GGL</h1>
        {/* Added drawer trigger to avatar */}
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden cursor-pointer" onClick={onOpenProfile}>
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="" />
        </div>
      </header>

      <div className="px-6 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-black text-slate-900 mb-2">Stay Connected</h2>
        <p className="text-xs text-slate-400 font-medium mb-10 text-center px-10 leading-relaxed">
          Follow our official channels and share these links to grow your network.
        </p>

        <div className="w-full space-y-3">
           {channels.map((channel, i) => (
             <div key={i} className="bg-white p-4 rounded-2xl shadow-soft border border-slate-50 flex items-center gap-4 group cursor-pointer hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                   {channel.icon}
                </div>
                <div className="flex-1">
                   <h4 className="text-xs font-black text-slate-800">{channel.name}</h4>
                   <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest mt-0.5">{channel.platform}</p>
                </div>
                <button className="p-2 text-slate-200 group-hover:text-blue-500 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
             </div>
           ))}
        </div>
      </div>

      <div className="mt-auto p-8 border-t border-slate-100 flex flex-col items-center">
         <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mb-4">GGL Version 2.4.0</span>
         <div className="flex gap-6">
            <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Privacy Policy</button>
            <button className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Terms of Service</button>
         </div>
      </div>
    </div>
  );
};

export default SocialConnect;
