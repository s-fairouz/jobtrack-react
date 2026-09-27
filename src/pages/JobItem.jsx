import React, { useState, use } from "react";
import { Link, useParams } from "react-router";
import {
  BsGeoAlt,
  BsGlobe,
  BsCashStack,
  BsClock,
  BsPeople,
  BsHeart,
  BsHeartFill,
  BsLightningChargeFill,
  BsArrowLeft,
  BsCheckCircleFill,
  BsShare,
  BsBuilding,
  BsArrowRight,
} from "react-icons/bs";
import { useFavorites } from "../hooks/useFavorites.js";
import { getJobResources } from "../resources/index.js";

function formatPostedDate(dateString) {
  if (!dateString) return "Recently";
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return dateString;
}

const JobTypeBadge = ({ jobType }) => {
  let badgeStyles = "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
  if (jobType === "Full-time") {
    badgeStyles = "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20";
  } else if (jobType === "Hybrid") {
    badgeStyles = "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20";
  } else if (jobType === "Contract") {
    badgeStyles = "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20";
  }

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyles}`}>
      {jobType}
    </span>
  );
};

const JobItem = ({ job: propJob, viewMode = "grid" }) => {
  const params = useParams();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [copied, setCopied] = useState(false);

  // If no job prop was provided, this is rendered via the /jobs/:id route
  let targetJob = propJob;
  if (!targetJob && params.id) {
    const { jobsPromise } = getJobResources();
    const jobs = use(jobsPromise);
    targetJob = jobs.find((j) => String(j.id) === String(params.id));
  }

  if (!targetJob) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center shadow-xs">
        <BsBuilding className="mx-auto text-slate-400 mb-3" size={40} />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Job Not Found</h2>
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
  }

  const {
    id,
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
  } = targetJob;

  const favorited = isFavorite(id);

  // RENDER DETAILED VIEW IF Standalone route (/jobs/:id)
  if (!propJob) {
    const handleShare = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <BsArrowLeft size={16} />
          Back to Jobs
        </Link>

        {/* Hero Header Card */}
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
                onError={(e) => {
                  e.target.style.display = "none";
                }}
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

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleShare}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer relative"
                title="Share job"
              >
                <BsShare size={18} />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => toggleFavorite(id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  favorited
                    ? "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400"
                    : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
                title={favorited ? "Remove from favorites" : "Add to favorites"}
              >
                {favorited ? <BsHeartFill size={18} /> : <BsHeart size={18} />}
              </button>

              <button
                type="button"
                onClick={() => {
                  alert(`Application submitted for ${title} at ${company}!`);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all cursor-pointer flex items-center gap-2"
              >
                Apply Now
                <BsArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Job Description</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* Requirements */}
            {requirements.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Requirements & Qualifications</h2>
                <ul className="space-y-3">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-normal">
                      <BsCheckCircleFill className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills & Tags */}
            {tags.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Required Skills & Tech Stack</h2>
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
              </div>
            )}
          </div>

          {/* Sidebar Cards */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Job Overview
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <BsCashStack size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Salary Range</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{salary}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <BsPeople size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Applicants</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{applicantsCount} Candidates</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <BsGlobe size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Workplace</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {isRemote ? "Remote Position" : "On-site / Office"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER LIST CARD VIEW (Grid or List mode)
  if (viewMode === "list") {
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
              onError={(e) => {
                e.target.style.display = "none";
              }}
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
                <span className="font-semibold text-slate-800 dark:text-slate-200">{company}</span>
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

          {/* Right Action Section */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800 shrink-0">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 sm:hidden">
              <BsClock size={12} /> {formatPostedDate(postedAt)}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleFavorite(id)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  favorited
                    ? "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400"
                    : "border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
                aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
              >
                {favorited ? <BsHeartFill size={16} /> : <BsHeart size={16} />}
              </button>

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
  }

  // DEFAULT GRID CARD VIEW
  return (
    <div className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {featured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
          <BsLightningChargeFill size={10} />
          Featured
        </div>
      )}

      {/* Top Card Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={companyLogo}
              alt={company}
              className="w-12 h-12 rounded-xl object-cover border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 shrink-0"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                {company}
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <BsGeoAlt size={12} className="text-slate-400 shrink-0" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toggleFavorite(id)}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              favorited
                ? "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400"
                : "border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            {favorited ? <BsHeartFill size={16} /> : <BsHeart size={16} />}
          </button>
        </div>

        {/* Title */}
        <div>
          <Link
            to={`/jobs/${id}`}
            className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 block"
          >
            {title}
          </Link>

          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <JobTypeBadge jobType={jobType} />
            {isRemote && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <BsGlobe size={10} /> Remote
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
              {category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px]">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 block uppercase font-bold tracking-wider">
            Salary
          </span>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white text-indigo-600 dark:text-indigo-400">
            {salary}
          </span>
        </div>

        <Link
          to={`/jobs/${id}`}
          className="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1 shadow-xs"
        >
          View Details
          <BsArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default JobItem;
