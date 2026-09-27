import React from "react";
import { useTheme } from "../hooks/useTheme.js";
import { useUser } from "../hooks/useUser.js";
import { BsSun, BsMoon, BsGear, BsCheckCircleFill, BsPersonCheck } from "react-icons/bs";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-8">
      <div className="flex items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 flex items-center justify-center shrink-0">
          <BsGear size={22} />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Settings & Preferences
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Customize your app appearance and manage your account options.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Theme Settings Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Appearance & Theme
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Switch between Light mode and Dark mode for optimal viewing comfort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Light Mode Box */}
            <div
              onClick={() => {
                if (theme) toggleTheme();
              }}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                !theme
                  ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <BsSun size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Light Mode</h3>
                  <span className="text-xs text-slate-500">Clean, bright background</span>
                </div>
              </div>
              {!theme && <BsCheckCircleFill className="text-indigo-600" size={20} />}
            </div>

            {/* Dark Mode Box */}
            <div
              onClick={() => {
                if (!theme) toggleTheme();
              }}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                theme
                  ? "border-indigo-600 bg-indigo-950/30 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center">
                  <BsMoon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Dark Mode</h3>
                  <span className="text-xs text-slate-500">Sleek, high contrast dark style</span>
                </div>
              </div>
              {theme && <BsCheckCircleFill className="text-indigo-500" size={20} />}
            </div>
          </div>
        </div>

        {/* User Profile Summary Card */}
        {user && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BsPersonCheck className="text-indigo-600 dark:text-indigo-400" />
              Account Info
            </h2>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                {user.initials}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {user.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{user.email}</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
