import React, { ButtonHTMLAttributes } from 'react';

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: string;
  fullWidth?: boolean;
}

export default function RetroButton({
  children,
  variant = 'secondary',
  icon,
  fullWidth = false,
  className = '',
  ...props
}: RetroButtonProps) {
  const baseClasses = "font-interface text-[12px] uppercase tracking-wider font-bold h-10 px-4 retro-border transition-all flex items-center justify-center gap-2 active:translate-y-px active:retro-inset";
  
  const variantClasses = {
    primary: "bg-rust text-parchment hover:bg-indigo hover:text-parchment border-indigo",
    secondary: "bg-parchment text-indigo hover:bg-sand border-indigo",
    danger: "bg-parchment text-rust hover:bg-rust hover:text-parchment border-rust"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      {children}
    </button>
  );
}
