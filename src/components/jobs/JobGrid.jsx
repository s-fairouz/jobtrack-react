import { BsSearch } from "react-icons/bs";
import JobCard from "./JobCard.jsx";

const JobGrid = ({ jobs, viewMode, onClearFilters }) => {
  if (jobs.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-12 text-center shadow-xs space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
          <BsSearch size={32} />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No jobs found
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            We couldn't find any job postings matching your current search
            parameters.
          </p>
        </div>
        <button
          type="button"
          onClick={onClearFilters}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          : "flex flex-col gap-4"
      }
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default JobGrid;
