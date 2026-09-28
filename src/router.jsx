import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import JobList from "./pages/JobList.jsx";
import FavoriteJobs from "./pages/FavoriteJobs.jsx";
import JobItem from "./pages/JobItem.jsx";
import NotFound from "./pages/NotFound.jsx";
import Settings from "./pages/Settings.jsx";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    handle: { breadcrumb: "Home" },
    children: [
      { index: true, element: <JobList /> },
      {
        path: "jobs",
        element: <JobList />,
        handle: { breadcrumb: "Jobs" },
      },
      {
        path: "jobs/:id",
        element: <JobDetailsPage />,
        handle: { breadcrumb: "Job Details" },
      },
      {
        path: "favorites",
        element: <FavoriteJobs />,
        handle: { breadcrumb: "Favorites" },
      },
      {
        path: "jobs/settings",
        element: <Settings />,
        handle: { breadcrumb: "Settings" },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
