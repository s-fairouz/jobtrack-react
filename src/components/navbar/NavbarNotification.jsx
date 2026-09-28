import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  BsBell,
  BsCheckCircleFill,
  BsHeartFill,
  BsInfoCircleFill,
  BsCheck2All,
  BsTrash,
} from "react-icons/bs";
import { useNotifications } from "../../hooks/useNotifications.js";
import { formatPostedDate } from "../../utils/formatPostedDate.js";

const NavbarNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearAllNotifications,
  } = useNotifications();

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const getIcon = (type) => {
    switch (type) {
      case "applied":
        return <BsCheckCircleFill className="text-emerald-500" size={16} />;
      case "favorite":
        return <BsHeartFill className="text-rose-500" size={15} />;
      default:
        return <BsInfoCircleFill className="text-indigo-500" size={16} />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="header-notifications"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
        aria-label="Notifications"
        aria-expanded={isOpen}
      >
        <BsBell size={18} />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500 ring-2 ring-white dark:ring-slate-900"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-800 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Notifications
              </h3>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  {unreadCount} new
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  <BsCheck2All size={14} />
                  Mark all read
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  type="button"
                  onClick={clearAllNotifications}
                  title="Clear all"
                  className="text-slate-400 hover:text-rose-500 transition-colors p-1 rounded-lg cursor-pointer"
                >
                  <BsTrash size={13} />
                </button>
              )}
            </div>
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
            {notifications.length > 0 ? (
              notifications.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => {
                    markAsRead(item.id);
                    setIsOpen(false);
                  }}
                  className={`p-3.5 flex items-start gap-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 block ${
                    !item.read
                      ? "bg-indigo-50/40 dark:bg-indigo-950/20"
                      : ""
                  }`}
                >
                  <div className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-slate-400 shrink-0">
                        {formatPostedDate(item.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                  {!item.read && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-1.5" />
                  )}
                </Link>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-xs">
                No notifications right now
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarNotification;