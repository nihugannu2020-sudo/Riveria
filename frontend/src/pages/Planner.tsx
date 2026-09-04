import React from 'react';
import RetroWindow from '../components/RetroWindow';
import RetroButton from '../components/RetroButton';

export default function Planner() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4">
        <div>
          <div className="font-interface text-[10px] uppercase tracking-widest text-rust mb-2">Temporal Coordination</div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-2">
            Study Planner
          </h1>
          <p className="font-interface text-[11px] uppercase tracking-widest text-indigo/70">
            Timetable alignment and structured study slots.
          </p>
        </div>
        <div className="flex gap-2">
          <RetroButton icon="add">New Block</RetroButton>
          <RetroButton variant="primary" icon="auto_fix_high">Generate Plan</RetroButton>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        <div className="xl:col-span-8 flex flex-col gap-6">
          <RetroWindow title="TEMPORAL.GRID" icon="calendar_view_week">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-indigo/20 pb-4">
                 <div>
                    <div className="font-interface text-[9px] uppercase tracking-widest text-indigo/70 mb-1">Current Cycle</div>
                    <div className="font-display text-[18px] text-indigo font-bold">Week 1</div>
                 </div>
                 <div className="flex gap-1 overflow-x-auto max-w-full pb-2 sm:pb-0">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <button key={day} className={`flex flex-col items-center justify-center w-12 h-14 border border-indigo retro-inset transition-colors shrink-0 ${i === 0 ? 'bg-rust text-parchment' : 'bg-parchment text-indigo hover:bg-sand'}`}>
                          <span className="font-interface text-[9px] uppercase tracking-widest font-bold">{day}</span>
                        </button>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center py-12 text-indigo/50">
                <span className="material-symbols-outlined text-[48px]">schedule</span>
                <p className="font-interface text-[11px] uppercase tracking-widest">No active study slots.</p>
              </div>
            </div>
          </RetroWindow>
        </div>

        <div className="xl:col-span-4 flex flex-col gap-6">
          <RetroWindow title="CADENCE.METRICS" icon="monitoring">
            <div className="flex flex-col gap-4">
              <div className="bg-sand border border-indigo p-4 retro-inset">
                <span className="font-interface text-[9px] uppercase tracking-widest text-indigo/70">Weekly Utilization</span>
                <div className="font-display text-[24px] font-bold text-indigo my-2">0 hrs</div>
                <div className="h-1.5 w-full border border-indigo bg-parchment"></div>
              </div>
            </div>
          </RetroWindow>
        </div>
      </div>
    </div>
  );
}
