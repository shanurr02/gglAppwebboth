
import React from 'react';
import { Screen, User } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
  user: User;
}

const Dashboard: React.FC<Props> = ({ onNavigate, onOpenProfile, user }) => {
  const handleAutoclubClick = () => {
    if (user.isAutoclubMember) {
      onNavigate('AUTOCLUB_DASHBOARD');
    } else {
      onNavigate('AUTOCLUB_LANDING');
    }
  };

  const copyRefLink = () => {
    const link = `ggl.com/ref/${user.referralCode.toLowerCase()}`;
    navigator.clipboard.writeText(link);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="text-slate-600 p-1 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <div className="flex items-center gap-2" onClick={() => onNavigate('DASHBOARD')}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white font-black text-lg">G</span>
          </div>
          <span className="font-black text-xl text-blue-800 tracking-tight">GGL</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 cursor-pointer active:scale-90 transition-transform" onClick={onOpenProfile}>
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" className="w-full h-full object-cover bg-orange-200" />
        </div>
      </header>

      <div className="px-6 py-6 space-y-6">
        <section>
          <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Invite Friends</h3>
          <div className="flex gap-2">
            <div className="flex-1 h-12 flex items-center px-4 bg-white border border-slate-100 rounded-xl shadow-sm text-xs font-medium text-slate-500 overflow-hidden truncate">
              ggl.com/ref/{user.referralCode.toLowerCase()}
            </div>
            <button 
              onClick={copyRefLink}
              className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl shadow-lg shadow-blue-200 active:scale-95 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            </button>
          </div>
        </section>

        <div className="blue-gradient p-5 rounded-2xl flex items-center justify-between text-white shadow-lg shadow-blue-200 cursor-pointer active:scale-[0.98] transition-all" onClick={() => onNavigate('COMMUNITY')}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest">Announcement</span>
                <span className="text-[8px] bg-blue-400 px-1.5 py-0.5 rounded-full font-bold">New</span>
              </div>
              <p className="text-sm font-semibold">Join GGL Official Channel</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="blue-gradient p-5 rounded-3xl text-white shadow-lg shadow-blue-200 cursor-pointer active:scale-95 transition-all" onClick={() => onNavigate('WALLET')}>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-1 flex items-center justify-between">
              Total Balance
              <span className="text-[8px] bg-white/30 px-1.5 py-0.5 rounded-full font-black">NEW</span>
            </div>
            <div className="text-2xl font-black">₹{user.balance.toLocaleString()}</div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-soft cursor-pointer active:scale-95 transition-all" onClick={handleAutoclubClick}>
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
              Auto Club
              <span className={`text-[8px] font-black ${user.isAutoclubMember ? 'text-green-500' : 'text-slate-300'} uppercase`}>
                {user.isAutoclubMember ? 'Active' : 'Locked'}
              </span>
            </div>
            <div className="text-2xl font-black text-slate-800 leading-none">
              {user.isAutoclubMember ? `₹${user.autoclubBalance.toLocaleString()}` : "Locked"}
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Quick Access</h3>
            <button className="text-xs font-bold text-blue-600 active:scale-95 transition-all" onClick={() => onNavigate('RESOURCE_CENTER')}>View All</button>
          </div>
          <div className="space-y-4">
             <div className="bg-white p-3 rounded-2xl shadow-soft border border-slate-50 flex gap-4 overflow-hidden cursor-pointer active:scale-[0.98] transition-all" onClick={() => onNavigate('OFFICIAL_DOCUMENTS')}>
                <div className="w-24 aspect-video bg-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#2563eb" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 py-1">
                  <span className="text-[8px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest">Legal</span>
                  <h4 className="font-bold text-slate-800 text-sm mt-1">Official Guides</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">System documentation.</p>
                </div>
             </div>

             <div className="bg-white p-3 rounded-2xl shadow-soft border border-slate-50 flex gap-4 overflow-hidden cursor-pointer active:scale-[0.98] transition-all" onClick={() => onNavigate('TESTIMONIALS')}>
                <div className="w-24 aspect-video bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 py-1">
                  <span className="text-[8px] font-black uppercase text-purple-600 bg-purple-50 px-2 py-0.5 rounded tracking-widest">Member</span>
                  <h4 className="font-bold text-slate-800 text-sm mt-1">Success Stories</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Global transformations.</p>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
