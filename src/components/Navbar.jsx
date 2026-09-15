import React from "react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { BsMoon, BsBell, BsChevronDown, BsBriefcase, BsHeart, BsGear } from "react-icons/bs";

const Navbar = ({ menuOpen, onMenuToggle }) => {
  return (
    <header className="relative z-30 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between shadow-xs shrink-0">
      {/* Left: Hamburger (mobile only) + Page Title */}
      <div className="flex items-center gap-3">
        <button
          id="header-menu-toggle"
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt2 size={22} />}
        </button>

        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
          Job List
        </h1>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Dark / Light toggle — design only */}
        <button
          id="header-theme-toggle"
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          <BsMoon size={18} />
        </button>

        {/* Notifications */}
        <button
          id="header-notifications"
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <BsBell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

        {/* User chip — static John Doe */}
        <div
          id="header-user-chip"
          className="flex items-center gap-2.5 p-1 pr-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all cursor-pointer"
          role="button"
          tabIndex={0}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
            JD
          </div>
          <div className="hidden sm:flex flex-col text-left leading-tight">
            <span className="text-xs font-semibold text-slate-900 dark:text-white">
              John Doe
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              Job Seeker
            </span>
          </div>
          <BsChevronDown size={12} className="text-slate-400" />
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {menuOpen && (
        <>
          {/* Backdrop for closing dropdown */}
          <div
            className="fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden"
            onClick={onMenuToggle}
            aria-hidden="true"
          />

          {/* Floating Dropdown Card */}
          <div className="absolute top-18 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 z-50 md:hidden space-y-1 transform transition-all duration-200 ease-out">
            <div className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
              Navigation
            </div>

            {/* Active Job List */}
            <div
              id="dropdown-joblist"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              <BsBriefcase size={18} />
              <span>Job List</span>
            </div>

            {/* Favourites */}
            <div
              id="dropdown-favourites"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <BsHeart size={18} />
                <span>Favourites</span>
              </div>
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-pink-500 text-white">
                3
              </span>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />

            {/* Settings */}
            <div
              id="dropdown-settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <BsGear size={18} />
              <span>Settings</span>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
