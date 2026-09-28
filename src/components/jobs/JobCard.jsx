import { useFavorites } from "../../hooks/useFavorites.js";
import { useAppliedJobs } from "../../hooks/useAppliedJobs.js";
import JobCardGrid from "./JobCardGrid.jsx";
import JobCardList from "./JobCardList.jsx";

const JobCard = ({ job, viewMode = "grid" }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isApplied } = useAppliedJobs();

  const cardProps = {
    job,
    isFavorite: isFavorite(job.id),
    isApplied: isApplied(job.id),
    onToggleFavorite: () => toggleFavorite(job.id),
  };

  return viewMode === "list" ? (
    <JobCardList {...cardProps} />
  ) : (
    <JobCardGrid {...cardProps} />
  );
};

export default JobCard;

