
import React, { useRef, useEffect } from 'react';
import { Message, Role } from '../types';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-6 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 p-6 rounded-3xl border border-[#333]">
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M3 5h4"></path><path d="M21 17v4"></path><path d="M19 19h4"></path></svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Hello! I'm Gemini.</h2>
        <p className="text-[#8e9196] max-w-md text-lg leading-relaxed">
          I'm your advanced AI companion. I can help you with complex coding, creative writing, image analysis, or just a friendly chat.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
          {["Help me write a Python script", "Analyze this image for me", "Explain quantum physics like I'm five", "Create a travel itinerary for Japan"].map((item, i) => (
            <button 
              key={i}
              className="px-4 py-3 bg-[#1e1f20] hover:bg-[#2b2d30] border border-[#333] rounded-xl text-sm text-left transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth"
    >
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-8 space-y-8">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex flex-col ${message.role === Role.USER ? 'items-end' : 'items-start'}`}
          >
            <div className={`flex gap-4 max-w-[90%] ${message.role === Role.USER ? 'flex-row-reverse' : ''}`}>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs
                ${message.role === Role.USER 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gradient-to-tr from-purple-500 to-blue-500 text-white'
                }`}
              >
                {message.role === Role.USER ? 'U' : 'G'}
              </div>
              
              <div className={`space-y-4 ${message.role === Role.USER ? 'text-right' : ''}`}>
                {message.attachments && message.attachments.length > 0 && (
                  <div className={`flex flex-wrap gap-2 ${message.role === Role.USER ? 'justify-end' : 'justify-start'}`}>
                    {message.attachments.map((att, i) => (
                      <div key={i} className="relative group rounded-xl overflow-hidden border border-[#444] shadow-lg">
                        <img src={att.url} alt="Uploaded content" className="max-w-[300px] max-h-[300px] object-contain bg-black/20" />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`
                  px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed whitespace-pre-wrap
                  ${message.role === Role.USER 
                    ? 'bg-[#2b2d30] text-white border border-[#444]' 
                    : 'bg-transparent text-[#e3e3e3]'
                  }
                `}>
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4 items-start">
            <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xs animate-pulse">
              G
            </div>
            <div className="flex items-center gap-1.5 px-5 py-3.5">
              <div className="w-1.5 h-1.5 bg-[#8e9196] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-[#8e9196] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-[#8e9196] rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
