
import React, { useState } from 'react';
import { Screen, User, NetworkMember } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
  user: User;
}

const Network: React.FC<Props> = ({ onNavigate, onOpenProfile, user }) => {
  const [expandedId, setExpandedId] = useState<string | null>('sarah-1');

  const members: NetworkMember[] = [
    {
      id: 'sarah-1',
      name: 'Sarah Miller',
      level: 1,
      directs: 3,
      mobile: '+1 555-012-3456',
      joinedDate: 'Oct 24, 2023',
      status: 'Active',
      children: [
        { id: 'david-1', name: 'David Kim', level: 2, directs: 5, mobile: '', joinedDate: '', status: 'Active' },
        { id: 'mike-1', name: 'Mike Ross', level: 2, directs: 0, mobile: '', joinedDate: '', status: 'Inactive' },
      ]
    },
    { id: 'jessica-1', name: 'Jessica Wang', level: 1, directs: 8, mobile: '', joinedDate: '', status: 'Active' },
    { id: 'robert-1', name: 'Robert Fox', level: 1, directs: 0, mobile: '', joinedDate: '', status: 'Inactive' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Network</h1>
        <button className="p-2 -mr-2 text-slate-600 active:scale-90 transition-transform" onClick={() => onNavigate('DASHBOARD')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </button>
      </header>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
           <div className="bg-white p-4 rounded-3xl shadow-soft border border-slate-50 text-center">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600 font-black text-xs">145</div>
              <div className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">Total</div>
           </div>
           <div className="bg-white p-4 rounded-3xl shadow-soft border border-slate-50 text-center text-blue-600 font-black text-xs">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">12</div>
              <div className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">Directs</div>
           </div>
           <div className="bg-white p-4 rounded-3xl shadow-soft border border-slate-50 text-center text-green-600 font-black text-xs">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">$5k</div>
              <div className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">Earned</div>
           </div>
        </div>

        <section className="space-y-4">
           {members.map((member) => (
              <div key={member.id} className="bg-white rounded-[28px] border border-slate-50 shadow-soft overflow-hidden">
                 <div className="p-4 flex items-center gap-4 cursor-pointer" onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.id}`} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100" alt="" />
                    <div className="flex-1">
                       <h4 className="font-bold text-slate-800 text-sm">{member.name}</h4>
                       <p className="text-[10px] text-slate-400">Level {member.level} • {member.directs} Directs</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-slate-300 transition-transform ${expandedId === member.id ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </div>
              </div>
           ))}
        </section>
      </div>
    </div>
  );
};

export default Network;
