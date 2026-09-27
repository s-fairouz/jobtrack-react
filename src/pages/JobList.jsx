import { use, useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import { getJobResources } from "../resources/index.js";
import JobItem from "./JobItem.jsx";
import {
  BsGrid3X3GapFill,
  BsListTask,
  BsBriefcase,
  BsGlobe,
  BsLightningChargeFill,
  BsHeartFill,
  BsSearch,
} from "react-icons/bs";
import { useFavorites } from "../hooks/useFavorites.js";

const JobList = () => {
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise) || [];
  const { count: favoritesCount } = useFavorites();

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setTypeFilter("All");
    setRemoteOnly(false);
    setSortBy("newest");
  };

  // Filter & Sort Logic
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        // Search term check
        if (searchTerm.trim() !== "") {
          const query = searchTerm.toLowerCase();
          const matchTitle = job.title?.toLowerCase().includes(query);
          const matchCompany = job.company?.toLowerCase().includes(query);
          const matchLocation = job.location?.toLowerCase().includes(query);
          const matchDesc = job.description?.toLowerCase().includes(query);
          const matchTags = job.tags?.some((t) => t.toLowerCase().includes(query));

          if (!matchTitle && !matchCompany && !matchLocation && !matchDesc && !matchTags) {
            return false;
          }
        }

        // Category filter check
        if (categoryFilter !== "All" && job.category !== categoryFilter) {
          return false;
        }

        // Job type filter check
        if (typeFilter !== "All" && job.jobType !== typeFilter) {
          return false;
        }

        // Remote filter check
        if (remoteOnly && !job.isRemote) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return new Date(b.postedAt || 0) - new Date(a.postedAt || 0);
        } else if (sortBy === "company") {
          return (a.company || "").localeCompare(b.company || "");
        } else if (sortBy === "salary") {
          const numA = parseInt((a.salary || "").replace(/[^0-9]/g, ""), 10) || 0;
          const numB = parseInt((b.salary || "").replace(/[^0-9]/g, ""), 10) || 0;
          return numB - numA;
        }
        return 0;
      });
  }, [jobs, searchTerm, categoryFilter, typeFilter, remoteOnly, sortBy]);

  // Quick stats
  const totalJobs = jobs.length;
  const remoteJobsCount = jobs.filter((j) => j.isRemote).length;
  const featuredJobsCount = jobs.filter((j) => j.featured).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Header Banner & Quick Stats */}
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
              Discover top engineering, design, and product opportunities tailored to your expertise.
            </p>
          </div>

          {/* Stat Cards */}
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
                <span className="text-[11px] font-semibold uppercase">Remote</span>
              </div>
              <span className="text-xl font-black">{remoteJobsCount}</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                <BsLightningChargeFill size={14} />
                <span className="text-[11px] font-semibold uppercase">Featured</span>
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

      {/* Interactive Search & Filter Control Bar */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        remoteOnly={remoteOnly}
        onRemoteToggle={setRemoteOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={filteredJobs.length}
        onClearFilters={handleClearFilters}
      />

      {/* Result Meta Bar & View Switcher */}
      <div className="flex items-center justify-between gap-4 px-1">
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Showing <span className="font-bold text-slate-900 dark:text-white">{filteredJobs.length}</span> of{" "}
          <span className="font-bold text-slate-900 dark:text-white">{totalJobs}</span> jobs
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            title="Grid View"
            aria-label="Grid View"
          >
            <BsGrid3X3GapFill size={16} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === "list"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            title="List View"
            aria-label="List View"
          >
            <BsListTask size={16} />
          </button>
        </div>
      </div>

      {/* Jobs Container */}
      {filteredJobs.length > 0 ? (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              : "flex flex-col gap-4"
          }
        >
          {filteredJobs.map((job) => (
            <JobItem key={job.id} job={job} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        /* Empty State Card */
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <BsSearch size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No jobs found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
              We couldn't find any job postings matching your current search parameters.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClearFilters}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
