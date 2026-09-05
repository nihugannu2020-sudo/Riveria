import React from 'react';

interface StickyNoteProps {
  content: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green';
  rotation?: number;
  className?: string;
}

const colorMap = {
  yellow: 'bg-[#FEF08A] text-amber-900',
  pink: 'bg-[#FBCFE8] text-pink-900',
  blue: 'bg-[#BAE6FD] text-cyan-900',
  green: 'bg-[#BBF7D0] text-emerald-900'
};

export default function StickyNote({ 
  content, 
  color = 'yellow', 
  rotation = 0,
  className = ''
}: StickyNoteProps) {
  return (
    <div 
      className={`relative p-4 shadow-md ${colorMap[color]} ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        minWidth: '150px',
        minHeight: '150px',
        boxShadow: '2px 4px 6px rgba(0,0,0,0.1), inset 0 -10px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Small drop shadow on the bottom right to make it look curled */}
      <div className="absolute bottom-0 right-0 w-4 h-4 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] rounded-bl-full pointer-events-none" />
      
      <div className="font-handwriting text-xl leading-snug break-words">
        {content}
      </div>
    </div>
  );
}
