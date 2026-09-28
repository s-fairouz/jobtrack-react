import { ThemeProvider } from "./ThemeProvider.jsx";
import { FavoritesProvider } from "./FavoritesProvider.jsx";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </ThemeProvider>
  );
};

export default AppProviders;