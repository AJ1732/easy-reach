import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardApp, LandingPage } from "@/application";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardApp />,
      },
    ]
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
