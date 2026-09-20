import { useUser } from "../hooks/useUser.js";

const User = () => {
  const context = useUser();
  const { user } = context;
  return (
    <div
      id="header-user-chip"
      className="flex items-center gap-2.5 p-1 pr-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all cursor-pointer"
      role="button"
      tabIndex={0}
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
        {user.initials}
      </div>
      <div className="hidden sm:flex flex-col text-left leading-tight">
        <span className="text-xs font-semibold text-slate-900 dark:text-white">
          {user.name}
        </span>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">
          {user.role}
        </span>
      </div>
    </div>
  );
};

export default User;
