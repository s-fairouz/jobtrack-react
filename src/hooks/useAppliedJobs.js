import { use } from "react";
import { AppliedJobsContext } from "../context/index.js";

export const useAppliedJobs = () => {
  const context = use(AppliedJobsContext);
  if (!context) {
    throw new Error(
      "useAppliedJobs must be used within an AppliedJobsProvider",
    );
  }
  return context;
};
