import { Link } from "react-router";
import {
  BsCheckCircleFill,
  BsBuilding,
  BsGeoAlt,
  BsCashStack,
  BsCalendarCheck,
  BsTrash,
  BsArrowRight,
} from "react-icons/bs";
import JobTypeBadge from "./JobTypeBadge.jsx";
import { formatPostedDate } from "../../utils/formatPostedDate.js";

const AppliedJobCard = ({ application, job, onWithdraw }) => {
  if (!job) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          Job {application.jobId} (No longer available)
        </span>
        <button
          onClick={() => onWithdraw(application.jobId)}
          className="text-xs text-rose-600 hover:underline cursor-pointer"
        >
          Remove
        </button>
      </div>
    );
  }

  const formattedAppliedDate = application.appliedAt
    ? formatPostedDate(application.appliedAt)
    : "Recently";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800/80 rounded-2xl p-5 sm:p-6 shadow-xs transition-all duration-200 flex flex-col justify-between gap-4">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <BsBuilding className="text-slate-400" size={20} />
            )}
          </div>
          <div>
            <Link
              to={`/jobs/${job.id}`}
              className="font-bold text-slate-900 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1"
            >
              {job.title}
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {job.company}
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shrink-0">
          <BsCheckCircleFill size={12} className="text-emerald-500" />
          {application.status || "Applied"}
        </span>
      </div>

      {/* Mid Info Details */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1">
          <BsGeoAlt size={14} className="text-slate-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <BsCashStack size={14} className="text-slate-400" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {job.salary}
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <BsCalendarCheck
            size={14}
            className="text-emerald-600 dark:text-emerald-400"
          />
          <span>Applied {formattedAppliedDate}</span>
        </div>
        <div className="ml-auto">
          <JobTypeBadge jobType={job.jobType} />
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <button
          type="button"
          onClick={() => onWithdraw(job.id)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
        >
          <BsTrash size={13} />
          Withdraw Application
        </button>

        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
        >
          View Job Details
          <BsArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobCard;
