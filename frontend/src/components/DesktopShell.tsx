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
      {/* Binder / Notebook Edge (Left side) */}
      <aside className="w-full md:w-64 bg-sand/40 border-r-4 border-double border-indigo/20 z-20 flex flex-col shrink-0 relative">
        <div className="p-6 pb-2">
          <h1 className="font-marker text-3xl text-indigo rotate-[-2deg] mb-1">My Notebook</h1>
          <div className="font-handwriting text-xl text-indigo/70 rotate-[-1deg]">Property of Paul</div>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="flex-1 mt-8 space-y-4 overflow-x-auto md:overflow-x-visible flex md:flex-col items-start px-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`relative flex items-center gap-3 px-4 py-3 w-full transition-transform group shrink-0 md:shrink-1 scrapbook-shadow rounded-r-lg border-y border-r border-indigo/20 ${
                  isActive 
                    ? 'bg-parchment text-indigo translate-x-2' 
                    : 'bg-sand text-indigo hover:bg-parchment/80'
                }`}
                style={{ 
                  transformOrigin: 'left center',
                }}
              >
                <span className="material-symbols-outlined text-[20px] opacity-70">{item.icon}</span>
                <span className="font-marker text-lg">{item.name.replace('.', ' ')}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 hidden md:block mt-auto text-center">
          <div className="font-handwriting text-2xl text-indigo/60 rotate-2">"Fear is the mind-killer"</div>
        </div>
      </aside>

      {/* Main Desktop Area */}
      <main className="flex-1 p-4 md:p-8 z-10 overflow-auto relative bg-[radial-gradient(var(--color-sand)_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
