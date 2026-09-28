const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const formatPostedDate = (dateString) => {
  if (!dateString) return "Recently";
  const diffDays = Math.floor((Date.now() - new Date(dateString)) / MS_PER_DAY);
  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return dateString;
};
