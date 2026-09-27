import { Link } from "react-router";

function Breadcrumb({ children }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {children}
    </nav>
  );
}

function BreadcrumbItem({ to, children, isCurrent = false }) {
  if (isCurrent) {
    return (
      <span className="font-semibold text-slate-900 dark:text-white">
        {children}
      </span>
    );
  }

  return (
    <Link
      to={to}
      className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
    >
      {children}
    </Link>
  );
}

function BreadcrumbSeparator() {
  return <span className="text-slate-300 dark:text-slate-700">/</span>;
}

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;