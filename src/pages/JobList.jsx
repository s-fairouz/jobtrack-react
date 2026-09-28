import { use, useState } from "react";
import SearchBar from "../components/SearchBar";
import { getJobResources } from "../resources/index.js";
import { useFavorites } from "../hooks/useFavorites.js";
import JobStatsHeader from "../components/jobs/JobStatsHeader.jsx";
import JobResultsBar from "../components/jobs/JobResultsBar.jsx";
import JobGrid from "../components/jobs/JobGrid.jsx";
import { useJobFilters } from "../hooks/useJobFilters.JS";

const JobList = () => {
  const { jobsPromise } = getJobResources();
  const jobs = use(jobsPromise) || [];
  const { count: favoritesCount } = useFavorites();
  const [viewMode, setViewMode] = useState("grid");

  const {
    filteredJobs,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    typeFilter,
    setTypeFilter,
    remoteOnly,
    setRemoteOnly,
    sortBy,
    setSortBy,
    clearFilters,
  } = useJobFilters(jobs);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      <JobStatsHeader jobs={jobs} favoritesCount={favoritesCount} />

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
        onClearFilters={clearFilters}
      />

      <JobResultsBar
        count={filteredJobs.length}
        total={jobs.length}
        viewMode={viewMode}
        onViewChange={setViewMode}
      />

      <JobGrid jobs={filteredJobs} viewMode={viewMode} onClearFilters={clearFilters} />
    </div>
  );
};

export default JobList;