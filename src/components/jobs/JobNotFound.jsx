import { Link } from "react-router";
import { BsArrowLeft, BsBuilding } from "react-icons/bs";

const JobNotFound = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center shadow-xs">
    <BsBuilding className="mx-auto text-slate-400 mb-3" size={40} />
    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
      Job Not Found
    </h2>
    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 mb-6">
      The requested job posting may have been removed or does not exist.
    </p>
    <Link
      to="/jobs"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
    >
      <BsArrowLeft size={16} />
      Back to All Jobs
    </Link>
  </div>
);

export default JobNotFound;
