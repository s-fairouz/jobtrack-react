import { NavLink } from "react-router";
import { BsBriefcase, BsGear, BsHeart, BsSendCheck } from "react-icons/bs";
import { useFavorites } from "../../hooks/useFavorites.js";
import { useAppliedJobs } from "../../hooks/useAppliedJobs.js";

const MenuDropdown = ({ onMenuToggle }) => {
  const { count: favoritesCount } = useFavorites();
  const { appliedCount } = useAppliedJobs();

  return (
    <>
      <div
        className="fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden"
        onClick={onMenuToggle}
        aria-hidden="true"
      />
      <div className="absolute top-18 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 z-50 md:hidden space-y-1 transform transition-all duration-200 ease-out">
        <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
          Navigation
        </div>

        <NavLink
          to="/jobs"
          onClick={onMenuToggle}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
              isActive
                ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`
          }
        >
          <BsBriefcase size={18} />
          <span>Job List</span>
        </NavLink>

        <NavLink
          to="/favorites"
          onClick={onMenuToggle}
          className={({ isActive }) =>
            `flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
              isActive
                ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-3">
            <BsHeart size={18} />
            <span>Favourites</span>
          </div>
          {favoritesCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-pink-500 text-white">
              {favoritesCount}
            </span>
          )}
        </NavLink>

        <NavLink
          to="/applied"
          onClick={onMenuToggle}
          className={({ isActive }) =>
            `flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
              isActive
                ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`
          }
        >
          <div className="flex items-center gap-3">
            <BsSendCheck size={18} />
            <span>Applied Jobs</span>
          </div>
          {appliedCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500 text-white">
              {appliedCount}
            </span>
          )}
        </NavLink>

        <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />

        <NavLink
          to="/jobs/settings"
          onClick={onMenuToggle}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
              isActive
                ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`
          }
        >
          <BsGear size={18} />
          <span>Settings</span>
        </NavLink>
      </div>
    </>
  );
};

export default MenuDropdown;

