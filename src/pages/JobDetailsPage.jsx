import { use, useState } from "react";
import { useParams } from "react-router";
import { getJobResources } from "../resources/index.js";
import { useFavorites } from "../hooks/useFavorites.js";
import JobDetails from "../components/jobs/JobDetails.jsx";
import JobNotFound from "../components/jobs/JobNotFound.jsx";

const JobDetailsPage = () => {
  const { id } = useParams();
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise) || [];
  const { isFavorite, toggleFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [applied, setApplied] = useState(false);

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

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="space-y-4">
      {applied && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 px-5 py-3.5 rounded-2xl flex items-center justify-between text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been received!
            </span>
          </div>
          <button
            type="button"
            onClick={() => setApplied(false)}
            className="text-xs font-semibold underline hover:opacity-80 cursor-pointer ml-3"
          >
            Dismiss
          </button>
        </div>
      )}
      <JobDetails
        job={job}
        isFavorite={isFavorite(job.id)}
        copied={copied}
        onToggleFavorite={() => toggleFavorite(job.id)}
        onShare={handleShare}
        onApply={handleApply}
      />
    </div>
  );
};

export default JobDetailsPage;

