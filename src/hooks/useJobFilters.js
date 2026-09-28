import { useState } from "react";
import { matchesFilters, sortJobs } from "../utils/jobFilters.js";

export const useJobFilters = (jobs) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setTypeFilter("All");
    setRemoteOnly(false);
    setSortBy("newest");
  };

  const filteredJobs = jobs
    .filter((job) =>
      matchesFilters(job, { searchTerm, categoryFilter, typeFilter, remoteOnly })
    )
    .sort((a, b) => sortJobs(a, b, sortBy));

  return {
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
  };
};