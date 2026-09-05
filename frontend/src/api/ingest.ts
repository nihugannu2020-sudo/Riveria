import { getSession } from './auth';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export const uploadFile = async (file: File, type: "pdf" | "timetable" = "pdf") => {
  const { session } = await getSession();
  const token = session?.access_token || "stub_token"; // fallback for local dev
  
  const formData = new FormData();
  formData.append("file", file);

  const endpoint = type === "pdf" ? "/ingest/pdf" : "/ingest/timetable";
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status}`);
  }

  return await response.json();
};

export const getResources = async () => {
  const { session } = await getSession();
  const token = session?.access_token || "stub_token"; // fallback for local dev
  
  const response = await fetch(`${API_URL}/ingest/resources`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status}`);
  }

  return await response.json();
};
