import { useOptimistic, startTransition } from "react";
import { FavoritesContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const FavoritesProvider = ({ children }) => {
  const [persistedFavoriteIds, setPersistedFavoriteIds] = useLocalStorage(
    "favorite_jobs",
    []
  );

  const safePersisted = Array.isArray(persistedFavoriteIds)
    ? persistedFavoriteIds
    : [];

  const [optimisticFavoriteIds, setOptimisticFavoriteIds] = useOptimistic(
    safePersisted,
    (currentList, targetJobId) => {
      const current = Array.isArray(currentList) ? currentList : [];
      if (current.includes(targetJobId)) {
        return current.filter((id) => id !== targetJobId);
      } else {
        return [...current, targetJobId];
      }
    }
  );

  const toggleFavorite = (jobId) => {
    startTransition(async () => {
      setOptimisticFavoriteIds(jobId);

      setPersistedFavoriteIds((prev) => {
        const current = Array.isArray(prev) ? prev : [];
        if (current.includes(jobId)) {
          return current.filter((id) => id !== jobId);
        } else {
          return [...current, jobId];
        }
      });
    });
  };

  const isFavorite = (jobId) => {
    return (
      Array.isArray(optimisticFavoriteIds) &&
      optimisticFavoriteIds.includes(jobId)
    );
  };

  const value = {
    favoriteIds: Array.isArray(optimisticFavoriteIds)
      ? optimisticFavoriteIds
      : [],
    toggleFavorite,
    isFavorite,
    count: Array.isArray(optimisticFavoriteIds)
      ? optimisticFavoriteIds.length
      : 0,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

