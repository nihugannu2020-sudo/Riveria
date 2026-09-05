import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { getSession } from './api/auth';

// Import custom components
import DesktopShell from './components/DesktopShell';

// Import pages
import LLMChat from './pages/LLMChat';
import RAGChat from './pages/RAGChat';
import Planner from './pages/Planner';
import Resources from './pages/Resources';
import Forum from './pages/Forum';
import Login from './pages/Login';

// Define a stub session type since we are removing Supabase
type Session = { access_token: string; user: { id: string } };

const AuthContext = createContext<{ session: Session | null; loading: boolean }>({ session: null, loading: true });
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then(({ session }) => {
      setSession(session as Session | null);
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={{ session, loading }}>{children}</AuthContext.Provider>;
};

// Protect routes that require login
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  
  if (loading) return <div className="h-screen w-screen flex items-center justify-center bg-parchment text-indigo font-interface uppercase tracking-widest text-xs font-bold">Initializing System...</div>;
  if (!session) return <Navigate to="/login" replace />;
  
  return <DesktopShell>{children}</DesktopShell>;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/planner" replace />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/planner" element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          } />
          
          <Route path="/llm-chat" element={
            <ProtectedRoute>
              <LLMChat />
            </ProtectedRoute>
          } />
          
          <Route path="/rag-chat" element={
            <ProtectedRoute>
              <RAGChat />
            </ProtectedRoute>
          } />
          
          <Route path="/resources" element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          } />
          
          <Route path="/forum" element={
            <ProtectedRoute>
              <Forum />
            </ProtectedRoute>
          } />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}