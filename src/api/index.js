import user from "../data/user.json";

export const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) reject(new Error("Failed to fetch Users"));
      else resolve(user);
    }, 1500);
  });
};

