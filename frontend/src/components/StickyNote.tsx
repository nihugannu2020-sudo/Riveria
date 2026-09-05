import React from 'react';

interface StickyNoteProps {
  content: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green';
  rotation?: number;
  className?: string;
  isEditable?: boolean;
  onChange?: (newContent: string) => void;
  onDelete?: () => void;
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
  className = '',
  isEditable = false,
  onChange,
  onDelete
}: StickyNoteProps) {
  return (
    <div 
      className={`relative p-4 shadow-md ${colorMap[color]} ${className} group`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        minWidth: '150px',
        minHeight: '150px',
        boxShadow: '2px 4px 6px rgba(0,0,0,0.1), inset 0 -10px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Small drop shadow on the bottom right to make it look curled */}
      <div className="absolute bottom-0 right-0 w-4 h-4 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] rounded-bl-full pointer-events-none" />
      
      {isEditable && onDelete && (
        <button 
          onClick={onDelete}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      )}

      {isEditable ? (
        <textarea
          value={content}
          onChange={(e) => onChange?.(e.target.value)}
          className="font-handwriting text-xl leading-snug break-words w-full h-full bg-transparent resize-none focus:outline-none"
          placeholder="Write a note..."
        />
      ) : (
        <div className="font-handwriting text-xl leading-snug break-words">
          {content}
        </div>
      )}
    </div>
  );
}
