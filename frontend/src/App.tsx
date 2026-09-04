import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { getSession } from './api/auth';
import type { Session } from '@supabase/supabase-js';

// Import newly scaffolded pages
import Dashboard from './pages/Dashboard';
import Timetable from './pages/Timetable';
import KnowledgeBase from './pages/KnowledgeBase';
import Chat from './pages/Chat';
import Login from './pages/Login';

const AuthContext = createContext<{ session: Session | null; loading: boolean }>({ session: null, loading: true });
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then(({ session }) => {
      setSession(session);
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>;
};

// Protect routes that require login
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  
  if (loading) return <div className="h-screen w-screen flex items-center justify-center bg-background text-on-background">Loading...</div>;
  if (!session) return <Navigate to="/login" replace />;
  
  return <>{children}</>;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/timetable" element={
            <ProtectedRoute>
              <Timetable />
            </ProtectedRoute>
          } />
          
          <Route path="/knowledge" element={
            <ProtectedRoute>
              <KnowledgeBase />
            </ProtectedRoute>
          } />
          
          <Route path="/chat" element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}