import { useState } from "react";
import {
  BsExclamationTriangleFill,
  BsArrowCounterclockwise,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";

export function ErrorFallback({ error, resetErrorBoundary }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 min-h-[600px] w-full">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 text-slate-900 dark:text-slate-100 transition-all">
        {/* Top Badge & Icon */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xl shrink-0 shadow-xs">
            <BsExclamationTriangleFill />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 mb-1">
              Data Fetch Failure
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Something went wrong!
            </h2>
          </div>
        </div>

        {/* User-friendly message */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          We ran into an unexpected issue while fetching application resources.
          Click below to attempt reloading the data.
        </p>

        {/* Collapsible Error Technical Details */}
        <div className="mb-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 overflow-hidden">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="w-full px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Technical Error Details
            </span>
            {showDetails ? <BsChevronUp size={14} /> : <BsChevronDown size={14} />}
          </button>

          {showDetails && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono bg-slate-950 text-rose-400 overflow-x-auto">
              <pre className="whitespace-pre-wrap break-words">
                {error?.message || "Unknown error occurred"}
              </pre>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={resetErrorBoundary}
            className="w-full sm:flex-1 py-3 px-5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BsArrowCounterclockwise className="text-base" />
            <span>Try Again</span>
          </button>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}