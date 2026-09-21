import { fetchUser } from "../api/index.js";

let userPromise;
export const createJobResources = () => {
  userPromise = fetchUser();
};
export const getJobResources = () => {
  return {
    userPromise,
  };
};
