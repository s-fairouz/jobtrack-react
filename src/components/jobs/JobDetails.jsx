import {
  BsGeoAlt,
  BsGlobe,
  BsCashStack,
  BsClock,
  BsPeople,
  BsLightningChargeFill,
  BsCheckCircleFill,
  BsShare,
  BsBuilding,
  BsArrowRight,
  BsArrowLeft,
} from "react-icons/bs";
import { Link } from "react-router";
import JobTypeBadge from "./JobTypeBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import { formatPostedDate } from "../../utils/formatPostedDate.js";

const Section = ({ title, children }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
      {title}
    </h2>
    {children}
  </div>
);

const OverviewRow = ({ icon: Icon, label, value, iconStyles }) => (
  <div className="flex items-center gap-3.5">
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconStyles}`}
    >
      <Icon size={20} />
    </div>
    <div>
      <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
        {label}
      </span>
      <span className="text-sm font-bold text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  </div>
);

const JobDetails = ({
  job,
  isFavorite,
  isApplied = false,
  copied,
  onToggleFavorite,
  onShare,
  onApply,
}) => {
  const {
    title,
    company,
    companyLogo,
    location,
    jobType,
    category,
    salary,
    postedAt,
    description,
    requirements = [],
    tags = [],
    isRemote,
    featured,
    applicantsCount,
  } = job;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Link
        to="/jobs"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <BsArrowLeft size={16} />
        Back to Jobs
      </Link>

      {/* Hero */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
        {featured && (
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs flex items-center gap-1">
            <BsLightningChargeFill size={12} />
            Featured Role
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src={companyLogo}
              alt={company}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border border-slate-200/80 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-slate-800 shrink-0"
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {category}
                </span>
                <JobTypeBadge jobType={jobType} />
                {isRemote && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <BsGlobe size={11} /> Remote
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400 text-sm font-medium">
                <span className="flex items-center gap-1.5 text-slate-900 dark:text-slate-200 font-semibold">
                  <BsBuilding size={14} className="text-slate-400" />
                  {company}
                </span>
                <span className="flex items-center gap-1.5">
                  <BsGeoAlt size={14} className="text-slate-400" />
                  {location}
                </span>
                <span className="flex items-center gap-1.5">
                  <BsClock size={14} className="text-slate-400" />
                  Posted {formatPostedDate(postedAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onShare}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer relative"
              aria-label="Share job"
            >
              <BsShare size={18} />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={onToggleFavorite}
              iconSize={18}
              className="p-3"
            />

            <button
              type="button"
              onClick={onApply}
              disabled={isApplied}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isApplied
                  ? "bg-emerald-600 dark:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 cursor-default"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30"
              }`}
            >
              {isApplied ? (
                <>
                  <BsCheckCircleFill size={16} />
                  Applied
                </>
              ) : (
                <>
                  Apply Now
                  <BsArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Section title="Job Description">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </Section>

          {requirements.length > 0 && (
            <Section title="Requirements & Qualifications">
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-normal"
                  >
                    <BsCheckCircleFill
                      className="text-emerald-500 shrink-0 mt-0.5"
                      size={16}
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {tags.length > 0 && (
            <Section title="Required Skills & Tech Stack">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5 self-start">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
            Job Overview
          </h3>
          <div className="space-y-4">
            <OverviewRow
              icon={BsCashStack}
              label="Salary Range"
              value={salary}
              iconStyles="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
            />
            <OverviewRow
              icon={BsPeople}
              label="Applicants"
              value={`${applicantsCount} Candidates`}
              iconStyles="bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400"
            />
            <OverviewRow
              icon={BsGlobe}
              label="Workplace"
              value={isRemote ? "Remote Position" : "On-site / Office"}
              iconStyles="bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
