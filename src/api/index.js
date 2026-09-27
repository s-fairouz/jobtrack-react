import jobsData from "../data/jobs.json";
import userData from "../data/user.json";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const simulateUserError = false;

export const fetchUser = async () => {
  if (simulateUserError) {
    throw new Error("Simulated user fetch error");
  }

  try {
    const response = await fetch(`${API_URL}/user`);
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Graceful fallback if backend server isn't active
  }

  return userData;
};

export const fetchJobs = async () => {
  if (simulateUserError) throw new Error("Simulated user fetch error");

  try {
    const response = await fetch(`${API_URL}/jobs`);
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Graceful fallback if backend server isn't active
  }

  return jobsData;
};
