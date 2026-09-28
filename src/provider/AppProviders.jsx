import { ThemeProvider } from "./ThemeProvider.jsx";
import { FavoritesProvider } from "./FavoritesProvider.jsx";
import { AppliedJobsProvider } from "./AppliedJobsProvider.jsx";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <AppliedJobsProvider>{children}</AppliedJobsProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
