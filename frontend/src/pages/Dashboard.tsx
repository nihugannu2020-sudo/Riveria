import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
<aside className="fixed left-0 top-0 h-screen w-72 border-r border-outline-variant/30 flex flex-col z-50 select-none bg-surface-container-low"><div className="h-20 px-space-md border-b border-outline-variant/30 flex items-center gap-space-sm bg-surface-container-low/40"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex flex-col min-w-0"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate leading-tight">DESERT ARCHIVE</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest truncate">Academic Command</span></div></div><div className="flex-1 overflow-y-auto py-space-md px-space-sm space-y-space-md"><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a aria-current="page" className="group flex items-center gap-space-sm px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container font-medium" data-path="dashboard" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">grid_view</span><span className="font-label-lg text-label-lg">Dashboard</span></a></nav><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Learn</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="resources" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">auto_stories</span><span className="font-label-lg text-label-lg">Resources</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="my-courses" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">school</span><span className="font-label-lg text-label-lg">My Courses</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="saved-materials" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">bookmark</span><span className="font-label-lg text-label-lg">Saved Materials</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">AI Sanctuary</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ai-tutor" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">psychology</span><span className="font-label-lg text-label-lg">AI Tutor</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ask-my-notes" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">document_scanner</span><span className="font-label-lg text-label-lg">Ask My Notes (RAG)</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Plan &amp; Cadence</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="study-plan" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">calendar_today</span><span className="font-label-lg text-label-lg">Study Plan</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="timetable" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">schedule</span><span className="font-label-lg text-label-lg">Timetable</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="upcoming-exams" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">history_edu</span><span className="font-label-lg text-label-lg">Upcoming Exams</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Community</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="quiet-gatherings" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">groups_2</span><span className="font-label-lg text-label-lg">Quiet Gatherings</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="peer-discourse" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">forum</span><span className="font-label-lg text-label-lg">Peer Discourse</span></a></nav></div></div><div className="p-space-sm border-t border-outline-variant/30 bg-surface-container-low/60"><div className="flex items-center gap-space-xs px-space-sm py-space-xs border border-outline-variant/40 bg-surface-container-lowest"><span className="material-symbols-outlined text-primary text-[18px]">verified</span><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface">Archival Sanctuary</span><span className="font-label-sm text-label-sm text-outline">Node 04 · Synchronized</span></div></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-20 backdrop-blur-md border-b border-outline-variant/30 z-40 bg-surface-container-lowest"><div className="h-20 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1 max-w-lg"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain md:hidden" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest border border-outline-variant/40 w-full text-on-surface-variant"><span className="material-symbols-outlined text-outline text-[18px]">search</span><span className="font-body-sm text-body-sm text-outline flex-1">Search codex, folios, or scholarly records...</span><kbd className="font-label-sm text-label-sm px-space-2xs py-0.5 border border-outline-variant/60 bg-surface-container-high text-on-surface-variant">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">timelapse</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Exam:</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mathematics in 14d</span></div><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">local_fire_department</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Study Streak:</span><span className="font-label-sm text-label-sm text-primary font-semibold">28 Days</span></div><div className="h-6 w-px bg-outline-variant/40 hidden sm:block"></div><div className="flex items-center gap-space-sm"><div className="text-right hidden lg:block"><div className="font-label-sm text-label-sm text-on-surface font-medium leading-none">Archivist Al-Kadhimi</div><div className="font-label-sm text-label-sm text-outline leading-tight">Scholarly Class VI</div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></div></header><main className="w-full pt-20 px-gutter-desktop pb-space-3xl flex-1 bg-surface-container-lowest"><div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden mb-space-xl">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-space-md">
<div className="space-y-space-2xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-container-low shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Night Session Active</span>
<span className="text-outline-variant text-[11px]">•</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Sietch Tabr Sanctuary</span>
</div>
<h1 className="font-display text-display text-on-surface tracking-tight mt-space-xs">
          Good evening, Paul.
        </h1>
<p className="font-headline-sm text-headline-sm text-secondary font-light max-w-2xl">
          Here's what matters today across your study sanctuary.
        </p>
</div>
<div className="flex items-center gap-space-md bg-surface-container px-space-md py-space-sm shadow-md">
<div className="text-right">
<div className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Atmospheric Chrono</div>
<div className="font-label-lg text-label-lg text-primary font-medium tracking-wide">CYCLE 48.2 · SOLAR DEVIATION -04°</div>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">flare</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
<div className="lg:col-span-7 bg-surface-container shadow-xl p-space-xl relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div>
<div className="flex items-center justify-between gap-space-sm mb-space-lg">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">timelapse</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Active Arc Cycle</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-space-2xs bg-surface-container-high text-secondary uppercase tracking-wider">Session 04 of 06</span>
</div>
<div className="space-y-space-xs mb-space-xl">
<div className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Current Discipline</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Thermodynamics &amp; Orbital Mechanics
          </h2>
<div className="flex items-center gap-space-xs text-secondary pt-space-2xs">
<span className="material-symbols-outlined text-primary text-[16px]">subdirectory_arrow_right</span>
<span className="font-body-lg text-body-lg text-on-surface-variant font-light italic">Entropy &amp; Closed Cycle Reversibility</span>
</div>
</div>
</div>
<div className="space-y-space-md pt-space-md bg-surface-container-low/70 p-space-md">
<div className="flex justify-between items-end">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Temporal Cadence</span>
<span className="font-label-lg text-label-lg text-primary font-medium">45m remaining <span className="text-outline-variant font-normal">/ 90m block</span></span>
</div>
<span className="font-headline-sm text-headline-sm text-primary font-semibold">68%</span>
</div>
<div className="w-full h-2 bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary-container transition-all duration-700" style={{'width': "68%"}}></div>
</div>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<button className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider font-semibold hover:bg-tertiary transition-colors flex items-center gap-space-xs shadow-md">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
<span className="">Resume Session</span>
</button>
<button className="px-space-md py-space-sm bg-surface-container-high text-on-surface hover:text-primary font-label-lg text-label-lg uppercase tracking-wider transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
<span className="">View Formula Sheet</span>
</button>
<div className="ml-auto hidden sm:flex items-center gap-space-xs text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">save</span>
<span className="">Autosaved 2m ago</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container shadow-xl p-space-xl flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-space-md">
<span className="material-symbols-outlined text-outline/30 text-[48px]">verified</span>
</div>
<div>
<div className="flex items-center gap-space-xs mb-space-sm">
<span className="material-symbols-outlined text-error text-[18px]">priority_high</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Upcoming Critical Milestone</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide leading-snug mb-space-lg">
          Advanced Mathematics &amp; Tensor Calculus
        </h3>
<div className="p-space-md bg-surface-container-lowest shadow-inner mb-space-lg">
<div className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-space-2xs">Countdown to Evaluation</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-display text-display text-on-surface font-light tracking-tighter">14</span>
<span className="font-headline-sm text-headline-sm text-primary tracking-widest uppercase">Days Remaining</span>
</div>
</div>
<div className="space-y-space-xs mb-space-lg">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-outline uppercase tracking-wider">Preparation Readiness Index</span>
<span className="text-primary font-semibold">82% Verified</span>
</div>
<div className="grid grid-cols-10 gap-1 h-3">
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-primary h-full"></div>
<div className="bg-surface-container-highest h-full"></div>
<div className="bg-surface-container-highest h-full"></div>
</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-high flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">bookmark_border</span>
<div className="min-w-0 flex-1">
<div className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Next Revision Segment</div>
<div className="font-body-md text-body-md text-on-surface font-medium truncate">Differential Equations &amp; Boundary Limits</div>
</div>
<button aria-label="Jump to revision topic" className="text-primary hover:text-on-surface transition-colors p-1">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-container shadow-2xl p-space-xl mb-space-2xl relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg mb-space-lg">
<div className="space-y-space-2xs max-w-xl">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-medium">Archival Intelligence Interface</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">
          Ask Your Learning Assistant
        </h2>
<p className="font-body-md text-body-md text-secondary">
          Consult the Mentat neural index across all parsed scriptures, handwritten codices, and lecture transcripts.
        </p>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-tertiary text-[16px]">database</span>
<span className="">Index synched: 4,120 scrolls &amp; 84 lecture tapes</span>
</div>
</div>
<div className="relative mb-space-md">
<div className="flex items-center bg-surface-container-lowest p-space-xs shadow-inner">
<span className="material-symbols-outlined text-primary px-space-sm text-[22px]">manage_search</span>
<input className="w-full bg-transparent font-body-lg text-body-lg text-on-surface placeholder:text-outline focus:outline-none py-space-xs" id="companion-input" placeholder="Ask your knowledge companion anything..." type="text"/>
<button className="px-space-md py-space-xs bg-primary-container text-on-primary-container hover:bg-tertiary transition-colors font-label-md text-label-md uppercase tracking-widest font-semibold flex items-center gap-space-2xs" id="companion-submit">
<span className="">Consult</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</button>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mr-space-2xs">Contextual Probes:</span>
<button className="pill-btn px-space-sm py-1 bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-variant font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary">search_spark</span>
<span className="">Explain entropy simply</span>
</button>
<button className="pill-btn px-space-sm py-1 bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-variant font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary">search_spark</span>
<span className="">Summarize Lecture 04 notes</span>
</button>
<button className="pill-btn px-space-sm py-1 bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-variant font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary">search_spark</span>
<span className="">Generate 5 practice problems</span>
</button>
<button className="pill-btn px-space-sm py-1 bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-variant font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary">search_spark</span>
<span className="">What should I revise tonight?</span>
</button>
</div>
</div>
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="space-y-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">history</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Recency Log</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
          Continue Learning &amp; Archival Access
        </h3>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-on-surface transition-colors flex items-center gap-space-2xs" href="#">
<span className="">View Complete Index</span>
<span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="group bg-surface-container p-space-md shadow-lg hover:bg-surface-container-high transition-all flex flex-col justify-between relative cursor-pointer">
<div className="space-y-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<span className="px-space-xs py-0.5 bg-surface-container-lowest font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Lecture Notes</span>
<span className="font-label-sm text-label-sm text-outline">34m ago</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
              Lecture 07: Fluid Dynamics
            </h4>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs line-clamp-2">
              Navier-Stokes solutions under high-viscosity atmospheric conditions in non-standard gravity.
            </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between text-outline font-label-sm text-label-sm">
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[14px]">edit_note</span>
<span className="">12 Pages Annotated</span>
</div>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[18px]">east</span>
</div>
</div>
<div className="group bg-surface-container p-space-md shadow-lg hover:bg-surface-container-high transition-all flex flex-col justify-between relative cursor-pointer">
<div className="space-y-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<span className="px-space-xs py-0.5 bg-surface-container-lowest font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Exercise Folio</span>
<span className="font-label-sm text-label-sm text-outline">2h ago</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
              Problem Set 3: Wave Equations
            </h4>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs line-clamp-2">
              Partial differential derivations for harmonic oscillations through subterranean sandstone structures.
            </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between text-outline font-label-sm text-label-sm">
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="text-primary font-medium">8/10 Complete</span>
</div>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[18px]">east</span>
</div>
</div>
<div className="group bg-surface-container p-space-md shadow-lg hover:bg-surface-container-high transition-all flex flex-col justify-between relative cursor-pointer">
<div className="space-y-space-sm">
<div className="flex items-center justify-between gap-space-xs">
<span className="px-space-xs py-0.5 bg-primary-container/30 font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Senior Annotation</span>
<span className="font-label-sm text-label-sm text-outline">Yesterday</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
              Senior Notes: Chemical Kinetics
            </h4>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs line-clamp-2">
              Catalytic degradation models of spice-derived aromatic compounds verified by Archival Council.
            </p>
</div>
</div>
<div className="pt-space-md mt-space-md flex items-center justify-between text-outline font-label-sm text-label-sm">
<div className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[14px] text-tertiary">star</span>
<span className="">Master Guild Grade</span>
</div>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-[18px]">east</span>
</div>
</div>
</div>
</div>
</div>
</main></div>

    </>
  );
}
