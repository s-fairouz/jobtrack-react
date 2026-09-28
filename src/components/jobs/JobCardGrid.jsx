import { Link } from "react-router";
import {
  BsGeoAlt,
  BsGlobe,
  BsLightningChargeFill,
  BsArrowRight,
} from "react-icons/bs";
import JobTypeBadge from "./JobTypeBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";

const JobCardGrid = ({ job, isFavorite, isApplied, onToggleFavorite }) => {
  const {
    id,
    title,
    company,
    companyLogo,
    location,
    jobType,
    category,
    salary,
    description,
    tags = [],
    isRemote,
    featured,
  } = job;

  return (
    <div className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/60 dark:hover:border-indigo-500/60 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {featured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
          <BsLightningChargeFill size={10} />
          Featured
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={companyLogo}
              alt={company}
              className="w-12 h-12 rounded-xl object-cover border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 shrink-0"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                {company}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <BsGeoAlt size={12} className="text-slate-400 shrink-0" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={onToggleFavorite}
            className="p-2"
          />
        </div>

        <div>
          <Link
            to={`/jobs/${id}`}
            className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 block"
          >
            {title}
          </Link>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {isApplied && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                ✓ Applied
              </span>
            )}
            <JobTypeBadge jobType={jobType} />
            {isRemote && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                <BsGlobe size={10} /> Remote
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
              {category}
            </span>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/50 dark:border-slate-700/50"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-medium">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-bold tracking-wider">
            Salary
          </span>
          <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
            {salary}
          </span>
        </div>
        <Link
          to={`/jobs/${id}`}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm shadow-indigo-500/25 cursor-pointer"
        >
          View Details
          <BsArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default JobCardGrid;
