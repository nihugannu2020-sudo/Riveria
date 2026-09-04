import React from 'react';

interface PixelDecorationProps {
  type: 'grid' | 'crosshair' | 'corner' | 'stars';
  className?: string;
}

export default function PixelDecoration({ type, className = '' }: PixelDecorationProps) {
  if (type === 'grid') {
    return (
      <div className={`flex flex-wrap w-8 h-8 opacity-20 ${className}`}>
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 m-0.5 bg-indigo" />
        ))}
      </div>
    );
  }
  
  if (type === 'crosshair') {
    return (
      <div className={`relative w-4 h-4 opacity-30 ${className}`}>
        <div className="absolute top-1/2 left-0 w-full h-px bg-indigo -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-indigo -translate-x-1/2" />
      </div>
    );
  }

  if (type === 'corner') {
    return (
      <div className={`w-3 h-3 border-t border-l border-indigo opacity-40 ${className}`} />
    );
  }
  
  if (type === 'stars') {
    return (
      <div className={`relative w-12 h-12 opacity-30 ${className}`}>
        <div className="absolute top-1 left-2 w-1 h-1 bg-rust rounded-full" />
        <div className="absolute top-6 left-8 w-1 h-1 bg-ochre rounded-full" />
        <div className="absolute top-8 left-1 w-0.5 h-0.5 bg-indigo rounded-full" />
      </div>
    );
  }

  return null;
}
