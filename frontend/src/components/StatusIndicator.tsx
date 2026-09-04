import React from 'react';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'processing' | 'warning' | 'error';
  label?: string;
  className?: string;
}

export default function StatusIndicator({ status, label, className = '' }: StatusIndicatorProps) {
  const configs = {
    online: { color: 'text-indigo', icon: '●' },
    offline: { color: 'text-outline-variant', icon: '○' },
    processing: { color: 'text-ochre', icon: '◐', animate: 'animate-spin-slow' },
    warning: { color: 'text-copper', icon: '▲' },
    error: { color: 'text-rust', icon: '■' }
  };

  const config = configs[status];
  const displayLabel = label || status.toUpperCase();

  return (
    <div className={`flex items-center gap-1.5 font-interface text-[10px] uppercase tracking-widest font-bold ${config.color} ${className}`}>
      <span className={`text-[12px] leading-none ${config.animate || ''}`}>{config.icon}</span>
      <span>{displayLabel}</span>
    </div>
  );
}
