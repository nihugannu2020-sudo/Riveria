// Bypassing Supabase for local development access
export const loginWithGoogle = async () => {
  return { 
    data: { 
      session: { 
        access_token: 'dummy',
        user: { id: 'dummy', user_metadata: { full_name: 'Paul Atreides' } }
      }
    }, 
    error: null 
  };
};

export const logout = async () => {
  return { error: null };
};

export const getSession = async () => {
  return { 
    session: { 
      access_token: 'dummy',
      user: { id: 'dummy', user_metadata: { full_name: 'Paul Atreides' } }
    }, 
    error: null 
  };
};
