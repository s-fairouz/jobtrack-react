import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import JobList from "./pages/JobList.jsx";
import FavoriteJobs from "./pages/FavoriteJobs.jsx";
import JobItem from "./pages/JobItem.jsx";
import NotFound from "./pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <JobList /> },
      { path: "jobs", element: <JobList /> },
      { path: "jobs/:id", element: <JobItem /> },
      { path: "favorites", element: <FavoriteJobs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
