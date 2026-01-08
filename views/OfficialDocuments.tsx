
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
}

const OfficialDocuments: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const documents = [
    { title: 'Terms and Conditions', size: '240kb', type: 'PDF', date: 'Oct 12, 2023' },
    { title: 'Global Sales Presentation', size: '1.2mb', type: 'PPT', date: 'Nov 05, 2023' },
    { title: 'Autoclub Membership Info', size: '450kb', type: 'PDF', date: 'Oct 28, 2023' },
    { title: 'Income Disclosure Statement', size: '180kb', type: 'PDF', date: 'Aug 22, 2023' },
    { title: 'Privacy Policy', size: '120kb', type: 'PDF', date: 'Jan 10, 2023' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm uppercase tracking-widest">GGL Resources</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-6 py-6 space-y-8">
        <div className="blue-gradient rounded-[32px] p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
           <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <div>
                 <span className="text-[9px] font-black uppercase text-blue-200 tracking-widest">Primary Guide</span>
                 <h2 className="text-sm font-black leading-tight">GGL Official Guide (2024)</h2>
                 <p className="text-[9px] opacity-60">Version 4.5 • 8.2 MB</p>
              </div>
           </div>
           <button onClick={() => alert('Starting Download...')} className="w-full py-3 bg-white text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download PDF Guide
           </button>
        </div>

        <section>
           <h3 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">All Documents</h3>
           <div className="space-y-3">
              {documents.map((doc, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-soft border border-slate-50 flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 truncate">{doc.title}</h4>
                      <p className="text-[9px] text-slate-300 font-bold uppercase">{doc.type} • {doc.size}</p>
                   </div>
                   <button onClick={() => alert(`Downloading ${doc.title}...`)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                   </button>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default OfficialDocuments;
