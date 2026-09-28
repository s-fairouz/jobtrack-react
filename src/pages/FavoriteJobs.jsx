import { use } from "react";
import { Link } from "react-router";
import { BsHeartFill, BsBriefcase, BsArrowRight } from "react-icons/bs";
import { getJobResources } from "../resources/index.js";
import { useFavorites } from "../hooks/useFavorites.js";
import { useAppliedJobs } from "../hooks/useAppliedJobs.js";
import JobCardGrid from "../components/jobs/JobCardGrid.jsx";

const FavoriteJobs = () => {
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise) || [];
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const { isApplied } = useAppliedJobs();

  const favoriteJobs = jobs.filter((job) => favoriteIds.includes(job.id));

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center shrink-0">
            <BsHeartFill size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Saved Favourite Jobs
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
              Keep track of roles you are interested in applying to.
            </p>
          </div>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors self-start sm:self-auto"
        >
          <BsBriefcase size={16} />
          Browse All Jobs
        </Link>
      </div>

      {/* Jobs Grid / Empty state */}
      {favoriteJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteJobs.map((job) => (
            <JobCardGrid
              key={job.id}
              job={job}
              isFavorite={isFavorite(job.id)}
              isApplied={isApplied(job.id)}
              onToggleFavorite={() => toggleFavorite(job.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mx-auto">
            <BsHeartFill size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No favourite jobs yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
              Click the heart icon on any job card to save it here for quick access later.
            </p>
          </div>
          <Link
            to="/jobs"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            Explore Jobs
            <BsArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoriteJobs;