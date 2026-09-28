import { use } from "react";
import { Link } from "react-router";
import {
  BsCheckCircleFill,
  BsBriefcase,
  BsArrowRight,
  BsSendCheck,
} from "react-icons/bs";
import { getJobResources } from "../resources/index.js";
import { useAppliedJobs } from "../hooks/useAppliedJobs.js";
import AppliedJobCard from "../components/jobs/AppliedJobCard.jsx";

const AppliedJobs = () => {
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise) || [];
  const { appliedJobs, withdrawApplication } = useAppliedJobs();

  const appliedListWithJobs = appliedJobs
    .map((app) => ({
      application: app,
      job: jobs.find((j) => String(j.id) === String(app.jobId)),
    }))
    .filter((item) => item.job !== undefined);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
   
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center shrink-0">
            <BsSendCheck size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Applied Jobs
              </h1>
              {appliedJobs.length > 0 && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  {appliedJobs.length}
                </span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium mt-0.5">
              Track the roles you've applied to and keep your pipeline
              organized.
            </p>
          </div>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors self-start sm:self-auto"
        >
          <BsBriefcase size={16} />
          Browse More Jobs
        </Link>
      </div>

  
      {appliedListWithJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {appliedListWithJobs.map(({ application, job }) => (
            <AppliedJobCard
              key={application.jobId}
              application={application}
              job={job}
              onWithdraw={withdrawApplication}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mx-auto">
            <BsCheckCircleFill size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No applications submitted yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
              Find positions that match your background, click "Apply Now", and
              track them right here.
            </p>
          </div>
          <Link
            to="/jobs"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            Explore Job Openings
            <BsArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
