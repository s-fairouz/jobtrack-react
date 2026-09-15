import React from "react";
import {  BsBriefcase, BsHeart, BsGear } from "react-icons/bs";
const MenuDropdown = ({ menuOpen }) => {
  return (
    <>
      {menuOpen && (
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
      )}
    </>
  );
};

export default MenuDropdown;
