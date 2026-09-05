import React, { useState } from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import StickyNote from '../components/StickyNote';
import RetroButton from '../components/RetroButton';

export default function Planner() {
  const [activeDay, setActiveDay] = useState(0);
  const [blocks, setBlocks] = useState<{title: string, time: string}[]>([]);
  const [editingBlockIndex, setEditingBlockIndex] = useState<number | null>(null);

  const handleNewBlock = () => {
    setBlocks([...blocks, { title: "New Study Block", time: "14:00 - 15:00" }]);
  };

  const handleGeneratePlan = () => {
    setBlocks([
      { title: "Review Thermodynamics", time: "09:00 - 10:30" },
      { title: "Practice Calculus", time: "11:00 - 12:30" },
      { title: "History Essay Draft", time: "14:00 - 16:00" },
    ]);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4">
        <div>
          <h1 className="font-marker text-5xl text-indigo mb-2 rotate-[-1deg]">
            Study Planner
          </h1>
          <p className="font-handwriting text-2xl text-indigo/70 rotate-[1deg]">
            "Plan the work, work the plan."
          </p>
        </div>
        <div className="flex gap-2">
          <RetroButton icon="add" onClick={handleNewBlock}>New Block</RetroButton>
          <RetroButton variant="primary" icon="auto_fix_high" onClick={handleGeneratePlan}>Generate Plan</RetroButton>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mt-4">
        <div className="xl:col-span-7 flex flex-col gap-6">
          <ScrapbookPanel title="My Schedule" tapePosition="top" rotation={-1}>
            <div className="flex flex-col gap-6 p-4">
              <div className="flex justify-between items-end border-b-2 border-indigo/20 pb-4">
                 <div>
                    <div className="font-handwriting text-2xl text-indigo/70 mb-1">Week 1</div>
                 </div>
                 <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <button key={day} onClick={() => setActiveDay(i)} className={`font-marker text-lg px-3 py-1 rounded-sm transition-transform hover:scale-110 ${i === activeDay ? 'bg-rust/20 text-rust underline decoration-wavy' : 'text-indigo'}`}>
                          {day}
                        </button>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col gap-4 py-4 min-h-[200px]">
                {blocks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-indigo/40 py-12">
                    <p className="font-handwriting text-2xl rotate-2">Nothing scheduled yet!</p>
                  </div>
                ) : (
                  blocks.map((b, i) => (
                    <div key={i} className="p-3 border-l-4 border-rust bg-parchment flex justify-between items-center shadow-sm">
                      <div className="flex-1 mr-4">
                        {editingBlockIndex === i ? (
                          <input 
                            autoFocus
                            type="text" 
                            className="bg-transparent border-b border-rust text-indigo font-bold font-interface text-sm uppercase w-full focus:outline-none" 
                            value={b.title} 
                            onChange={(e) => {
                              const newBlocks = [...blocks];
                              newBlocks[i].title = e.target.value;
                              setBlocks(newBlocks);
                            }}
                            onBlur={() => setEditingBlockIndex(null)}
                            onKeyDown={(e) => e.key === 'Enter' && setEditingBlockIndex(null)}
                          />
                        ) : (
                          <div 
                            className="font-bold text-indigo font-interface text-sm uppercase cursor-text" 
                            onClick={() => setEditingBlockIndex(i)}
                            title="Click to edit"
                          >
                            {b.title}
                          </div>
                        )}
                        <div className="text-xs text-indigo/60 mt-1">{b.time}</div>
                      </div>
                      <button onClick={() => setBlocks(blocks.filter((_, idx) => idx !== i))} className="text-rust hover:scale-110 transition-transform shrink-0">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </ScrapbookPanel>
        </div>

        <div className="xl:col-span-5 flex flex-col gap-6 relative">
          <h3 className="font-marker text-3xl text-indigo mb-2 ml-4">To-Do List:</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <StickyNote 
              color="yellow" 
              content="Review Chapter 4 (Thermodynamics) before Thursday!" 
              rotation={-3} 
              className="z-10"
            />
            <StickyNote 
              color="pink" 
              content="Draft essay outline for History." 
              rotation={4} 
              className="z-20 -ml-4 mt-8"
            />
            <StickyNote 
              color="blue" 
              content="Practice 5 calculus problems." 
              rotation={-2} 
              className="z-10"
            />
            <StickyNote 
              color="green" 
              content="Don't forget to ask Prof about the midterm." 
              rotation={1} 
              className="z-30 -ml-2 -mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
