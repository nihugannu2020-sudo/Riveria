// Stub implementation for development without Supabase
export const loginWithGoogle = async () => {
  // Simulate successful login by setting a dummy token in localStorage
  localStorage.setItem('dummy_token', 'default-dev-token');
  window.location.href = '/planner';
  return { error: null };
};

export const logout = async () => {
  localStorage.removeItem('dummy_token');
  window.location.href = '/';
  return { error: null };
};

export const getSession = async () => {
  const token = localStorage.getItem('dummy_token');
  if (token) {
    return { session: { access_token: token, user: { id: 'default-dev-user-id' } }, error: null };
  }
  return { session: null, error: null };
};
