
import React from 'react';
import { Screen } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  // Added missing onOpenProfile prop to fix App.tsx error
  onOpenProfile: () => void;
}

const WithdrawalHistory: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const history = [
    { id: 'T99281', amount: 950.00, gross: 1000.00, fee: 50.00, date: 'October 12, 2023', status: 'Success' },
    { id: 'T81921', amount: 475.20, gross: 500.00, fee: 24.80, date: 'October 08, 2023', status: 'Pending' },
    { id: 'T77210', amount: 150.00, gross: 180.00, fee: 30.00, date: 'Sept 15, 2023', status: 'Failed', reason: 'Invalid Bank Details' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-y-auto custom-scrollbar">
      <header className="h-14 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20">
        <button onClick={() => onNavigate('WITHDRAWAL_FORM')} className="p-2 -ml-2 text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-sm">Withdrawal History</h1>
        {/* Updated help button to open profile drawer as per onOpenProfile prop */}
        <button onClick={onOpenProfile} className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Help</button>
      </header>

      <div className="px-6 py-6 space-y-8">
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-5 rounded-[28px] shadow-soft border border-slate-50">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="text-lg font-black text-slate-800">₹12,450.00</div>
              <div className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">Total Success</div>
           </div>
           <div className="bg-white p-5 rounded-[28px] shadow-soft border border-slate-50">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="text-lg font-black text-slate-800">₹500.00</div>
              <div className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">Pending</div>
           </div>
        </div>

        <section>
           <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar no-scrollbar">
              {['All', 'Pending', 'Success', 'Failed'].map((filter, i) => (
                 <button 
                  key={i}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all
                    ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-slate-400 border border-slate-100 shadow-sm'}
                  `}
                 >
                    {filter}
                 </button>
              ))}
           </div>

           <div className="mt-4 space-y-4">
              <h3 className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">October 2023</h3>
              
              {history.map((tx) => (
                 <div key={tx.id} className="bg-white rounded-[28px] shadow-soft border border-slate-50 p-5">
                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-50">
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                          ${tx.status === 'Success' ? 'bg-green-50' : tx.status === 'Pending' ? 'bg-orange-50' : 'bg-red-50'}
                       `}>
                          {tx.status === 'Success' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                          {tx.status === 'Pending' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                          {tx.status === 'Failed' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>}
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-center mb-0.5">
                             <h4 className="text-sm font-black text-slate-800">₹{tx.amount.toLocaleString()} <span className={`text-[10px] ml-1 font-bold ${tx.status === 'Success' ? 'text-green-500' : tx.status === 'Pending' ? 'text-orange-500' : 'text-red-500'}`}>{tx.status}</span></h4>
                             <span className="text-[9px] font-bold text-slate-300">{tx.date}</span>
                          </div>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">ID: {tx.id} • {tx.id === 'T77210' ? 'Bank Reject' : 'Withdrawal'}</p>
                       </div>
                    </div>

                    <div className="space-y-3">
                       <div className="flex justify-between items-center text-[10px] font-medium">
                          <span className="text-slate-400">Requested Amount</span>
                          <span className="text-slate-800 font-bold">₹{tx.gross.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between items-center text-[10px] font-medium">
                          <span className="text-slate-400">Service Charge</span>
                          <span className="text-red-400 font-bold">- ₹{tx.fee.toFixed(2)}</span>
                       </div>
                       {tx.reason && (
                         <div className="flex justify-between items-center text-[10px] font-medium">
                            <span className="text-slate-400">Reason</span>
                            <span className="text-red-500 font-bold">{tx.reason}</span>
                         </div>
                       )}
                       <div className="pt-3 border-t border-slate-50 flex justify-between items-center">
                          <span className="text-[11px] font-black text-slate-800">Net Receivable</span>
                          <span className="text-sm font-black text-blue-600">₹{tx.amount.toFixed(2)}</span>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[450px] mx-auto p-6 bg-white border-t border-slate-50 z-30">
         <button 
          onClick={() => onNavigate('WITHDRAWAL_FORM')}
          className="w-full py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-3"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            Request Withdrawal
         </button>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
