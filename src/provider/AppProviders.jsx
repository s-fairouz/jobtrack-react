import { ThemeProvider } from "./ThemeProvider.jsx";
import { FavoritesProvider } from "./FavoritesProvider.jsx";
import { AppliedJobsProvider } from "./AppliedJobsProvider.jsx";
import { NotificationProvider } from "./NotificationProvider.jsx";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <FavoritesProvider>
          <AppliedJobsProvider>{children}</AppliedJobsProvider>
        </FavoritesProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default AppProviders;