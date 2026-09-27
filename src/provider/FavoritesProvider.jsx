import { FavoritesContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useLocalStorage("favorite_jobs", [
    "job-101",
    "job-102",
  ]);

  const toggleFavorite = (jobId) => {
    setFavoriteIds((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      if (current.includes(jobId)) {
        return current.filter((id) => id !== jobId);
      } else {
        return [...current, jobId];
      }
    });
  };

  const isFavorite = (jobId) => {
    return Array.isArray(favoriteIds) && favoriteIds.includes(jobId);
  };

  const value = {
    favoriteIds: Array.isArray(favoriteIds) ? favoriteIds : [],
    toggleFavorite,
    isFavorite,
    count: Array.isArray(favoriteIds) ? favoriteIds.length : 0,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
