
import React from 'react';
import { ChatSession } from '../types';

interface SidebarProps {
  sessions: ChatSession[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  sessions, 
  activeId, 
  onSelect, 
  onDelete, 
  onNew, 
  isOpen,
  setIsOpen 
}) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-72 bg-[#1e1f20] border-r border-[#333] flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
      `}>
        <div className="p-4">
          <button 
            onClick={onNew}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2b2d30] hover:bg-[#37393e] rounded-xl border border-[#444] text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-1">
          <div className="px-3 py-2 text-[11px] font-bold text-[#8e9196] uppercase tracking-wider">
            Recent Activity
          </div>
          {sessions.length === 0 ? (
            <div className="px-3 py-10 text-center text-sm text-[#8e9196]">
              No chats yet. Start a new conversation.
            </div>
          ) : (
            sessions.map((session) => (
              <div 
                key={session.id}
                className={`
                  group relative flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-all
                  ${activeId === session.id ? 'bg-[#37393e] text-white shadow-sm' : 'text-[#c4c7c5] hover:bg-[#2b2d30]'}
                `}
                onClick={() => {
                  onSelect(session.id);
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-70"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span className="truncate flex-1">{session.title}</span>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(session.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#444] rounded transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-[#333]">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#2b2d30] transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xs">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">User Profile</div>
              <div className="text-[10px] text-[#8e9196] truncate">Pro Subscriber</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8e9196]"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
