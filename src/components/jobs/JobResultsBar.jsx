import { BsGrid3X3GapFill, BsListTask } from "react-icons/bs";

const JobResultsBar = ({ count, total, viewMode, onViewChange }) => {
  return (
    <div className="flex items-center justify-between gap-4 px-1">
      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        Showing{" "}
        <span className="font-black text-slate-900 dark:text-white">
          {count}
        </span>{" "}
        of{" "}
        <span className="font-black text-slate-900 dark:text-white">
          {total}
        </span>{" "}
        jobs
      </div>

      <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs">
        <button
          type="button"
          onClick={() => onViewChange("grid")}
          className={`p-2 rounded-lg transition-all cursor-pointer ${
            viewMode === "grid"
              ? "bg-indigo-600 text-white shadow-xs font-bold"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title="Grid View"
          aria-label="Grid View"
        >
          <BsGrid3X3GapFill size={16} />
        </button>
        <button
          type="button"
          onClick={() => onViewChange("list")}
          className={`p-2 rounded-lg transition-all cursor-pointer ${
            viewMode === "list"
              ? "bg-indigo-600 text-white shadow-xs font-bold"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title="List View"
          aria-label="List View"
        >
          <BsListTask size={16} />
        </button>
      </div>
    </div>
  );
};

export default JobResultsBar;
