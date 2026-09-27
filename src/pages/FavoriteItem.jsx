import React from "react";
import JobItem from "./JobItem.jsx";

const FavoriteItem = ({ job }) => {
  return <JobItem job={job} viewMode="grid" />;
};

export default FavoriteItem;
