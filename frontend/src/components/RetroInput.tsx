import React, { InputHTMLAttributes } from 'react';

interface RetroInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  fullWidth?: boolean;
}

export default function RetroInput({
  label,
  error,
  fullWidth = true,
  className = '',
  id,
  ...props
}: RetroInputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : 'retro-input');
  
  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      <label htmlFor={inputId} className="font-interface text-[10px] uppercase tracking-widest text-indigo font-bold">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          className={`h-10 px-3 bg-parchment retro-border w-full font-body text-[14px] text-indigo placeholder:text-indigo/40 focus:outline-none focus:bg-sand transition-colors ${error ? 'border-rust' : 'border-indigo'}`}
          {...props}
        />
        {/* Subtle decorative corner tick */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-indigo pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-indigo pointer-events-none" />
      </div>
      {error && (
        <span className="font-interface text-[10px] text-rust uppercase tracking-wider">{error}</span>
      )}
    </div>
  );
}
