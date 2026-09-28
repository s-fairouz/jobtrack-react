import { fetchJobs, fetchUser } from "../api/index.js";

let userPromise;
let jobsPromise;
export const createJobResources = () => {
  userPromise = fetchUser();
  jobsPromise = fetchJobs();
};
export const getJobResources = () => {
  return {
    userPromise,
    jobsPromise,
  };
};
