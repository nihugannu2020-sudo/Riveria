import React from 'react';
import { Link } from 'react-router-dom';

export default function Chat() {
  return (
    <>
<aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container border-r border-outline-variant/30 flex flex-col z-50 select-none"><div className="h-20 px-space-md border-b border-outline-variant/30 flex items-center gap-space-sm bg-surface-container-low/40"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex flex-col min-w-0"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate leading-tight">DESERT ARCHIVE</span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest truncate">Academic Command</span></div></div><div className="flex-1 overflow-y-auto py-space-md px-space-sm space-y-space-md"><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">grid_view</span><span className="font-label-lg text-label-lg">Dashboard</span></a></nav><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Learn</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="resources" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">auto_stories</span><span className="font-label-lg text-label-lg">Resources</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="my-courses" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">school</span><span className="font-label-lg text-label-lg">My Courses</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="saved-materials" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">bookmark</span><span className="font-label-lg text-label-lg">Saved Materials</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">AI Sanctuary</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a aria-current="page" className="group flex items-center gap-space-sm px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary-container font-medium" data-path="ai-tutor" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">psychology</span><span className="font-label-lg text-label-lg">AI Tutor</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ask-my-notes" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">document_scanner</span><span className="font-label-lg text-label-lg">Ask My Notes (RAG)</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Plan &amp; Cadence</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="study-plan" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">calendar_today</span><span className="font-label-lg text-label-lg">Study Plan</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="timetable" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">schedule</span><span className="font-label-lg text-label-lg">Timetable</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="upcoming-exams" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">history_edu</span><span className="font-label-lg text-label-lg">Upcoming Exams</span></a></nav></div><div><div className="px-space-sm pb-space-2xs"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Community</span></div><nav className="space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary-container font-medium"><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="quiet-gatherings" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">groups_2</span><span className="font-label-lg text-label-lg">Quiet Gatherings</span></a><a className="group flex items-center gap-space-sm px-space-sm py-space-xs text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="peer-discourse" href="#"><span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">forum</span><span className="font-label-lg text-label-lg">Peer Discourse</span></a></nav></div></div><div className="p-space-sm border-t border-outline-variant/30 bg-surface-container-low/60"><div className="flex items-center gap-space-xs px-space-sm py-space-xs border border-outline-variant/40 bg-surface-container-lowest"><span className="material-symbols-outlined text-primary text-[18px]">verified</span><div className="flex flex-col"><span className="font-label-sm text-label-sm text-on-surface">Archival Sanctuary</span><span className="font-label-sm text-label-sm text-outline">Node 04 · Synchronized</span></div></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-20 bg-surface-container/90 backdrop-blur-md border-b border-outline-variant/30 z-40"><div className="h-20 w-full px-gutter-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1 max-w-lg"><img alt="Arrakis Academy Emblem" className="h-8 w-auto object-contain md:hidden" src="https://lh3.googleusercontent.com/aida/AEtjO1V2kZRsxWy_Unu0lqsP81J3VyK_fvqdiUwwfwxd-_5gYb6WNlN6KptgLLb8xsyANjPuTiyTyYVT7NnlrVjNG2WcP9fkhzLRw0F4Tg709DT7pmmegKehd2lqqgDgGt07u-NF4e_6YHrGfKFsAfH8iMpRt8kHBQpIm1TNrcUMdWIkjx_koKWNFJS7K83QFC5GR95TYHHnxJEomniR91ltETrLwQPfEBjNq7kZYQ42cL2WvsLRS8ptsswZbzxG"/><div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-lowest border border-outline-variant/40 w-full text-on-surface-variant"><span className="material-symbols-outlined text-outline text-[18px]">search</span><span className="font-body-sm text-body-sm text-outline flex-1">Search codex, folios, or scholarly records...</span><kbd className="font-label-sm text-label-sm px-space-2xs py-0.5 border border-outline-variant/60 bg-surface-container-high text-on-surface-variant">⌘K</kbd></div></div><div className="flex items-center gap-space-md"><div className="hidden sm:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">timelapse</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Exam:</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">Mathematics in 14d</span></div><div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-2xs border border-outline-variant/40 bg-surface-container-low"><span className="material-symbols-outlined text-primary text-[16px]">local_fire_department</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Study Streak:</span><span className="font-label-sm text-label-sm text-primary font-semibold">28 Days</span></div><div className="h-6 w-px bg-outline-variant/40 hidden sm:block"></div><div className="flex items-center gap-space-sm"><div className="text-right hidden lg:block"><div className="font-label-sm text-label-sm text-on-surface font-medium leading-none">Archivist Al-Kadhimi</div><div className="font-label-sm text-label-sm text-outline leading-tight">Scholarly Class VI</div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></div></header><main className="w-full pt-20 px-gutter-desktop pb-space-3xl flex-1 bg-surface-container-high"><div className="flex flex-col w-full">

<div className="w-full mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs text-tertiary mb-space-2xs">
<span className="material-symbols-outlined text-[14px]">auto_stories</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Sanctuary Scholastic Node / Folio Vector RAG</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Thermodynamic Codex &amp; Dialectic</h1>
</div>

<div className="flex items-center gap-space-md bg-surface-container px-space-md py-space-xs shadow-md border border-outline-variant/30">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Vector Space Live</span>
</div>
<div className="h-4 w-px bg-surface-variant"></div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">database</span>
<span className="">1,536-dim Cohere Embed</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<section className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container p-space-lg shadow-md relative overflow-hidden border border-outline-variant/30">

<div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Archived Parchment • Codex VIII</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-normal mt-0.5 leading-snug">
              THERMODYNAMICS — LECTURE 04: ENTROPY &amp; ISENTROPIC FLOWS
            </h2>
</div>
<button className="p-space-2xs text-secondary hover:text-primary hover:bg-surface-container-high transition-colors" title="Inspect full folio manifest">
<span className="material-symbols-outlined text-[20px]">open_in_new</span>
</button>
</div>

<div className="inline-flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 mb-space-md text-on-surface">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
<span className="font-label-sm text-label-sm tracking-wide text-secondary-fixed-dim">
            48 Pages Indexed &amp; Embedded • Vector Knowledge Active
          </span>
</div>

<div className="bg-surface-container-low p-space-md mb-space-md">
<div className="flex items-center justify-between mb-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[16px]">pageview</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Folio Excerpt: Page 14</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Section 2.1 — Cyclic Heat Transfer</span>
</div>

<div className="bg-surface-container-lowest p-space-md relative overflow-hidden mb-space-sm border border-outline-variant/40">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-tertiary">FIG. 4.2 — CARNOT REVERSIBLE CYCLE &amp; RESERVOIRS</span>
<span className="font-label-sm text-label-sm text-outline">PDF-CHUNK #14-B</span>
</div>

<div className="w-full py-space-xs flex justify-center items-center">
<svg className="w-full max-w-sm h-auto text-on-surface" fill="none" viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg"><rect fill="#f4a24f" fill-opacity="0.12" height="24" stroke="#852a03" strokeWidth="1" width="180" x="90" y="10"></rect><text className="font-label-sm text-[11px] uppercase tracking-widest font-semibold" fill="#ffc48f" text-anchor="middle" x="180" y="26">Thermal Source T_H (T_hot)</text><line stroke="#f4a24f" stroke-dasharray="3 3" strokeWidth="1.5" x1="180" x2="180" y1="34" y2="52"></line><polygon fill="#f4a24f" points="180,56 176,48 184,48"></polygon><text className="font-label-sm text-[10px] font-bold" fill="#ffb59c" x="195" y="47">Q_H</text><circle cx="180" cy="74" fill="#281d1d" r="18" stroke="#f4a24f" strokeWidth="1.5"></circle><text className="font-label-sm text-[11px] font-bold" fill="#f2dedd" text-anchor="middle" x="180" y="78">W</text><line stroke="#f4a24f" strokeWidth="1.5" x1="198" x2="250" y1="74" y2="74"></line><polygon fill="#f4a24f" points="255,74 247,70 247,78"></polygon><text className="font-label-sm text-[10px] font-bold" fill="#ffb59c" x="228" y="68">W_net</text><line stroke="#852a03" stroke-dasharray="3 3" strokeWidth="1.5" x1="180" x2="180" y1="92" y2="106"></line><polygon fill="#852a03" points="180,110 176,102 184,102"></polygon><text className="font-label-sm text-[10px] font-bold" fill="#ffb59c" x="195" y="103">Q_L</text><rect fill="#852a03" fill-opacity="0.15" height="24" stroke="#534437" strokeWidth="1" width="180" x="90" y="110"></rect><text className="font-label-sm text-[11px] uppercase tracking-widest font-semibold" fill="#ff9980" text-anchor="middle" x="180" y="126">Thermal Sink T_L (T_cold)</text></svg>
</div>

<div className="bg-surface-container-high p-space-xs mt-space-xs border-outline-variant/40 border">
<div className="flex items-center justify-between text-tertiary font-label-sm text-label-sm mb-1">
<span className="">The Clausius Integral</span>
<span className="text-outline">Eq. 4.14</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary tracking-wide text-center py-1">
                ∮ <span className="text-on-surface">δQ / T</span> ≤ 0
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                Equality holds strictly for reversible pathways; strict inequality holds for irreversible cycles.
              </p>
</div>
</div>

<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Codex Structure</span>
<div className="space-y-1">
<div className="flex items-center justify-between p-space-xs bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-outline group-hover:text-primary">01</span>
<span className="font-body-sm text-body-sm text-on-surface">Heat Engines &amp; Reversibility</span>
</div>
<span className="font-label-sm text-label-sm text-outline">p. 1–12</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container-high transition-colors cursor-pointer border-l border-primary">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-primary">02</span>
<span className="font-body-sm text-body-sm text-primary font-medium">Clausius Inequality &amp; Derivations</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-medium">p. 13–24 (Active)</span>
</div>
<div className="flex items-center justify-between p-space-xs bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-outline group-hover:text-primary">03</span>
<span className="font-body-sm text-body-sm text-on-surface">Reversible Heat Transfer &amp; State Functions</span>
</div>
<span className="font-label-sm text-label-sm text-outline">p. 25–48</span>
</div>
</div>
</div>
</div>

<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-space-xs">RAG Extraction Filters</span>
<div className="flex flex-wrap gap-space-xs">
<button className="bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container px-space-sm py-space-2xs font-label-sm text-label-sm transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[14px]">functions</span>
<span className="">Key Formulas</span>
</button>
<button className="bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container px-space-sm py-space-2xs font-label-sm text-label-sm transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[14px]">account_tree</span>
<span className="">Derivations</span>
</button>
<button className="bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-on-primary-container px-space-sm py-space-2xs font-label-sm text-label-sm transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[14px]">stars</span>
<span className="">High-Yield Exam Concepts</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md shadow-sm border border-outline-variant/30">
<div className="flex items-center gap-space-xs text-secondary mb-space-2xs">
<span className="material-symbols-outlined text-[16px]">history_edu</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Archivist Marginalia</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Recorded during Prof. Feyd-Rautha’s advanced thermophysics seminar. Note cross-reference with <span className="text-tertiary">Folio VII (Carathéodory’s Axiom)</span> for the alternative mathematical proof of absolute temperature.
        </p>
</div>
</section>

<section className="lg:col-span-7 flex flex-col h-full">

<div className="flex flex-col gap-space-lg flex-1">

<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm">
<span className="material-symbols-outlined text-[16px]">psychology</span>
</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Desert Scholar AI</div>
<div className="font-label-sm text-label-sm text-outline">Mentat Reasoning Engine • Semantic Grounding Enabled</div>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-xs py-1 text-outline hover:text-on-surface text-label-sm font-label-sm flex items-center gap-1" title="Clear session discourse">
<span className="material-symbols-outlined text-[14px]">refresh</span>
<span className="">Clear Thread</span>
</button>
</div>
</div>

<div className="flex flex-col items-end pl- space-md md:pl-space-xl">
<div className="flex items-center gap-space-xs mb-space-2xs text-outline font-label-sm text-label-sm">
<span className="">Archivist Al-Kadhimi</span>
<span className="">•</span>
<span className="">14:32 MST</span>
</div>
<div className="bg-surface-container p-space-md shadow-md max-w-xl text-left border border-outline-variant/30">
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Explain the Clausius inequality and why entropy generation is always non-negative in real processes.
            </p>
</div>
</div>

<div className="flex flex-col items-start pr- space-xs md:pr-space-md">
<div className="flex items-center gap-space-xs mb-space-2xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">psychology</span>
<span className="">Desert Scholar Mentat</span>
<span className="">•</span>
<span className="text-outline">Synthesized in 1.4s</span>
</div>

<div className="bg-surface-container p-space-lg shadow-xl relative w-full border border-outline-variant/30">

<div className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-sm py-1 mb-space-md border border-outline-variant/40">
<span className="material-symbols-outlined text-primary text-[15px]">verified</span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                Grounded Citation: Thermodynamics — Lecture 04, Pages 14–16, Theorem 3.2
              </span>
</div>

<div className="space-y-space-md text-on-surface">
<p className="font-body-md text-body-md leading-relaxed">
                In real processes, irreversibility is an unyielding law of the sands. The <strong className="text-tertiary">Clausius Inequality</strong> states that for any closed thermodynamic system undergoing an arbitrary cyclic process:
              </p>

<div className="bg-surface-container-low p-space-md my-space-sm flex flex-col items-center justify-center border border-outline-variant/30">
<div className="font-headline-sm text-headline-sm text-primary tracking-wider">
                  ∮ (δQ / T) ≤ 0
                </div>
<div className="font-label-sm text-label-sm text-secondary-fixed-dim mt-space-2xs text-center uppercase tracking-wider">
                  Where T represents the absolute temperature of the reservoir boundary
                </div>
</div>
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">Physical Intuition &amp; Entropy Generation</h3>
<p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  Think of entropy as the dispersion of thermal energy across available quantum states. When an irreversible mechanism occurs—such as mechanical friction, unresisted expansion, or heat conduction through a finite temperature gradient—organized potential degrades into disordered kinetic motion.
                </p>
</div>

<div className="bg-surface-container-high p-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm">
<div className="font-label-sm text-label-sm px-1.5 py-0.5 bg-primary-container text-on-primary-container font-bold">1</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-medium">Reversible Trajectory: Equilibrium Ideal</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      If all internal transformations are infinitely slow (quasi-static), no internal dissipated energy occurs. The cyclic integral sums precisely to zero: <code className="text-primary font-mono font-bold">ΔS_cycle = ∮ (δQ_rev / T) = 0</code>.
                    </p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="font-label-sm text-label-sm px-1.5 py-0.5 bg-primary-container text-on-primary-container font-bold">2</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-medium">Irreversible Degradation: Entropy Generation (S_gen)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      In actual dynamics, total entropy change is expressed as: <code className="text-primary font-mono font-bold">dS = (δQ / T) + δS_gen</code>, where <code className="text-primary font-mono font-bold">δS_gen &gt; 0</code>. Because S is a state variable, its cyclic integral must vanish (∮dS = 0), forcing the heat exchange integral to be negative: <code className="text-primary font-mono font-bold">∮ (δQ / T) = - S_gen &lt; 0</code>.
                    </p>
</div>
</div>
</div>
<p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Therefore, <span className="text-on-surface font-medium">entropy generation is never negative</span> because nature permits energy to disperse freely, but never spontaneously to concentrate without an external expenditure of work.
              </p>
</div>

<div className="mt-space-lg pt-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
                Suggested Scholar Follow-ups
              </span>
<div className="flex flex-col sm:flex-row flex-wrap gap-space-xs">
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs font-label-sm text-label-sm text-left transition-colors flex items-center justify-between gap-space-xs shadow-sm">
<span className="">Derive Clausius inequality from Kelvin-Planck statement</span>
<span className="material-symbols-outlined text-[14px] text-primary">arrow_forward</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs font-label-sm text-label-sm text-left transition-colors flex items-center justify-between gap-space-xs shadow-sm">
<span className="">Generate 3 conceptual exam questions from these pages</span>
<span className="material-symbols-outlined text-[14px] text-primary">psychology_alt</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs font-label-sm text-label-sm text-left transition-colors flex items-center justify-between gap-space-xs shadow-sm">
<span className="">Create quick flashcard for Spontaneous Irreversibility</span>
<span className="material-symbols-outlined text-[14px] text-primary">style</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-space-md bg-surface-container p-space-md shadow-xl sticky bottom-4 z-10 backdrop-blur-md bg-surface-container/95 border border-outline-variant/40">

<div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs mb-space-xs no-scrollbar">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider whitespace-nowrap">Rapid Prompts:</span>
<button className="bg-surface-container-high hover:bg-surface-bright text-secondary hover:text-on-surface px-space-sm py-1 font-label-sm text-label-sm whitespace-nowrap transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">summarize</span>
<span className="">Summarize this lecture</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-secondary hover:text-on-surface px-space-sm py-1 font-label-sm text-label-sm whitespace-nowrap transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">calculate</span>
<span className="">Extract all formulas</span>
</button>
<button className="bg-surface-container-high hover:bg-surface-bright text-secondary hover:text-on-surface px-space-sm py-1 font-label-sm text-label-sm whitespace-nowrap transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">quiz</span>
<span className="">Quiz me on weak spots</span>
</button>
</div>

<form className="relative flex items-center gap-space-xs bg-surface-container-lowest p-1.5 shadow-inner" onsubmit="event.preventDefault();">
<div className="pl-space-sm flex items-center pointer-events-none text-primary">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<input className="w-full bg-transparent px-space-sm py-space-xs font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none" placeholder="Ask anything about this document or enter a new inquiry..." type="text"/>
<div className="flex items-center gap-space-xs pr-1">
<button className="p-space-xs text-outline hover:text-on-surface transition-colors" title="Attach personal margin notes or folio" type="button">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button className="bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-lg text-label-lg px-space-md py-space-xs flex items-center gap-space-xs transition-colors shadow-sm cursor-pointer" type="submit">
<span className="font-medium">Inquire</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</form>
<div className="flex items-center justify-between text-outline font-label-sm text-label-sm pt-space-xs px-1">
<span className="">Grounding Scope: Thermodynamics Lecture 04 (Full 48-page Corpus)</span>
<span className="">Context token load: 4,120 / 32,000</span>
</div>
</div>
</div>
</section>
</div>
</div></main></div>

    </>
  );
}
