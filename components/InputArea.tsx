
import React, { useState, useRef, useCallback } from 'react';
import { Attachment } from '../types';

interface InputAreaProps {
  onSendMessage: (text: string, attachments: Attachment[]) => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [inputText, setInputText] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if ((!inputText.trim() && attachments.length === 0) || isLoading) return;
    onSendMessage(inputText, attachments);
    setInputText('');
    setAttachments([]);
    if (textAreaRef.current) textAreaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        const localUrl = URL.createObjectURL(file);
        setAttachments(prev => [...prev, {
          mimeType: file.type,
          data: base64,
          url: localUrl
        }]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => {
      const newAtts = [...prev];
      URL.revokeObjectURL(newAtts[index].url);
      newAtts.splice(index, 1);
      return newAtts;
    });
  };

  const adjustHeight = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 200)}px`;
    }
  }, []);

  return (
    <div className="p-4 md:p-6 bg-[#0b0d0e]">
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-[#1e1f20] rounded-3xl border border-[#333] shadow-2xl focus-within:border-purple-500/50 transition-all duration-300 overflow-hidden">
          
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-3 p-4 bg-[#2b2d30]/50 border-b border-[#333]">
              {attachments.map((att, i) => (
                <div key={i} className="relative group w-20 h-20 bg-[#1e1f20] rounded-xl overflow-hidden border border-[#444]">
                  <img src={att.url} className="w-full h-full object-cover" alt="Preview" />
                  <button 
                    onClick={() => removeAttachment(i)}
                    className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-end gap-2 p-3">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-[#8e9196] hover:text-white hover:bg-[#2b2d30] rounded-xl transition-colors shrink-0"
              title="Upload images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              multiple 
              accept="image/*" 
              className="hidden" 
            />

            <textarea
              ref={textAreaRef}
              rows={1}
              value={inputText}
              onChange={(e) => { setInputText(e.target.value); adjustHeight(); }}
              onKeyDown={handleKeyDown}
              placeholder="Ask Gemini anything..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-[#e3e3e3] text-[15px] py-3 resize-none max-h-[200px] overflow-y-auto custom-scrollbar"
            />

            <button 
              onClick={handleSend}
              disabled={(!inputText.trim() && attachments.length === 0) || isLoading}
              className={`
                p-3 rounded-xl transition-all shrink-0
                ${(!inputText.trim() && attachments.length === 0) || isLoading
                  ? 'text-[#444] cursor-not-allowed'
                  : 'text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20'
                }
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] text-[#8e9196]">
          Gemini can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default InputArea;
