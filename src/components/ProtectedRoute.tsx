// ProtectedRoute.tsx
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '../utils/supabase'; // Adjust path to reach utils/supabase.ts

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Get the current session from Supabase
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) return null; // Or a spinner/loading indicator

  // Redirect to /auth if no session exists
  return session ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
