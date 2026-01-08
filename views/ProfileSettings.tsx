
import React, { useState } from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  user: User;
}

const ProfileSettings: React.FC<Props> = ({ onNavigate, user }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar pb-10">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={() => onNavigate('DASHBOARD')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Profile Settings</h1>
        <button onClick={() => onNavigate('DASHBOARD')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Done</button>
      </header>

      <div className="px-6 py-8 flex flex-col items-center">
        <div className="relative mb-6">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" className="w-24 h-24 rounded-full border-4 border-slate-50 bg-orange-200" alt="" />
           <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
           </button>
        </div>
        <h2 className="text-xl font-black text-slate-800">{user.name}</h2>
        <div className="flex items-center gap-2 mt-1">
           <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-widest">Verified Member</span>
           <span className="text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase tracking-widest">Premium</span>
        </div>

        <section className="w-full mt-10 space-y-6">
           <div>
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2 mb-4">Personal Details</h3>
              <div className="space-y-4">
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="flex-1">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                       <p className="text-xs font-bold text-slate-800">jonathan.doe@example.com</p>
                    </div>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="flex-1">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Phone</p>
                       <p className="text-xs font-bold text-slate-800">{user.mobile}</p>
                    </div>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div className="flex-1">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Shipping Address</p>
                       <p className="text-xs font-bold text-slate-800 line-clamp-1">123 Market St, San Francisco, CA</p>
                    </div>
                 </div>
              </div>
           </div>

           <div>
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2 mb-4">Security Settings</h3>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 shadow-sm">
                 <button className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-all">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                       </div>
                       <span className="text-xs font-bold text-slate-700">Change Password</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><polyline points="9 18 15 12 9 6"></polyline></svg>
                 </button>
                 <div className="w-full p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                       </div>
                       <span className="text-xs font-bold text-slate-700">2FA Security</span>
                    </div>
                    <div className="w-10 h-5 bg-slate-200 rounded-full relative p-1 cursor-pointer">
                       <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                    </div>
                 </div>
              </div>
           </div>

           <div>
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2 mb-4">App Preferences</h3>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 shadow-sm">
                 <div className="w-full p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                       </div>
                       <span className="text-xs font-bold text-slate-700">Push Notifications</span>
                    </div>
                    <div 
                      onClick={() => setNotifications(!notifications)}
                      className={`w-10 h-5 rounded-full relative p-1 cursor-pointer transition-colors ${notifications ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                       <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${notifications ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                 </div>
                 <div className="w-full p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                       </div>
                       <span className="text-xs font-bold text-slate-700">Dark Mode</span>
                    </div>
                    <div 
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-10 h-5 rounded-full relative p-1 cursor-pointer transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                       <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <button 
          onClick={() => onNavigate('LOGIN')}
          className="w-full mt-12 py-4 text-red-500 font-black uppercase text-[10px] tracking-widest"
        >
          Delete Account Permanently
        </button>
        <p className="text-[8px] text-slate-300 font-bold uppercase tracking-widest mt-2">Member ID: GGL-USER-938210-JD</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[450px] mx-auto p-6 bg-white border-t border-slate-100 flex gap-4">
         {[
           { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>, id: 'home' },
           { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>, id: 'courses' },
           { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>, id: 'add', active: true },
           { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>, id: 'network' },
           { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>, id: 'profile' }
         ].map((item, i) => (
           <button 
            key={i} 
            className={`flex-1 flex flex-col items-center justify-center p-2 rounded-xl transition-all ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 -mt-8 h-14' : 'text-slate-300'}`}
           >
              {item.icon}
           </button>
         ))}
      </div>
    </div>
  );
};

export default ProfileSettings;
