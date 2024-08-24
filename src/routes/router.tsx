import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardApp, LandingPage } from "@/application";
import { AboutPage, BlogPage, HomePage } from "@/application/LandingPage/pages";
import { TopScroll } from "@/utils/TopScroll";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopScroll />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/about", element: <AboutPage /> },
          { path: "/blog", element: <BlogPage /> },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardApp />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
