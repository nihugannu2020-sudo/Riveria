import React from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';

export default function LLMChat() {
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
            LLM Chatbot
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
      <ScrapbookPanel title="LLM Chat" tapePosition="top" rotation={0} className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 custom-scrollbar">
          {/* Empty State Message */}
          <div className="flex flex-col items-center justify-center h-full text-indigo/50">
            <p className="font-handwriting text-3xl rotate-2">
              Awaiting initialization sequence...
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t-2 border-dashed border-indigo/20 pt-4 mt-4 shrink-0">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <RetroInput 
                placeholder="Inquire of the Mentat..."
                fullWidth
              />
            </div>
            <RetroButton variant="primary" icon="send">Transmit</RetroButton>
          </div>
        </div>
      </ScrapbookPanel>
    </div>
  );
}
