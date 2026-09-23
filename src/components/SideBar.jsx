import { BsBriefcase, BsGear, BsHeart } from "react-icons/bs";
import { Link, NavLink } from "react-router";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          isOpen
            ? "translate-x-0 shadow-2xl"
            : "-translate-x-full md:shadow-none"
        }`}
      >
        {/* Brand */}
        <Link
          to="/jobs"
          end
          className="h-16 px-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
            <BsBriefcase size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Job
            <span className="text-indigo-600 dark:text-indigo-400">Track</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          className="flex-1 overflow-y-auto p-4 space-y-1"
          aria-label="Main navigation"
        >
          <div className="px-3 py-2 text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            Navigation
          </div>

       
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`
            }
          >
            <BsBriefcase size={18} />
            <span>Job List</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <BsHeart size={18} />
              <span>Favourites</span>
            </div>
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-pink-500 text-white">
              3
            </span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
            <BsGear size={18} />
            <span>Settings</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
