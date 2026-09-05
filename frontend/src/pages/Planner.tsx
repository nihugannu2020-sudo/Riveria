import React from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import StickyNote from '../components/StickyNote';
import RetroButton from '../components/RetroButton';

export default function Planner() {
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
          <RetroButton icon="add">New Block</RetroButton>
          <RetroButton variant="primary" icon="auto_fix_high">Generate Plan</RetroButton>
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
                        <button key={day} className={`font-marker text-lg px-3 py-1 rounded-sm transition-transform hover:scale-110 ${i === 0 ? 'bg-rust/20 text-rust underline decoration-wavy' : 'text-indigo'}`}>
                          {day}
                        </button>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center py-12 text-indigo/40">
                <p className="font-handwriting text-2xl rotate-2">Nothing scheduled yet!</p>
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
