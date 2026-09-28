import {
  BsSearch,
  BsX,
  BsSliders,
  BsFilterCircle,
  BsSortDown,
} from "react-icons/bs";
import FilterSelect from "./FilterSelect.jsx";
import {
  CATEGORY_OPTIONS,
  TYPE_OPTIONS,
  SORT_OPTIONS,
  QUICK_CATEGORIES,
} from "../constants/jobFilters.js";

const SearchBar = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  typeFilter,
  onTypeChange,
  remoteOnly,
  onRemoteToggle,
  sortBy,
  onSortChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    categoryFilter !== "All" ||
    typeFilter !== "All" ||
    remoteOnly;

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 md:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
      {/* Main Search Row */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
            <BsSearch size={18} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by role, company, skills, or tags..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm rounded-xl border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Clear search"
            >
              <BsX size={20} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto flex-wrap sm:flex-nowrap">
          <FilterSelect
            value={categoryFilter}
            onChange={onCategoryChange}
            options={CATEGORY_OPTIONS}
            icon={BsSliders}
          />
          <FilterSelect
            value={typeFilter}
            onChange={onTypeChange}
            options={TYPE_OPTIONS}
            icon={BsFilterCircle}
          />
          <FilterSelect
            value={sortBy}
            onChange={onSortChange}
            options={SORT_OPTIONS}
            icon={BsSortDown}
          />
        </div>
      </div>

      {/* Second Row: Quick Category Badges & Remote Switch */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium mr-1">
            Category:
          </span>
          {QUICK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                categoryFilter === cat
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 select-none">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => onRemoteToggle(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 dark:peer-checked:bg-indigo-500 relative"></div>
            <span>Remote Only</span>
          </label>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
