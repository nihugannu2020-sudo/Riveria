import React from 'react';
import { loginWithGoogle } from '../api/auth';
import { useAuth } from '../App';
import { Navigate } from 'react-router-dom';
import RetroWindow from '../components/RetroWindow';
import RetroButton from '../components/RetroButton';
import PixelDecoration from '../components/PixelDecoration';

export default function Login() {
  const { session } = useAuth();
  
  if (session) {
    return <Navigate to="/planner" replace />;
  }

  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-space-xl relative overflow-hidden">
      {/* Background decoration */}
      <PixelDecoration type="grid" className="absolute top-10 left-10 scale-150 text-sand" />
      <PixelDecoration type="grid" className="absolute bottom-10 right-10 scale-150 text-sand" />
      
      <RetroWindow 
        title="AUTH.EXE" 
        icon="security" 
        className="w-full max-w-md"
        status="LOCKED"
      >
        <div className="flex flex-col items-center py-6 text-center">
          <div className="w-24 h-24 mb-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <circle cx="50" cy="50" r="46" stroke="currentColor" className="text-indigo" strokeWidth="1.5" strokeDasharray="3 3"/>
              <path d="M22 68C32 54 44 48 54 52C64 56 72 44 78 36" stroke="currentColor" className="text-rust" strokeWidth="2" strokeLinecap="round"/>
              <path d="M24 74C38 64 50 62 62 67C74 72 80 62 84 56" stroke="currentColor" className="text-ochre" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
              <circle cx="50" cy="30" r="8" fill="currentColor" className="text-copper" fillOpacity="0.9"/>
              <circle cx="50" cy="30" r="14" stroke="currentColor" className="text-indigo" strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
            <PixelDecoration type="stars" className="absolute -top-4 -right-4" />
          </div>
          
          <h1 className="font-display text-headline-lg text-indigo mb-2 tracking-tight">Riviera OS</h1>
          <p className="font-interface text-[11px] text-indigo/70 mb-8 max-w-xs uppercase tracking-widest leading-relaxed">
            Metrology Compliance & Archival Node. Authorization Required.
          </p>
          
          <RetroButton 
            onClick={loginWithGoogle}
            variant="primary"
            icon="fingerprint"
            fullWidth
            className="mb-4"
          >
            INITIALIZE SEQUENCE
          </RetroButton>
          
          <div className="w-full h-px bg-indigo/20 my-4" />
          
          <div className="flex justify-between w-full font-interface text-[9px] uppercase tracking-widest text-indigo/60">
            <span>TERMINAL ID: 0042</span>
            <span>SECURE LINK</span>
          </div>
        </div>
      </RetroWindow>
      
      <div className="absolute bottom-8 font-interface text-[10px] text-indigo/50 tracking-widest uppercase">
         © 2026 DESERT RESEARCH FOUNDATION
      </div>
    </div>
  );
}
