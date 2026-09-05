import React from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
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
          <ScrapbookPanel title="Knowledge Context" tapePosition="top-left" rotation={-1}>
            <div className="flex flex-col gap-4">
              <div className="border-2 border-dashed border-indigo/40 bg-sand p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sand/80 transition-colors h-48 scrapbook-shadow">
                <span className="material-symbols-outlined text-[32px] text-indigo/60 mb-2">attach_file</span>
                <span className="font-marker text-xl text-indigo font-bold">Pin a Document</span>
                <span className="font-handwriting text-xl text-indigo/60 mt-2">PDF, TXT, MD</span>
              </div>
              
              <div className="bg-parchment p-4 scrapbook-border">
                <h3 className="font-marker text-lg text-indigo font-bold mb-3 border-b-2 border-dashed border-indigo/20 pb-2">Pinned Files</h3>
                <div className="text-center font-handwriting text-2xl text-indigo/50 py-4 rotate-[1deg]">
                  Nothing pinned yet!
                </div>
              </div>
            </div>
          </ScrapbookPanel>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="lg:w-7/12 flex flex-col min-h-0 h-full">
          <ScrapbookPanel title="Chat" tapePosition="top-right" rotation={1} className="flex-1 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 custom-scrollbar">
              <div className="flex flex-col items-center justify-center h-full text-indigo/50">
                <p className="font-handwriting text-3xl rotate-[-2deg] text-center max-w-md">
                  Pin a document first, then we can talk about it!
                </p>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-indigo/20 pt-4 mt-4">
               <div className="flex items-end gap-3">
                 <div className="flex-1">
                   <RetroInput 
                     placeholder="Ask something..."
                     fullWidth
                   />
                 </div>
                 <RetroButton variant="primary" icon="send">Send</RetroButton>
               </div>
            </div>
          </ScrapbookPanel>
        </div>
      </div>
    </div>
  );
}
