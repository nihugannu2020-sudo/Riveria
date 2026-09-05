import React, { useState, useRef, useEffect } from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';
import { sendMessage } from '../api/chat';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function LLMChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      // Send to River endpoint
      const res = await sendMessage(userMsg, 'river');
      setMessages(prev => [...prev, { role: 'assistant', content: res.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection to River core failed.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-rust mb-2">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            <span className="font-interface text-[10px] uppercase tracking-widest">General Intelligence Node</span>
          </div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-1">
            River
          </h1>
        </div>
        <div className="flex items-center gap-3 border border-indigo bg-sand px-3 py-2 retro-inset">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rust animate-pulse"></span>
            <span className="font-interface text-[9px] uppercase tracking-widest font-bold text-indigo">Live Link</span>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <ScrapbookPanel title="River Chat" tapePosition="top" rotation={0} className="flex-1 flex flex-col min-h-0">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 custom-scrollbar">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-indigo/50">
              <p className="font-handwriting text-3xl rotate-2">
                Awaiting initialization sequence...
              </p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 ${msg.role === 'user' ? 'bg-indigo text-sand retro-inset' : 'bg-sand retro-border border-indigo text-indigo'}`}>
                  <p className="font-body text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))
          )}
          {loading && (
             <div className="flex justify-start">
               <div className="max-w-[80%] p-4 bg-sand retro-border border-indigo text-indigo/60">
                 <p className="font-body text-sm animate-pulse">River is processing...</p>
               </div>
             </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t-2 border-dashed border-indigo/20 pt-4 mt-4 shrink-0">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <RetroInput 
                label=""
                placeholder="Inquire of River..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                fullWidth
              />
            </div>
            <RetroButton variant="primary" icon="send" onClick={handleSend} disabled={loading}>Transmit</RetroButton>
          </div>
        </div>
      </ScrapbookPanel>
    </div>
  );
}
