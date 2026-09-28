const BADGE_STYLES = {
  "Full-time":
    "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  Hybrid:
    "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  Contract:
    "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
};
const DEFAULT_STYLE =
  "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";

const JobTypeBadge = ({ jobType }) => (
  <span
    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${BADGE_STYLES[jobType] ?? DEFAULT_STYLE}`}
  >
    {jobType}
  </span>
);

export default JobTypeBadge;
