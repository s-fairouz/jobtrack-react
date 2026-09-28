export const CATEGORIES = ["Engineering", "Design", "DevOps", "Product"];
export const JOB_TYPES = ["Full-time", "Hybrid", "Contract"];

export const CATEGORY_OPTIONS = [
  { value: "All", label: "All Categories" },
  ...CATEGORIES.map((c) => ({ value: c, label: c })),
];

export const TYPE_OPTIONS = [
  { value: "All", label: "All Job Types" },
  ...JOB_TYPES.map((t) => ({ value: t, label: t })),
];

export const SORT_OPTIONS = [
  { value: "newest", label: "Sort: Newest" },
  { value: "salary", label: "Sort: Salary" },
  { value: "company", label: "Sort: Company" },
];

export const QUICK_CATEGORIES = ["All", ...CATEGORIES];
