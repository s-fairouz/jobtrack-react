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
    <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-20 -top-20 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-200 border border-indigo-400/20 inline-block uppercase tracking-wider">
            Explore Careers
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Find Your Next Tech Role
          </h1>
          <p className="text-indigo-200 text-xs md:text-sm leading-relaxed">
            Discover top engineering, design, and product opportunities tailored
            to your expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1.5 text-indigo-300 mb-1">
              <BsBriefcase size={14} />
              <span className="text-[11px] font-semibold uppercase">Total</span>
            </div>
            <span className="text-xl font-black">{totalJobs}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <BsGlobe size={14} />
              <span className="text-[11px] font-semibold uppercase">
                Remote
              </span>
            </div>
            <span className="text-xl font-black">{remoteJobsCount}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <BsLightningChargeFill size={14} />
              <span className="text-[11px] font-semibold uppercase">
                Featured
              </span>
            </div>
            <span className="text-xl font-black">{featuredJobsCount}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 mb-1">
              <BsHeartFill size={14} />
              <span className="text-[11px] font-semibold uppercase">Saved</span>
            </div>
            <span className="text-xl font-black">{favoritesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatsHeader;
