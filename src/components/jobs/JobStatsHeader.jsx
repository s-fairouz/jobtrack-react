import React from "react";
import {
  BsBriefcase,
  BsGlobe,
  BsLightningChargeFill,
  BsHeartFill,
} from "react-icons/bs";

const JobStatsHeader = ({ jobs, favoritesCount }) => {
  const totalJobs = jobs.length;
  const remoteJobsCount = jobs.filter((j) => j.isRemote).length;
  const featuredJobsCount = jobs.filter((j) => j.featured).length;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xs relative overflow-hidden transition-colors">
      {/* Decorative subtle ambient backdrop glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Heading & Description */}
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            Explore Tech Careers
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Find Your Next Tech Role
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-normal">
            Discover top engineering, design, and product opportunities tailored to your expertise.
          </p>
        </div>

        {/* Right Column: High-Contrast Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 text-center transition-all">
            <div className="flex items-center justify-center gap-1.5 text-indigo-600 dark:text-indigo-400 mb-1">
              <BsBriefcase size={15} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Total
              </span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {totalJobs}
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 text-center transition-all">
            <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
              <BsGlobe size={15} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Remote
              </span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {remoteJobsCount}
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 text-center transition-all">
            <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
              <BsLightningChargeFill size={15} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Featured
              </span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {featuredJobsCount}
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-700/60 text-center transition-all">
            <div className="flex items-center justify-center gap-1.5 text-rose-600 dark:text-rose-400 mb-1">
              <BsHeartFill size={15} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Saved
              </span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {favoritesCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatsHeader;
