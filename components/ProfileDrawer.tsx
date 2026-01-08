
import React from 'react';
import { User, Screen } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onLogout: () => void;
  onNavigate: (screen: Screen) => void;
}

const ProfileDrawer: React.FC<Props> = ({ isOpen, onClose, user, onLogout, onNavigate }) => {
  const handleNavigate = (screen: Screen) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}
      >
        {/* Header */}
        <div className="p-8 pt-12 relative flex items-center gap-4 border-b border-slate-50">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div className="relative group cursor-pointer" onClick={() => handleNavigate('PROFILE_SETTINGS')}>
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" className="w-16 h-16 rounded-full border-4 border-slate-50 bg-orange-200" />
             <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
             <div className="absolute inset-0 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
             </div>
          </div>
          <div>
             <h2 className="text-xl font-black text-slate-800 leading-none">{user.name}</h2>
             <span className="text-xs font-bold text-slate-300 mt-1 block">Student & Entrepreneur</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
           <div className="mb-8">
              <h3 className="px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">My Business</h3>
              <div className="space-y-1">
                 <button 
                  onClick={() => handleNavigate('WALLET')}
                  className="w-full flex items-center gap-4 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold transition-all"
                 >
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                    </div>
                    Wallet
                 </button>
                 {[
                   { name: 'Referrals', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, badge: '8', screen: 'NETWORK' as Screen },
                   { name: 'Autoclub', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>, screen: user.isAutoclubMember ? 'AUTOCLUB_DASHBOARD' as Screen : 'AUTOCLUB_LANDING' as Screen },
                   { name: 'Withdrawal', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>, screen: user.withdrawalUnlocked ? 'WITHDRAWAL_FORM' as Screen : 'WITHDRAWAL_LOCKED' as Screen },
                   { name: 'Testimonials', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>, screen: 'TESTIMONIALS' as Screen }
                 ].map((item, i) => (
                    <button key={i} onClick={() => handleNavigate(item.screen)} className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold transition-all">
                       <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                          {item.icon}
                       </div>
                       <span className="flex-1 text-left">{item.name}</span>
                       {item.badge && <span className="w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">{item.badge}</span>}
                    </button>
                 ))}
              </div>
           </div>

           <div className="mb-8">
              <h3 className="px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Learning</h3>
              <div className="space-y-1">
                <button onClick={() => handleNavigate('COURSES')} className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold transition-all">
                   <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                   </div>
                   Courses
                </button>
                <button onClick={() => handleNavigate('RESOURCE_CENTER')} className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold transition-all">
                   <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                   </div>
                   Resources
                </button>
              </div>
           </div>

           <div>
              <h3 className="px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Support</h3>
              <div className="space-y-1">
                 {[
                   { name: 'Terms & Conditions', screen: 'TERMS_CONDITIONS' as Screen, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
                   { name: 'Official Documents', screen: 'OFFICIAL_DOCUMENTS' as Screen, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
                   { name: 'Help & FAQ', screen: 'HELP_SUPPORT' as Screen, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> },
                   { name: 'Social Connect', screen: 'SOCIAL_CONNECT' as Screen, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                   { name: 'Community', screen: 'COMMUNITY' as Screen, icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }
                 ].map((item, i) => (
                    <button key={i} onClick={() => handleNavigate(item.screen)} className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold transition-all">
                       <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                          {item.icon}
                       </div>
                       {item.name}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-50">
           <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Company Media</span>
              <div className="flex items-center gap-4 text-slate-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
           </div>

           <button 
            onClick={onLogout}
            className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-black flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
           >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Log Out
           </button>
           <span className="text-[9px] font-bold text-slate-300 block text-center mt-6 uppercase tracking-[0.2em]">App Version 2.4.0</span>
        </div>
      </div>
    </>
  );
};

export default ProfileDrawer;
