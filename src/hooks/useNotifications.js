import { use } from "react";
import { NotificationContext } from "../context/index.js";

export const useNotifications = () => {
  const context = use(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};