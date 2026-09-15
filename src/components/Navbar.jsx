import React from "react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { BsMoon, BsBell, BsChevronDown } from "react-icons/bs";
import MenuDropdown from "./MenuDropdown.jsx";

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
          {menuOpen ? (
            <HiOutlineX size={22} />
          ) : (
            <HiOutlineMenuAlt2 size={22} />
          )}
        </button>

        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
          Job List
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          id="header-theme-toggle"
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          <BsMoon size={18} />
        </button>

        <button
          id="header-notifications"
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <BsBell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

        

        
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

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden"
            onClick={onMenuToggle}
            aria-hidden="true"
          />

          <MenuDropdown menuOpen={menuOpen} />
        </>
      )}
    </header>
  );
};

export default Navbar;
