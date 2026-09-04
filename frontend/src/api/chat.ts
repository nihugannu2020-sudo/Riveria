import { getSession } from './auth';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export const sendMessage = async (message: string, workflow: string) => {
  console.log(`Sending to backend [${workflow}]:`, message);
  try {
    const { session } = await getSession();
    const token = session?.access_token;
    
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/chat/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        message,
        workflow,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data; // Returns ChatResponse schema
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return { 
      answer: "Sorry, there was an error connecting to the RoenRiviera service.",
      grounded: false,
      sources: []
    };
  }
};
