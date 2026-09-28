export const matchesFilters = (job, { searchTerm, categoryFilter, typeFilter, remoteOnly }) => {
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

  if (categoryFilter !== "All" && job.category !== categoryFilter) {
    return false;
  }

  if (typeFilter !== "All" && job.jobType !== typeFilter) {
    return false;
  }

  if (remoteOnly && !job.isRemote) {
    return false;
  }

  return true;
};

export const sortJobs = (a, b, sortBy) => {
  if (sortBy === "newest") {
    return new Date(b.postedAt || 0) - new Date(a.postedAt || 0);
  }
  if (sortBy === "company") {
    return (a.company || "").localeCompare(b.company || "");
  }
  if (sortBy === "salary") {
    const numA = parseInt((a.salary || "").replace(/[^0-9]/g, ""), 10) || 0;
    const numB = parseInt((b.salary || "").replace(/[^0-9]/g, ""), 10) || 0;
    return numB - numA;
  }
  return 0;
};