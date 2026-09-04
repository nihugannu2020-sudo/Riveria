import { getSession } from './auth';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export const getChatHistory = async () => {
  try {
    const { session } = await getSession();
    const token = session?.access_token;
    
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/history/`, {
      method: "GET",
      headers,
    });
    
    if (!response.ok) {
      // Stub for real implementation
      return [];
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return [];
  }
};
