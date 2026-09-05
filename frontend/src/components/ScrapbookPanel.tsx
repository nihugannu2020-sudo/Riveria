import React, { ReactNode } from 'react';

interface ScrapbookPanelProps {
  children: ReactNode;
  className?: string;
  title?: string;
  tapePosition?: 'top' | 'top-left' | 'top-right' | 'none';
  rotation?: number;
}

export default function ScrapbookPanel({ 
  children, 
  className = '', 
  title, 
  tapePosition = 'top',
  rotation = 0
}: ScrapbookPanelProps) {
  return (
    <div 
      className={`relative bg-parchment scrapbook-shadow scrapbook-border p-6 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape Decoration */}
      {tapePosition === 'top' && (
        <div className="tape top-[-10px] left-1/2 -translate-x-1/2" />
      )}
      {tapePosition === 'top-left' && (
        <div className="tape top-[-5px] left-[-15px] -rotate-45" />
      )}
      {tapePosition === 'top-right' && (
        <div className="tape top-[-5px] right-[-15px] rotate-45" />
      )}

      {title && (
        <h2 className="font-marker text-2xl text-indigo mb-4 border-b-2 border-dashed border-indigo/20 pb-2">
          {title}
        </h2>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
