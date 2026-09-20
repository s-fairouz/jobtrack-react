import { ThemeProvider } from "./ThemeProvider.jsx";
import UserProvider from "./UserProvider.jsx";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
