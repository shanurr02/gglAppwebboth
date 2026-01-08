
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  // Added missing onOpenProfile prop to fix App.tsx error
  onOpenProfile: () => void;
}

const ResourceCenter: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const latestVideos = [
    { title: 'Welcome to the System', dur: '4:20', thumb: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop' },
    { title: 'Direct Sales Script', dur: '8:45', thumb: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Added menu button for consistency and to use the onOpenProfile prop */}
          <button onClick={onOpenProfile} className="text-slate-600 p-1 active:scale-90 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden cursor-pointer" onClick={onOpenProfile}>
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="" />
          </div>
          <h2 className="text-sm font-black text-slate-800">GGL Resource</h2>
        </div>
        <button className="p-2 text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </header>

      <div className="px-6 py-6 space-y-8">
        <div className="flex gap-2 mb-2">
           <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-100">All Topics</button>
           <button className="px-5 py-2 bg-white text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">Guides</button>
        </div>

        <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-blue-900">
           <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="" />
           <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] p-8 flex flex-col justify-end">
              <span className="text-[10px] font-black uppercase text-blue-200 tracking-widest mb-2">Featured Guide</span>
              <h3 className="text-xl font-black text-white leading-tight mb-6">The Official GGL System Guide 2024</h3>
              <div className="flex items-center gap-4">
                 <button className="px-6 py-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Watch Now
                 </button>
                 <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                 </button>
              </div>
           </div>
        </div>

        <section>
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800">All Documents</h3>
              <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">View All</button>
           </div>
           <div className="space-y-3">
              {[
                { title: 'Compensation Plan', type: 'PDF', dur: '4.2 MB', icon: '💎' },
                { title: 'Autoclub Benefits', type: 'PDF', dur: '1.5 MB', icon: '🔥' },
                { title: 'Master Sales Script', type: 'DOCX', dur: '840 KB', icon: '📝' }
              ].map((doc, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-soft border border-slate-50 flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {doc.icon}
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-800">{doc.title}</h4>
                      <p className="text-[9px] text-slate-300 font-bold uppercase">{doc.type} • {doc.dur}</p>
                   </div>
                   <button className="text-blue-600 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                   </button>
                </div>
              ))}
           </div>
        </section>

        <section className="pb-10">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800">Latest Videos</h3>
              <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Library</button>
           </div>
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
              {latestVideos.map((vid, i) => (
                <div key={i} className="w-48 shrink-0 space-y-2">
                   <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative group">
                      <img src={vid.thumb} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                         <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                         </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 rounded text-[8px] font-black text-white">{vid.dur}</span>
                   </div>
                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight truncate">{vid.title}</h4>
                </div>
              ))}
           </div>
        </section>
      </div>

      <div className="fixed bottom-6 right-6">
         <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
         </button>
      </div>
    </div>
  );
};

export default ResourceCenter;
