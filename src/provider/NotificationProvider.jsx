import { useOptimistic, startTransition } from "react";
import { NotificationContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const DEFAULT_NOTIFICATIONS = [
  {
    id: "notif-welcome",
    type: "info",
    title: "Welcome to JobTrack!",
    message:
      "Discover open tech roles, track your applications, and save favorites.",
    link: "/jobs",
    read: false,
    createdAt: new Date().toISOString(),
  },
];

export const NotificationProvider = ({ children }) => {
  const [persistedNotifications, setPersistedNotifications] = useLocalStorage(
    "jobtrack_notifications",
    DEFAULT_NOTIFICATIONS,
  );

  const safePersisted = Array.isArray(persistedNotifications)
    ? persistedNotifications
    : [];

  const [optimisticNotifications, setOptimisticNotifications] = useOptimistic(
    safePersisted,
    (currentList, action) => {
      const list = Array.isArray(currentList) ? currentList : [];
      if (action.type === "ADD") {
        return [action.payload, ...list];
      }
      if (action.type === "MARK_READ") {
        return list.map((n) =>
          n.id === action.payload ? { ...n, read: true } : n,
        );
      }
      if (action.type === "MARK_ALL_READ") {
        return list.map((n) => ({ ...n, read: true }));
      }
      if (action.type === "CLEAR_ALL") {
        return [];
      }
      return list;
    },
  );

  const addNotification = ({
    type = "info",
    title,
    message,
    link = "/jobs",
  }) => {
    const newNotif = {
      id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      type,
      title,
      message,
      link,
      read: false,
      createdAt: new Date().toISOString(),
    };

    startTransition(async () => {
      setOptimisticNotifications({ type: "ADD", payload: newNotif });
      setPersistedNotifications((prev) => [
        newNotif,
        ...(Array.isArray(prev) ? prev : []),
      ]);
    });
  };

  const markAsRead = (id) => {
    startTransition(async () => {
      setOptimisticNotifications({ type: "MARK_READ", payload: id });
      setPersistedNotifications((prev) =>
        (Array.isArray(prev) ? prev : []).map((n) =>
          n.id === id ? { ...n, read: true } : n,
        ),
      );
    });
  };

  const markAllAsRead = () => {
    startTransition(async () => {
      setOptimisticNotifications({ type: "MARK_ALL_READ" });
      setPersistedNotifications((prev) =>
        (Array.isArray(prev) ? prev : []).map((n) => ({ ...n, read: true })),
      );
    });
  };

  const clearAllNotifications = () => {
    startTransition(async () => {
      setOptimisticNotifications({ type: "CLEAR_ALL" });
      setPersistedNotifications([]);
    });
  };

  const unreadCount = optimisticNotifications.filter((n) => !n.read).length;

  const value = {
    notifications: optimisticNotifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearAllNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
