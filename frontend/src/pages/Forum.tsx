import React, { useState } from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';

export default function Forum() {
  const [channels, setChannels] = useState(['# general', '# study-help', '# announcements']);
  const [activeChannel, setActiveChannel] = useState(0);
  const [editingChannelIndex, setEditingChannelIndex] = useState<number | null>(null);
  const [messages, setMessages] = useState<{author: string, content: string}[]>([]);
  const [input, setInput] = useState('');

  const handleNewChannel = () => {
    setChannels([...channels, `# new-channel-${channels.length + 1}`]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { author: "You", content: input }]);
    setInput('');
  };

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
          <ScrapbookPanel title="Channels" tapePosition="top-left" rotation={-2}>
            <div className="flex flex-col gap-1">
              {channels.map((chan, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  {editingChannelIndex === idx ? (
                    <input
                      autoFocus
                      type="text"
                      className="p-2 font-handwriting text-2xl bg-transparent border-b-2 border-rust focus:outline-none w-full"
                      value={chan}
                      onChange={(e) => {
                        const newChans = [...channels];
                        newChans[idx] = e.target.value;
                        setChannels(newChans);
                      }}
                      onBlur={() => setEditingChannelIndex(null)}
                      onKeyDown={(e) => e.key === 'Enter' && setEditingChannelIndex(null)}
                    />
                  ) : (
                    <div 
                      onClick={() => setActiveChannel(idx)} 
                      className={`p-2 font-handwriting text-2xl cursor-pointer flex-1 ${idx === activeChannel ? 'text-rust underline decoration-wavy rotate-[1deg]' : 'text-indigo hover:text-indigo/70'}`}
                    >
                      {chan}
                    </div>
                  )}
                  {editingChannelIndex !== idx && (
                    <button onClick={() => setEditingChannelIndex(idx)} className="opacity-0 group-hover:opacity-100 text-indigo hover:text-rust px-2 transition-opacity">
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-indigo/20">
               <RetroButton fullWidth icon="add" onClick={handleNewChannel}>New Channel</RetroButton>
            </div>
          </ScrapbookPanel>
        </div>

        {/* Right Side: Chat Feed */}
        <div className="lg:w-9/12 flex flex-col min-h-0 h-full">
          <ScrapbookPanel title={channels[activeChannel]} tapePosition="top-right" rotation={1} className="flex-1 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 custom-scrollbar">
              <div className="flex flex-col items-center text-indigo/50 mb-4">
                <p className="font-handwriting text-2xl rotate-[-2deg]">Beginning of {channels[activeChannel]}</p>
              </div>
              {messages.map((msg, i) => (
                <div key={i} className="flex flex-col items-end">
                   <div className="text-[10px] font-interface uppercase tracking-widest text-indigo/50 mb-1">{msg.author}</div>
                   <div className="bg-indigo text-sand p-3 retro-inset max-w-[80%] font-body">
                     {msg.content}
                   </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-indigo/20 pt-4 mt-4">
               <div className="flex items-end gap-3">
                 <div className="flex-1">
                   <RetroInput 
                     label=""
                     placeholder={`Message ${channels[activeChannel]}...`}
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                     fullWidth
                   />
                 </div>
                 <RetroButton variant="primary" icon="send" onClick={handleSend}>Send</RetroButton>
               </div>
            </div>
          </ScrapbookPanel>
        </div>
      </div>
    </div>
  );
}
