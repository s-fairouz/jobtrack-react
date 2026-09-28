import React from "react";
import JobCardGrid from "../components/jobs/JobCardGrid.jsx";
import { useFavorites } from "../hooks/useFavorites.js";

const FavoriteItem = ({ job }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <JobCardGrid
      job={job}
      isFavorite={isFavorite(job.id)}
      onToggleFavorite={() => toggleFavorite(job.id)}
    />
  );
};

export default FavoriteItem;
