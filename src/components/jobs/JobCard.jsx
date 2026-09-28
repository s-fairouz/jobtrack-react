import { useFavorites } from "../../hooks/useFavorites.js";
import JobCardGrid from "./JobCardGrid.jsx";
import JobCardList from "./JobCardList.jsx";

const JobCard = ({ job, viewMode = "grid" }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const cardProps = {
    job,
    isFavorite: isFavorite(job.id),
    onToggleFavorite: () => toggleFavorite(job.id),
  };

  return viewMode === "list" ? (
    <JobCardList {...cardProps} />
  ) : (
    <JobCardGrid {...cardProps} />
  );
};

export default JobCard;
