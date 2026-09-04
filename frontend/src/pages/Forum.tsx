import React from 'react';
import RetroWindow from '../components/RetroWindow';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';

export default function Forum() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4 mb-6 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-rust mb-2">
            <span className="material-symbols-outlined text-[14px]">groups</span>
            <span className="font-interface text-[10px] uppercase tracking-widest">Peer Communications Node</span>
          </div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-1">
            Chat Forum
          </h1>
        </div>
        <div className="flex items-center gap-3 border border-indigo bg-sand px-3 py-2 retro-inset">
          <span className="font-interface text-[9px] uppercase tracking-widest text-indigo font-bold">12 Peers Online</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Left Side: Channels/Groups */}
        <div className="lg:w-3/12 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          <RetroWindow title="CHANNELS" icon="list">
            <div className="flex flex-col gap-1">
              {['# general', '# study-help', '# announcements'].map((chan, idx) => (
                <div key={chan} className={`p-2 font-interface text-[10px] uppercase tracking-widest cursor-pointer ${idx === 0 ? 'bg-rust/10 border-l-2 border-rust text-rust font-bold' : 'text-indigo hover:bg-sand'}`}>
                  {chan}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-indigo/20">
               <RetroButton fullWidth icon="add">New Channel</RetroButton>
            </div>
          </RetroWindow>
        </div>

        {/* Right Side: Chat Feed */}
        <div className="lg:w-9/12 flex flex-col min-h-0 h-full">
          <RetroWindow title="FEED" icon="chat" className="flex-1 flex flex-col h-full" contentClassName="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-6 custom-scrollbar justify-end pb-12">
              <div className="flex flex-col items-center text-indigo/50">
                <span className="font-interface text-[11px] uppercase tracking-widest">Beginning of #general</span>
              </div>
            </div>

            <div className="border-t border-indigo p-4 bg-parchment">
               <div className="flex items-end gap-3">
                 <div className="flex-1">
                   <RetroInput 
                     placeholder="Message #general..."
                     fullWidth
                   />
                 </div>
                 <RetroButton variant="primary" icon="send">Send</RetroButton>
               </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </div>
  );
}
