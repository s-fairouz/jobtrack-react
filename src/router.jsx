import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import JobList from "./pages/JobList.jsx";
import FavoriteJobs from "./pages/FavoriteJobs.jsx";
import JobItem from "./pages/JobItem.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <JobList /> },
      {
        path: "favorites",
        element: <FavoriteJobs />,
      },
      {
        path: "jobs/:id",
        element: <JobItem />,
      },
    ],
  },
]);
