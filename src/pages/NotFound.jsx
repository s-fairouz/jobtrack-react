import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <span className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
        404
      </span>
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl font-medium text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-md shadow-indigo-500/20"
      >
        Back to Job List
      </Link>
    </div>
  );
};

export default NotFound;
