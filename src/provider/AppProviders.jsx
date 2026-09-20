import { ThemeProvider } from "./ThemeProvider.jsx";

const AppProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;