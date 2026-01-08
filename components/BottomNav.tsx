
import React from 'react';
import { Screen } from '../types';

interface Props {
  active: string;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<Props> = ({ active, onNavigate }) => {
  const items = [
    { name: 'Home', screen: 'DASHBOARD' as Screen, icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "#2563eb" : "none"} stroke={active ? "#2563eb" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    )},
    { name: 'Courses', screen: 'COURSES' as Screen, icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "#2563eb" : "none"} stroke={active ? "#2563eb" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    )},
    { name: 'Network', screen: 'NETWORK' as Screen, icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "#2563eb" : "none"} stroke={active ? "#2563eb" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )},
    { name: 'Profile', screen: 'PROFILE_SETTINGS' as Screen, icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={active ? "#2563eb" : "none"} stroke={active ? "#2563eb" : "currentColor"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )}
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[450px] h-20 bg-white border-t border-slate-100 flex items-center justify-around px-2 z-30 shadow-2xl">
      {items.map((item) => {
        const isActive = active === item.name;
        return (
          <button 
            key={item.name} 
            onClick={() => onNavigate(item.screen)}
            className="flex flex-col items-center justify-center gap-1.5 px-4 outline-none active:scale-95 transition-transform"
          >
            <div className={`transition-all ${isActive ? 'scale-110' : 'text-slate-300'}`}>
               {item.icon(isActive)}
            </div>
            <span className={`text-[10px] font-bold tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-300'}`}>
              {item.name}
            </span>
            {isActive && <div className="w-1 h-1 rounded-full bg-blue-600 mt-0.5"></div>}
          </button>
        );
      })}

      <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
         <button 
          onClick={() => onNavigate('WALLET')}
          className="w-16 h-16 bg-blue-600 rounded-full border-[6px] border-[#f8fafc] flex items-center justify-center shadow-xl shadow-blue-200 active:scale-90 transition-all hover:bg-blue-500"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
         </button>
      </div>
    </div>
  );
};

export default BottomNav;
