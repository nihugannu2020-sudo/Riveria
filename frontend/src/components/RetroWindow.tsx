import React, { ReactNode } from 'react';

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: string;
  status?: string;
  onClose?: () => void;
}

export default function RetroWindow({
  title,
  children,
  className = '',
  icon = 'apps',
  status,
  onClose
}: RetroWindowProps) {
  return (
    <div className={`retro-border bg-parchment flex flex-col retro-shadow mb-space-md ${className}`}>
      {/* Title Bar */}
      <div className="h-8 border-b border-indigo bg-sand flex items-center justify-between px-2 select-none">
        <div className="flex items-center gap-2">
          {/* Faux window controls */}
          <div className="flex gap-1.5">
            <button 
              onClick={onClose}
              className="w-3 h-3 border border-indigo rounded-full hover:bg-rust transition-colors focus:outline-none"
              aria-label="Close"
            />
            <div className="w-3 h-3 border border-indigo rounded-full" />
            <div className="w-3 h-3 border border-indigo rounded-full" />
          </div>
          
          <div className="flex items-center gap-1.5 ml-2 text-indigo">
            <span className="material-symbols-outlined text-[14px]">{icon}</span>
            <span className="font-interface text-[11px] font-bold tracking-widest uppercase">{title}</span>
          </div>
        </div>
        
        {status && (
          <div className="flex items-center gap-1.5 text-indigo">
            <span className="font-interface text-[10px] uppercase tracking-wider">{status}</span>
          </div>
        )}
      </div>
      
      {/* Window Content */}
      <div className="flex-1 overflow-auto relative bg-parchment">
        {/* Subtle decorative grid in background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-5" 
          style={{ backgroundImage: 'radial-gradient(var(--color-indigo) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative z-10 p-space-md">
          {children}
        </div>
      </div>
    </div>
  );
}
