import React from 'react';
import RetroWindow from '../components/RetroWindow';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';

export default function RAGChat() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-rust mb-2">
            <span className="material-symbols-outlined text-[14px]">plagiarism</span>
            <span className="font-interface text-[10px] uppercase tracking-widest">Vector Retrieval Node</span>
          </div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-1">
            RAG Chatbot
          </h1>
        </div>
        <div className="flex items-center gap-3 border border-indigo bg-sand px-3 py-2 retro-inset">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rust animate-pulse"></span>
            <span className="font-interface text-[9px] uppercase tracking-widest font-bold text-indigo">Vector Space</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Left Side: Context / Document Upload */}
        <div className="lg:w-5/12 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          <RetroWindow title="CONTEXT.FOLIO" icon="auto_stories">
            <div className="flex flex-col gap-4">
              <div className="border-2 border-dashed border-indigo/40 bg-sand p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sand/80 transition-colors h-48">
                <span className="material-symbols-outlined text-[32px] text-indigo/60 mb-2">upload_file</span>
                <span className="font-interface text-[11px] uppercase tracking-widest text-indigo font-bold">Upload Knowledge Context</span>
                <span className="font-interface text-[9px] uppercase tracking-widest text-indigo/60 mt-2">PDF, TXT, MD supported</span>
              </div>
              
              <div className="bg-parchment border border-indigo p-4">
                <h3 className="font-interface text-[10px] uppercase tracking-widest text-indigo font-bold mb-3 border-b border-indigo/20 pb-2">Active Documents</h3>
                <div className="text-center font-interface text-[9px] uppercase tracking-widest text-indigo/50 py-4">
                  No documents indexed.
                </div>
              </div>
            </div>
          </RetroWindow>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="lg:w-7/12 flex flex-col min-h-0 h-full">
          <RetroWindow title="MENTAT.COMM" icon="forum" className="flex-1 flex flex-col h-full" contentClassName="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 custom-scrollbar">
              <div className="flex flex-col items-center justify-center h-full text-indigo/50">
                <span className="material-symbols-outlined text-[48px] mb-4">text_snippet</span>
                <p className="font-interface text-[11px] uppercase tracking-widest text-center max-w-md">
                  Upload a document to establish semantic vector context before querying.
                </p>
              </div>
            </div>

            <div className="border-t border-indigo p-4 bg-parchment">
               <div className="flex items-end gap-3">
                 <div className="flex-1">
                   <RetroInput 
                     placeholder="Query the active documents..."
                     fullWidth
                   />
                 </div>
                 <RetroButton variant="primary" icon="send">Transmit</RetroButton>
               </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </div>
  );
}
