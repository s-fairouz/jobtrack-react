export const UserSkeleton = () => {
  return (
    <div className="flex items-center gap-2.5 p-1 pr-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 animate-pulse">
      <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
      <div className="hidden sm:flex flex-col gap-1 text-left">
        <div className="h-3 w-16 bg-slate-300 dark:bg-slate-700 rounded-sm" />
        <div className="h-2 w-12 bg-slate-200 dark:bg-slate-800 rounded-sm" />
      </div>
    </div>
  );
};

export const NavbarSkeleton = () => {
  return (
    <header className="relative z-30 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between shadow-xs shrink-0 animate-pulse">
      {/* Title & Mobile Toggle Skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 md:hidden" />
        <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded-md" />
      </div>

      {/* Right Controls Skeleton */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800" />
        <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800" />
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />
        <UserSkeleton />
      </div>
    </header>
  );
};

export const JobListSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header section skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="h-7 w-44 bg-slate-300 dark:bg-slate-800 rounded-lg mb-2" />
          <div className="h-4 w-64 bg-slate-200 dark:bg-slate-800/60 rounded-md" />
        </div>
        <div className="w-36 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>

      {/* Search & Filter bar skeleton */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="w-full sm:flex-1 h-11 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-24 h-11 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          <div className="w-24 h-11 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        </div>
      </div>

      {/* Cards Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0" />
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="space-y-2">
              <div className="h-5 w-3/4 bg-slate-300 dark:bg-slate-800 rounded-md" />
              <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800/70 rounded-md" />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-full" />
              <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
              <div className="h-6 w-14 bg-slate-200 dark:bg-slate-800 rounded-full" />
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-md" />
              <div className="h-8 w-20 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FullAppShellSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden relative">
      <NavbarSkeleton />
      <main className="flex-1 overflow-y-auto p-4 md:p-8" id="main-content-skeleton">
        <JobListSkeleton />
      </main>
    </div>
  );
};
