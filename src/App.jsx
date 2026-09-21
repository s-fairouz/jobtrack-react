import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/SideBar";
import JobList from "./pages/JobList";
import { useTheme } from "./hooks/useTheme.js";
import { FullAppShellSkeleton } from "./components/navbar/Skeletons.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback.jsx";
import UserProvider from "./provider/UserProvider.jsx";
import { createJobResources } from "./resources/index.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`flex h-screen overflow-hidden ${theme ? "dark" : ""} bg-slate-100 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100`}
    >
      <div className="hidden md:flex">
        <SideBar isOpen={false} onClose={() => setMenuOpen(false)} />
      </div>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => createJobResources()}
      >
        <Suspense fallback={<FullAppShellSkeleton />}>
          <UserProvider>
            <div className="flex flex-col flex-1 overflow-hidden relative">
              <Navbar
                menuOpen={menuOpen}
                onMenuToggle={() => setMenuOpen((prev) => !prev)}
              />

              <main
                className="flex-1 overflow-y-auto p-4 md:p-8"
                id="main-content"
              >
                <JobList />
              </main>
            </div>
          </UserProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;