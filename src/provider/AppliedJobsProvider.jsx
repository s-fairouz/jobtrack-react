import { useOptimistic, startTransition } from "react";
import { AppliedJobsContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AppliedJobsProvider = ({ children }) => {
  const [persistedApplications, setPersistedApplications] = useLocalStorage(
    "applied_jobs",
    []
  );

  const safePersisted = Array.isArray(persistedApplications)
    ? persistedApplications
    : [];

  const [optimisticApplications, setOptimisticApplications] = useOptimistic(
    safePersisted,
    (currentList, newApplication) => {
      const current = Array.isArray(currentList) ? currentList : [];
      if (current.some((app) => app.jobId === newApplication.jobId)) {
        return current;
      }
      return [newApplication, ...current];
    }
  );

  const applyToJob = (jobId, details = {}) => {
    const newApplication = {
      jobId,
      appliedAt: new Date().toISOString(),
      status: "Submitted",
      ...details,
    };

    startTransition(async () => {
      setOptimisticApplications(newApplication);

      setPersistedApplications((prev) => {
        const current = Array.isArray(prev) ? prev : [];
        if (current.some((app) => app.jobId === jobId)) {
          return current;
        }
        return [newApplication, ...current];
      });
    });
  };

  const withdrawApplication = (jobId) => {
    setPersistedApplications((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      return current.filter((app) => app.jobId !== jobId);
    });
  };

  const isApplied = (jobId) => {
    return (
      Array.isArray(optimisticApplications) &&
      optimisticApplications.some((app) => app.jobId === jobId)
    );
  };

  const getApplication = (jobId) => {
    return (
      Array.isArray(optimisticApplications) &&
      optimisticApplications.find((app) => app.jobId === jobId)
    );
  };

  const value = {
    appliedJobs: Array.isArray(optimisticApplications)
      ? optimisticApplications
      : [],
    applyToJob,
    withdrawApplication,
    isApplied,
    getApplication,
    appliedCount: Array.isArray(optimisticApplications)
      ? optimisticApplications.length
      : 0,
  };

  return (
    <AppliedJobsContext.Provider value={value}>
      {children}
    </AppliedJobsContext.Provider>
  );
};
