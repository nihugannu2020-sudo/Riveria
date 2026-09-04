import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PixelDecoration from './PixelDecoration';

interface DesktopShellProps {
  children: ReactNode;
}

export default function DesktopShell({ children }: DesktopShellProps) {
  const location = useLocation();
  
  const navItems = [
    { name: 'STUDY.PLAN', path: '/planner', icon: 'calendar_view_week' },
    { name: 'LLM.COMM', path: '/llm-chat', icon: 'psychology' },
    { name: 'RAG.QUERY', path: '/rag-chat', icon: 'plagiarism' },
    { name: 'RESOURCES.DB', path: '/resources', icon: 'folder_open' },
    { name: 'PEER.FORUM', path: '/forum', icon: 'groups' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden bg-parchment text-indigo">
      {/* OS Background - Dune vibe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Sun/Moon silhouette */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sand/40 blur-xl" />
        {/* Dune contours */}
        <svg className="absolute bottom-0 w-full h-1/3 text-dune/20 preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 L0,50 Q25,20 50,60 T100,40 L100,100 Z" fill="currentColor" />
          <path d="M0,100 L0,70 Q25,40 50,80 T100,60 L100,100 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Global Status Bar (Top on mobile, left on desktop) */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-indigo bg-sand/80 backdrop-blur-sm z-20 flex flex-col shrink-0 relative">
        <PixelDecoration type="corner" className="absolute top-2 left-2" />
        <PixelDecoration type="corner" className="absolute bottom-2 right-2 rotate-180" />
        
        <div className="p-4 border-b border-indigo flex items-center gap-3">
          <div className="w-8 h-8 bg-rust border border-indigo flex items-center justify-center retro-inset">
            <span className="material-symbols-outlined text-parchment text-[18px]">adjust</span>
          </div>
          <div>
            <h1 className="font-display text-[16px] leading-tight font-bold text-indigo">SYSTEM BOOT</h1>
            <div className="font-interface text-[9px] uppercase tracking-widest text-indigo/70">Arrakis OS v1.0</div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-x-auto md:overflow-x-visible flex md:flex-col gap-2 md:gap-0 items-start">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 w-full retro-border transition-colors group shrink-0 md:shrink-1 ${
                  isActive 
                    ? 'bg-indigo text-parchment retro-inset' 
                    : 'bg-parchment text-indigo hover:bg-sand'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                <span className="font-interface text-[11px] font-bold tracking-wider">{item.name}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 bg-rust rounded-full" />}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-indigo hidden md:block">
          <div className="font-interface text-[9px] text-indigo/60 uppercase tracking-widest mb-1">Coordinates</div>
          <div className="font-interface text-[11px] font-bold">LAT 23.91 LONG 41.72</div>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-rust animate-pulse rounded-full" />
            <span className="font-interface text-[10px] uppercase">Connection Established</span>
          </div>
        </div>
      </aside>

      {/* Main Desktop Area */}
      <main className="flex-1 p-4 md:p-8 z-10 overflow-auto relative">
        <PixelDecoration type="crosshair" className="absolute top-8 right-8 hidden lg:block" />
        <PixelDecoration type="grid" className="absolute bottom-8 right-8 hidden lg:block" />
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
