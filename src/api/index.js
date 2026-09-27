const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const simulateUserError = false;

export const fetchUser = async () => {
  if (simulateUserError) {
    throw new Error("Simulated user fetch error");
  }

  const response = await fetch(`${API_URL}/user`);

  if (!response.ok) {
    throw new Error(
      `User request failed (${response.status} ${response.statusText})`,
    );
  }

  return response.json();
};
