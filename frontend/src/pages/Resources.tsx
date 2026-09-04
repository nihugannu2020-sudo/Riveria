import React from 'react';
import RetroWindow from '../components/RetroWindow';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';

export default function Resources() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4">
        <div>
          <div className="font-interface text-[10px] uppercase tracking-widest text-rust mb-2">Centralized Repository</div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-2">
            Resources
          </h1>
          <p className="font-interface text-[11px] uppercase tracking-widest text-indigo/70">
            Notes, lectures, and question banks.
          </p>
        </div>
        <RetroButton variant="primary" icon="upload">Upload File</RetroButton>
      </div>

      <RetroWindow title="ARCHIVE.QUERY" icon="search">
        <div className="flex flex-col gap-4">
          <RetroInput 
            label="Search Pattern" 
            placeholder="Search all resources..." 
            fullWidth 
          />
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="font-interface text-[9px] uppercase tracking-widest text-indigo mr-2">Categories:</span>
            <button className="border border-rust bg-rust text-parchment px-3 py-1 font-interface text-[10px] uppercase tracking-widest font-bold retro-inset">
              All
            </button>
            <button className="border border-indigo bg-parchment text-indigo px-3 py-1 font-interface text-[10px] uppercase tracking-widest hover:bg-sand transition-colors">
              Notes
            </button>
            <button className="border border-indigo bg-parchment text-indigo px-3 py-1 font-interface text-[10px] uppercase tracking-widest hover:bg-sand transition-colors">
              Lectures
            </button>
            <button className="border border-indigo bg-parchment text-indigo px-3 py-1 font-interface text-[10px] uppercase tracking-widest hover:bg-sand transition-colors">
              Question Banks
            </button>
          </div>
        </div>
      </RetroWindow>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full py-12 flex flex-col items-center justify-center text-indigo/50">
          <span className="material-symbols-outlined text-[48px] mb-2">folder_open</span>
          <span className="font-interface text-[11px] uppercase tracking-widest">Repository is empty.</span>
        </div>
      </div>
    </div>
  );
}
