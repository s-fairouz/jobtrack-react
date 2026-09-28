import { use, useState } from "react";
import { useParams } from "react-router";
import { getJobResources } from "../resources/index.js";
import { useFavorites } from "../hooks/useFavorites.js";
import JobDetails from "../components/jobs/JobDetails.jsx";
import JobNotFound from "../components/jobs/JobNotFound.jsx";

const JobDetailsPage = () => {
  const { id } = useParams();
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);

  const job = jobs.find((j) => String(j.id) === id);

  if (!job) return <JobNotFound />;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <JobDetails
      job={job}
      isFavorite={isFavorite(job.id)}
      copied={copied}
      onToggleFavorite={() => toggleFavorite(job.id)}
      onShare={handleShare}
      onApply={() =>
        alert(`Application submitted for ${job.title} at ${job.company}!`)
      }
    />
  );
};

export default JobDetailsPage;
