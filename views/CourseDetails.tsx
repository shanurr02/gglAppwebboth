
import React, { useState } from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const CourseDetails: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Curriculum' | 'Resources'>('Overview');

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto custom-scrollbar">
      {/* Sticky Header with Video */}
      <div className="sticky top-0 z-30 bg-white">
        <div className="h-14 flex items-center justify-between px-6 bg-white border-b border-slate-50">
          <button onClick={() => onNavigate('COURSES')} className="p-2 -ml-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <h1 className="font-bold text-slate-800 text-sm">Course Content</h1>
          <button className="p-2 -mr-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </button>
        </div>

        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
          <button className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 active:scale-95 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
          
          {/* Mock Video Controls */}
          <div className="absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-[10px] font-bold text-white/80">
             <span>3:12 / 14:45</span>
             <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="3"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
             </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold text-slate-800 leading-snug">1.2 Understanding the GGL Income Model</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[9px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest">Module 1</span>
              <span className="text-[9px] font-bold text-slate-400">• Video Lesson</span>
            </div>
          </div>
          <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>

        <div className="flex items-center gap-4 py-4 mb-6 border-b border-slate-50">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Instructor" className="w-10 h-10 rounded-full bg-slate-100" alt="" />
           <div className="flex-1">
              <h4 className="font-bold text-slate-800 text-sm">John Doe</h4>
              <p className="text-[10px] text-slate-400 font-medium">Senior Instructor</p>
           </div>
           <button className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg uppercase tracking-widest">Follow</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-slate-50 mb-6">
           {['Overview', 'Curriculum', 'Resources'].map((tab) => (
             <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-3 text-xs font-bold transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-slate-400'}`}
             >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>}
             </button>
           ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-800">About this lesson</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              In this comprehensive session, we break down the fundamental structure of the Global Growth Logic (GGL) income distribution system. You'll learn how the multi-level marketing tiers interact with the auto-club bonuses, ensuring a sustainable revenue stream.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
               <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-800">Course Progress</span>
                  <span className="text-[10px] font-black text-blue-600">35% Complete</span>
               </div>
               <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '35%' }}></div>
               </div>
            </div>

            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Up Next in Module 1</h3>
              <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                    <div className="flex-1">
                       <h5 className="text-[11px] font-bold text-slate-800">1.3 Tier Qualification Rules</h5>
                       <p className="text-[9px] text-slate-400 mt-0.5">8 min • Video</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 p-3 rounded-2xl border border-slate-50 bg-slate-50/50">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <div className="flex-1">
                       <h5 className="text-[11px] font-bold text-slate-300">1.4 Autoclub Bonus Calculation</h5>
                       <p className="text-[9px] text-slate-300 mt-0.5">12 min • Video</p>
                    </div>
                 </div>
              </div>
            </section>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 p-6 bg-white border-t border-slate-50 flex gap-3">
        <button className="p-4 bg-slate-50 text-slate-400 rounded-xl border border-slate-100">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className="flex-1 py-4 bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-[0.98] transition-all">
          Next Lesson
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
      
      <div className="p-4 text-center pb-8 bg-white">
         <button className="text-[10px] font-bold text-blue-600 flex items-center gap-2 mx-auto uppercase tracking-widest">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 12 12 8"></polyline></svg>
            Mark as Complete
         </button>
      </div>
    </div>
  );
};

export default CourseDetails;
