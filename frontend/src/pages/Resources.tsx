import React from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
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

      <ScrapbookPanel title="Resource Archive" tapePosition="top" rotation={0}>
        <div className="flex flex-col gap-4">
          <RetroInput 
            label="Search Pattern" 
            placeholder="Search all resources..." 
            fullWidth 
          />
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="font-marker text-lg text-indigo mr-2">Categories:</span>
            <button className="border-b-2 border-rust text-rust px-3 py-1 font-handwriting text-2xl font-bold">
              All
            </button>
            <button className="text-indigo/60 px-3 py-1 font-handwriting text-2xl hover:text-indigo transition-colors">
              Notes
            </button>
            <button className="text-indigo/60 px-3 py-1 font-handwriting text-2xl hover:text-indigo transition-colors">
              Lectures
            </button>
            <button className="text-indigo/60 px-3 py-1 font-handwriting text-2xl hover:text-indigo transition-colors">
              Question Banks
            </button>
          </div>
        </div>
      </ScrapbookPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-full py-12 flex flex-col items-center justify-center text-indigo/50">
          <p className="font-handwriting text-3xl rotate-2">Repository is empty.</p>
        </div>
      </div>
    </div>
  );
}
