import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { LoadingSpinner } from "@/components";
import { TopScroll } from "@/utils/TopScroll";
import App from "../App";

// LAZY LOAD COMPONENTS
const DashboardApp = lazy(() => import("@/application/DashboardApp"));
const LandingPage = lazy(() => import("@/application/LandingPage"));
const HomePage = lazy(() => import("@/application/LandingPage/pages/HomePage"));
const AboutPage = lazy(
  () => import("@/application/LandingPage/pages/AboutPage"),
);
const BlogPage = lazy(() => import("@/application/LandingPage/pages/BlogPage"));

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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LandingPage />
          </Suspense>
        ),
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/about",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AboutPage />
              </Suspense>
            ),
          },
          {
            path: "/blog",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardApp />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
