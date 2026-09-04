import React from 'react';
import { Link } from 'react-router-dom';

export default function KnowledgeBase() {
  return (
    <>
<aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container border-r border-outline-variant/30 flex flex-col z-50 select-none"><div className="h-20 px-space-md border-b border-outline-variant/30 flex items-center gap-space-sm bg-surface-container-low/40"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex flex-col min-w-0"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate leading-tight">DESERT ARCHIVE</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest truncate">Academic Command</span></div></div><div className="flex-1 overflow-y-auto py-space-md px-space-sm space-y-space-md"><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">grid_view</span><span className="font-label-lg text-label-lg">Dashboard</span></a></nav><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Learn</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a aria-current="page" className="group flex items-center gap-space-sm px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container font-medium" data-path="resources" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">auto_stories</span><span className="font-label-lg text-label-lg">Resources</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="my-courses" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">school</span><span className="font-label-lg text-label-lg">My Courses</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="saved-materials" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">bookmark</span><span className="font-label-lg text-label-lg">Saved Materials</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">AI Sanctuary</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ai-tutor" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">psychology</span><span className="font-label-lg text-label-lg">AI Tutor</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ask-my-notes" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">document_scanner</span><span className="font-label-lg text-label-lg">Ask My Notes (RAG)</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Plan &amp; Cadence</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="study-plan" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">calendar_today</span><span className="font-label-lg text-label-lg">Study Plan</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="timetable" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">schedule</span><span className="font-label-lg text-label-lg">Timetable</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="upcoming-exams" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">history_edu</span><span className="font-label-lg text-label-lg">Upcoming Exams</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Community</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="quiet-gatherings" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">groups_2</span><span className="font-label-lg text-label-lg">Quiet Gatherings</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="peer-discourse" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">forum</span><span className="font-label-lg text-label-lg">Peer Discourse</span></a></nav></div></div><div className="p-space-sm border-t border-outline-variant/30 bg-surface-container-low/60"><div className="flex items-center gap-space-xs px-space-sm py-space-xs border border-outline-variant/40 bg-surface-container-lowest"><span className="material-symbols-outlined text-primary text-[18px]">verified</span><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface">Archival Sanctuary</span><span className="font-label-sm text-label-sm text-outline">Node 04 · Synchronized</span></div></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-20 bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/30 z-40"><div className="h-20 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1 max-w-lg"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain md:hidden" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest border border-outline-variant/40 w-full text-on-surface-variant"><span className="material-symbols-outlined text-outline text-[18px]">search</span><span className="font-body-sm text-body-sm text-outline flex-1">Search codex, folios, or scholarly records...</span><kbd className="font-label-sm text-label-sm px-space-2xs py-0.5 border border-outline-variant/60 bg-surface-container-high text-on-surface-variant">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">timelapse</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Exam:</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mathematics in 14d</span></div><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">local_fire_department</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Study Streak:</span><span className="font-label-sm text-label-sm text-primary font-semibold">28 Days</span></div><div className="h-6 w-px bg-outline-variant/40 hidden sm:block"></div><div className="flex items-center gap-space-sm"><div className="text-right hidden lg:block"><div className="font-label-sm text-label-sm text-on-surface font-medium leading-none">Archivist Al-Kadhimi</div><div className="font-label-sm text-label-sm text-outline leading-tight">Scholarly Class VI</div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></div></header><main className="w-full pt-20 px-gutter-desktop pb-space-3xl flex-1 bg-surface-container-high"><div className="flex flex-col w-full">

<section className="relative bg-surface-container-low p-space-xl mb-space-xl shadow-md overflow-hidden">
<div className="absolute right-0 top-0 w-96 h-full opacity-10 pointer-events-none flex items-center justify-end pr-space-md">
<svg className="text-primary fill-current" height="280" viewBox="0 0 100 100" width="280">
<circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="36" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="2" y2="98"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="2" x2="98" y1="50" y2="50"></line>
<polygon fill="none" points="50,15 85,75 15,75" stroke="currentColor" strokeWidth="0.5"></polygon>
</svg>
</div>
<div className="relative z-10 max-w-4xl flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest bg-surface-container-highest px-space-xs py-0.5">Codex Repository · Tier VII</span>
<span className="font-label-sm text-label-sm text-outline">Index Synced 14m Ago</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Curated Knowledge Archives</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl">
        Peer-reviewed lecture notes, exam problem sets, and senior annotations preserved beneath the desert observatory vault.
      </p>
</div>

<div className="relative z-10 mt-space-lg flex flex-col gap-space-md max-w-5xl">
<div className="relative flex items-center bg-surface shadow-md">
<div className="pl-space-md pr-space-xs flex items-center pointer-events-none text-primary">
<span className="material-symbols-outlined text-[24px]">search_insights</span>
</div>
<input className="w-full bg-transparent py-space-md px-space-xs font-body-md text-on-surface placeholder:text-outline focus:outline-none" id="archive-search-input" placeholder="Search notes, lectures, topics, courses (e.g. Thermodynamics, Tensor Calculus)..." type="text"/>
<div className="pr-space-md flex items-center gap-space-xs">
<button className="hidden text-outline hover:text-on-surface transition-colors p-1" id="clear-search-btn" title="Clear query">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
<div className="flex items-center gap-1 bg-surface-container-highest px-space-xs py-1 text-on-surface-variant font-label-sm text-label-sm">
<span>⌘</span><span>K</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mr-space-xs">Disciplines:</span>
<button className="filter-pill active bg-primary text-on-primary px-space-sm py-1 font-label-md text-label-md transition-all shadow-sm">
          All Disciplines
        </button>
<button className="filter-pill bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface px-space-sm py-1 font-label-md text-label-md transition-all">
          Applied Physics
        </button>
<button className="filter-pill bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface px-space-sm py-1 font-label-md text-label-md transition-all">
          Pure Mathematics
        </button>
<button className="filter-pill bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface px-space-sm py-1 font-label-md text-label-md transition-all">
          Orbital Engineering
        </button>
<button className="filter-pill bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface px-space-sm py-1 font-label-md text-label-md transition-all">
          Computation
        </button>
<button className="filter-pill bg-surface-container-highest text-tertiary hover:bg-tertiary-container hover:text-on-tertiary-container px-space-sm py-1 font-label-md text-label-md transition-all flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_stories</span>
          Exam Papers Only
        </button>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<aside className="lg:col-span-3 flex flex-col gap-space-lg bg-surface-container-low p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs bg-surface-container-highest/30 px-space-xs py-1">
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">tune</span>
          Archive Parameters
        </span>
<button className="font-label-sm text-label-sm text-tertiary hover:underline" id="reset-filters-btn">Reset</button>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Material Type</label>
<div className="flex flex-col gap-1">
<label className="flex items-center justify-between p-space-xs bg-surface hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input checked="" className="accent-primary w-3.5 h-3.5" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Lecture Notes</span>
</div>
<span className="font-label-sm text-label-sm text-outline">142</span>
</label>
<label className="flex items-center justify-between p-space-xs bg-surface hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input checked="" className="accent-primary w-3.5 h-3.5" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Question Papers</span>
</div>
<span className="font-label-sm text-label-sm text-outline">58</span>
</label>
<label className="flex items-center justify-between p-space-xs bg-surface hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-3.5 h-3.5" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Video Transcripts</span>
</div>
<span className="font-label-sm text-label-sm text-outline">24</span>
</label>
<label className="flex items-center justify-between p-space-xs bg-surface hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input checked="" className="accent-primary w-3.5 h-3.5" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Faculty Reference</span>
</div>
<span className="font-label-sm text-label-sm text-outline">24</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Academic Term</label>
<div className="grid grid-cols-2 gap-space-2xs">
<button className="term-toggle active bg-primary text-on-primary py-space-xs font-label-md text-label-md text-center">Fall 2024</button>
<button className="term-toggle bg-surface text-secondary hover:bg-surface-container py-space-xs font-label-md text-label-md text-center">Spring 2025</button>
<button className="term-toggle bg-surface text-secondary hover:bg-surface-container py-space-xs font-label-md text-label-md text-center col-span-2">Historical Archival (&gt;2 Yrs)</button>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Difficulty Horizon</label>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between p-space-xs bg-surface">
<span className="font-body-sm text-body-sm text-on-surface">Foundational (I-II)</span>
<span className="h-2 w-2 bg-secondary"></span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface">
<span className="font-body-sm text-body-sm text-on-surface">Intermediate (III-IV)</span>
<span className="h-2 w-2 bg-tertiary"></span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container-highest">
<span className="font-body-sm text-body-sm text-primary font-medium">Imperial / Deep Research (V+)</span>
<span className="h-2 w-2 bg-primary"></span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Order of Recitation</label>
<div className="flex flex-col gap-1">
<label className="flex items-center gap-space-xs p-space-xs bg-surface cursor-pointer">
<input checked="" className="accent-primary" name="sort-archive" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Relevance &amp; Algorithmic Match</span>
</label>
<label className="flex items-center gap-space-xs p-space-xs bg-surface cursor-pointer">
<input className="accent-primary" name="sort-archive" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Most Annotated by Scholars</span>
</label>
<label className="flex items-center gap-space-xs p-space-xs bg-surface cursor-pointer">
<input className="accent-primary" name="sort-archive" type="radio"/>
<span className="font-body-sm text-body-sm text-on-surface">Recent Depositions</span>
</label>
</div>
</div>

<div className="bg-surface-container p-space-sm flex flex-col gap-space-xs shadow-sm mt-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline">RAG Ingestion Status</span>
<span className="font-label-sm text-label-sm text-primary">100% Ready</span>
</div>
<div className="w-full bg-surface-container-lowest h-1.5 overflow-hidden">
<div className="bg-primary h-full w-full"></div>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-tight">
          All 248 documents indexed into the neural vector embeddings cluster for real-time citations.
        </p>
</div>
</aside>

<main className="lg:col-span-9 flex flex-col gap-space-lg">

<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-sm shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Archived Treatises</span>
<span className="bg-surface-container-highest text-secondary font-label-sm text-label-sm px-space-xs py-0.5">4 Active Results</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-outline">Display View:</span>
<button className="p-1 bg-surface-container text-primary" title="Detailed List View">
<span className="material-symbols-outlined text-[18px]">view_agenda</span>
</button>
<button className="p-1 text-outline hover:text-on-surface" title="Compact Table View">
<span className="material-symbols-outlined text-[18px]">table_rows</span>
</button>
</div>
</div>

<article className="resource-card group bg-surface-container p-space-lg shadow-md transition-all hover:bg-surface-container-highest flex flex-col gap-space-md relative overflow-hidden" data-category="physics">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-secondary-container text-on-secondary-container px-space-xs py-0.5">
              Lecture Notes
            </span>
<span className="font-label-sm text-label-sm text-outline">Ref: PHY-8041-A</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-secondary">Uploaded by Senior Scholar S. Yueh</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-outline">3 days ago</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary self-start md:self-auto">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">description</span> 42 pages</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">visibility</span> 1.4k reads</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
            THERMODYNAMICS — First Law of Thermodynamics &amp; Open Systems
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Comprehensive mathematical treatment of control volume energy equations with worked boundary examples, enthalpy balances, and non-steady state nozzle expansion proofs.
          </p>
</div>

<div className="bg-surface-container-lowest p-space-sm flex flex-col md:flex-row gap-space-md items-start">
<div className="w-full md:w-48 h-28 bg-surface-variant flex-shrink-0 relative overflow-hidden shadow-inner">
<div className="bg-cover bg-center w-full h-full" data-alt="Technical architectural diagram of an open thermodynamic cycle with pressure enthalpy curves rendered in muted sepia ink on dark sandstone paper parchment." style={{'background-image': "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtgICz9LVFJGn3wQKuRRmaGEG8LlP2-3Z8vakd-2uBJlo3IMNpZimii-iJy2xmWDZJPDl7kDkyn-WlyUh8nJcwaXeJV3LRj-qFaGtBsdRJ2g9ewe0zPE7tW1TpzD88bJc4TaGcneiJMhJ8zZgJT6DrtLNsxmeTphlPf2__O771B4_AED6qLfZfRzNt7y-IQGvST4w6--N5njQIbaNTne8ZvkG0I_A0Y5j3LIhpRcPxIoVK6Iir37_aig')"}}></div>
<span className="absolute bottom-1 right-1 bg-surface-container-lowest/80 text-outline font-label-sm text-label-sm px-1">Fig 4.2</span>
</div>
<div className="flex-1 flex flex-col justify-between h-full gap-space-xs">
<div className="flex items-center gap-space-xs text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">draw</span>
<span>Marginalia: 18 High-Yield Exam Annotations Included</span>
</div>
<p className="font-body-sm text-body-sm text-outline line-clamp-2">
              "...note that control surfaces must remain invariant under coordinate translation; refer to Dr. Yueh's appendix on turbulent throat friction."
            </p>
<div className="flex items-center gap-space-xs mt-1">
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#ControlVolume</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#IsentropicFlow</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#CarnotBoundaries</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm">
<button className="bg-primary text-on-primary px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">psychology</span>
              Open in RAG Tutor
            </button>
<button className="save-toggle bg-surface-container-highest text-on-surface hover:bg-surface-bright px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">bookmark_add</span>
<span>Save to Sanctuary</span>
</button>
</div>
<button className="text-outline hover:text-primary transition-colors p-space-xs flex items-center gap-1 font-label-sm text-label-sm">
<span>Inspect Folio</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="resource-card group bg-surface-container p-space-lg shadow-md transition-all hover:bg-surface-container-highest flex flex-col gap-space-md relative overflow-hidden" data-category="mathematics">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-tertiary text-on-tertiary px-space-xs py-0.5">
              Faculty Reference
            </span>
<span className="font-label-sm text-label-sm text-outline">Ref: MAT-9022-M</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-secondary">Faculty Master Archive</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-primary font-medium">End-term high-yield</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary self-start md:self-auto">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">description</span> 120 pages</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">visibility</span> 3.1k reads</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
            DIFFERENTIAL GEOMETRY — Manifolds, Tangent Bundles &amp; Curvature
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Rigorous topological foundation covering smooth manifolds, Christoffel symbols, Riemann curvature tensor derivations, and Hodge duality representations.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-sm flex flex-col md:flex-row gap-space-md items-start">
<div className="w-full md:w-48 h-28 bg-surface-variant flex-shrink-0 relative overflow-hidden shadow-inner">
<div className="bg-cover bg-center w-full h-full" data-alt="High precision vector projection of multidimensional curved manifold with orthogonal coordinate grids etched into dark bronze slate with copper and sand tones." style={{'background-image': "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv_ZVzBELL4EQtD5OlIFRIR6jIUW1vbWiU4skVDOB_Y7beVZeBHXwwjXEJReraUD3UpdLOSTIjpReHgAAtUha-fhT_J4LhahVbmdlZU_STfquG26dZA2q-evUdCdhQtXuNdVMo--dEGTe736Yea_VN5XoZwEsd4vI3uYqb3E1mH1HjFZEZWCux_oFrOljGOteOt9HdmPiRX66zhTFiStrmotaoJkbmYKyZIRvrprS3XGXGfpvlr7-_Tw')"}}></div>
<span className="absolute bottom-1 right-1 bg-surface-container-lowest/80 text-outline font-label-sm text-label-sm px-1">Chart IX</span>
</div>
<div className="flex-1 flex flex-col justify-between h-full gap-space-xs">
<div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Dean of Mathematics Seal of Authenticity</span>
</div>
<p className="font-body-sm text-body-sm text-outline line-clamp-2">
              Primary study codex for upcoming qualifying examination. Full indices and cross-references to Gauss-Bonnet theorem problem sets.
            </p>
<div className="flex items-center gap-space-xs mt-1">
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#RiemannTensor</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#TangentSpace</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#TopologicalManifolds</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm">
<button className="bg-primary text-on-primary px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">psychology</span>
              Open in RAG Tutor
            </button>
<button className="save-toggle bg-surface-container-highest text-on-surface hover:bg-surface-bright px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">bookmark_add</span>
<span>Save</span>
</button>
</div>
<button className="text-outline hover:text-primary transition-colors p-space-xs flex items-center gap-1 font-label-sm text-label-sm">
<span>Inspect Folio</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="resource-card group bg-surface-container p-space-lg shadow-md transition-all hover:bg-surface-container-highest flex flex-col gap-space-md relative overflow-hidden" data-category="computation">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-primary-container text-on-primary-container px-space-xs py-0.5">
              Question Paper With Solutions
            </span>
<span className="font-label-sm text-label-sm text-outline">Ref: CS-5010-Q</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-secondary">Fall 2024 Exam</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-tertiary">Senior Annotated Solutions</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary self-start md:self-auto">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">description</span> 28 pages</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">visibility</span> 920 reads</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
            ALGORITHMS &amp; DATA STRUCTURES — Distributed Consensus Protocols
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Mid-term examination questions accompanied by step-by-step proofs of Raft and Paxos fault tolerance bounds, quorum intersection lemmas, and vector clock ordering.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-sm flex flex-col md:flex-row gap-space-md items-start">
<div className="w-full md:w-48 h-28 bg-surface-variant flex-shrink-0 relative overflow-hidden shadow-inner">
<div className="bg-cover bg-center w-full h-full" data-alt="Network state synchronization tree with illuminated terracotta nodes and distributed message consensus arrows depicted in minimal geometric aesthetic." style={{'background-image': "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbTdWiaGEg4J2oQbDhA16VVjJ2pD47i3oxHRYWdCqawbhZCw7LURKlmLEHdlVTyiky-9Bjp3ld8QpCJ8dWCn5lLXyhgJv8L1iroLRoVapgX2AT5ZnKvOQfx49ghAKMQJNtb_-gmbyDw8XrToDVQCAxxjb_GszolCNM5AMfukpjTpYd3m6n3qTzA_Gjlp_XIEK0pK-EtqZQF_R3M2aHxiczPnpnxYl5OH9nJpJndb3ijTuwHtncrg9RFA')"}}></div>
<span className="absolute bottom-1 right-1 bg-surface-container-lowest/80 text-outline font-label-sm text-label-sm px-1">Proof B</span>
</div>
<div className="flex-1 flex flex-col justify-between h-full gap-space-xs">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">grade</span>
<span>Contains Fall 2024 Official Grading Rubric</span>
</div>
<p className="font-body-sm text-body-sm text-outline line-clamp-2">
              Highlights potential pitfalls in Question 3: Byzantine Fault Tolerance under asynchronous message passing constraints.
            </p>
<div className="flex items-center gap-space-xs mt-1">
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#Paxos</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#ByzantineConsensus</span>
<span className="bg-surface px-space-xs py-0.5 font-label-sm text-label-sm text-secondary">#VectorClocks</span>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm">
<button className="bg-primary text-on-primary px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">psychology</span>
              Open in RAG Tutor
            </button>
<button className="save-toggle bg-surface-container-highest text-on-surface hover:bg-surface-bright px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">bookmark_add</span>
<span>Save to Sanctuary</span>
</button>
</div>
<button className="text-outline hover:text-primary transition-colors p-space-xs flex items-center gap-1 font-label-sm text-label-sm">
<span>Inspect Folio</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<article className="resource-card group bg-surface-container p-space-lg shadow-md transition-all hover:bg-surface-container-highest flex flex-col gap-space-md relative overflow-hidden" data-category="physics">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-surface-bright text-on-surface px-space-xs py-0.5">
              Formula Summary Sheet
            </span>
<span className="font-label-sm text-label-sm text-outline">Ref: PHY-7712-F</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-primary">Verified by TAs</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-outline">Updated 1 wk ago</span>
</div>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary self-start md:self-auto">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">description</span> 6 pages</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">visibility</span> 2.8k reads</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">
            ELECTRODYNAMICS — Maxwell's Equations in Curved Spacetime
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Condensed, quick-lookup cheat sheet with covariant formulation, stress-energy tensor couplings, and gauge-fixing identities for Schwarzschild backgrounds.
          </p>
</div>

<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm">
<button className="bg-primary text-on-primary px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs hover:bg-surface-tint transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">psychology</span>
              Open in RAG Tutor
            </button>
<button className="save-toggle bg-surface-container-highest text-on-surface hover:bg-surface-bright px-space-md py-space-xs font-label-lg text-label-lg flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">bookmark_add</span>
<span>Save</span>
</button>
</div>
<button className="text-outline hover:text-primary transition-colors p-space-xs flex items-center gap-1 font-label-sm text-label-sm">
<span>Inspect Folio</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>

<footer className="mt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md p-space-md bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-[20px]">auto_stories</span>
<span className="font-body-sm text-body-sm text-secondary">
            Showing <strong className="text-on-surface">4</strong> of <strong className="text-on-surface">248</strong> curated artifacts in the sanctuary archive
          </span>
</div>
<div className="flex items-center gap-1">
<button className="px-space-sm py-1 bg-surface text-outline hover:text-on-surface disabled:opacity-40 font-label-sm text-label-sm" disabled="">
            Previous
          </button>
<button className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm font-semibold">1</button>
<button className="px-space-sm py-1 bg-surface text-secondary hover:bg-surface-container font-label-sm text-label-sm">2</button>
<button className="px-space-sm py-1 bg-surface text-secondary hover:bg-surface-container font-label-sm text-label-sm">3</button>
<span className="px-1 text-outline font-label-sm text-label-sm">...</span>
<button className="px-space-sm py-1 bg-surface text-secondary hover:bg-surface-container font-label-sm text-label-sm">62</button>
<button className="px-space-sm py-1 bg-surface text-secondary hover:text-on-surface font-label-sm text-label-sm">
            Next
          </button>
</div>
</footer>
</main>
</div>
</div>
</main></div>
    </>
  );
}
