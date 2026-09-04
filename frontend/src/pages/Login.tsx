import React from 'react';
import { loginWithGoogle } from '../api/auth';
import { useAuth } from '../App';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const { session } = useAuth();
  
  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-space-xl relative overflow-hidden">
       <div className="w-48 h-48 mb-space-xl">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
           <circle cx="50" cy="50" r="46" stroke="#876846" strokeWidth="1.5" strokeDasharray="3 3"/>
           <path d="M22 68C32 54 44 48 54 52C64 56 72 44 78 36" stroke="#B08968" strokeWidth="2" strokeLinecap="round"/>
           <path d="M24 74C38 64 50 62 62 67C74 72 80 62 84 56" stroke="#D6BFA6" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
           <circle cx="50" cy="30" r="8" fill="#F3E9D7" fillOpacity="0.9"/>
           <circle cx="50" cy="30" r="14" stroke="#B08968" strokeWidth="1" strokeOpacity="0.4"/>
         </svg>
       </div>
       <h1 className="font-display text-headline-lg text-primary mb-space-xs text-center tracking-tight">Riviera</h1>
       <p className="font-body text-body-md text-on-surface-variant mb-space-2xl text-center max-w-md">
         An academic command center excavated from desert ruins.
       </p>
       <button 
         onClick={loginWithGoogle}
         className="bg-primary text-on-primary font-label text-label-lg px-space-2xl py-space-md hover:bg-secondary transition-colors cursor-pointer border border-primary"
         style={{ borderRadius: 0 }}
       >
         AUTHENTICATE
       </button>
       
       <div className="absolute bottom-space-xl text-label-sm text-outline tracking-widest uppercase">
          SECURE ACCESS GRANTED BY ARRAKIS ACADEMY
       </div>
    </div>
  );
}
