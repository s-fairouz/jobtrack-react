import { Link } from "react-router";
import {
  BsGeoAlt,
  BsCashStack,
  BsClock,
  BsLightningChargeFill,
  BsArrowRight,
} from "react-icons/bs";
import JobTypeBadge from "./JobTypeBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import { formatPostedDate } from "../../utils/formatPostedDate.js";

const JobCardList = ({ job, isFavorite, onToggleFavorite }) => {
  const {
    id,
    title,
    company,
    companyLogo,
    location,
    jobType,
    salary,
    postedAt,
    tags = [],
    isRemote,
    featured,
  } = job;

  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-200">
      {featured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
          <BsLightningChargeFill size={10} />
          Featured
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <img
            src={companyLogo}
            alt={company}
            className="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 shrink-0"
            onError={(e) => (e.target.style.display = "none")}
          />

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={`/jobs/${id}`}
                className="font-bold text-base text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
              >
                {title}
              </Link>
              <JobTypeBadge jobType={jobType} />
              {isRemote && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Remote
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <BsGeoAlt size={12} className="text-slate-400" />
                {location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold">
                <BsCashStack size={12} />
                {salary}
              </span>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 sm:hidden">
            <BsClock size={12} /> {formatPostedDate(postedAt)}
          </span>
          <div className="flex items-center gap-2">
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={onToggleFavorite}
            />
            <Link
              to={`/jobs/${id}`}
              className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              Details
              <BsArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardList;
