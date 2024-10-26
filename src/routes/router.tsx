import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { LoadingSpinner } from "@/components";
import { TopScroll } from "@/utils/TopScroll";
import App from "../App";

// LAZY LOAD COMPONENTS
const LandingPage = lazy(() => import("@/application/LandingPage"));
const HomePage = lazy(() => import("@/application/LandingPage/pages/HomePage"));
const BlogPage = lazy(() => import("@/application/LandingPage/pages/BlogPage"));
const AboutPage = lazy(
  () => import("@/application/LandingPage/pages/AboutPage"),
);

const DashboardApp = lazy(() => import("@/application/DashboardApp"));
const LoginPage = lazy(
  () => import("@/application/DashboardApp/pages/LoginPage"),
);
const SignupPage = lazy(
  () => import("@/application/DashboardApp/pages/SignupPage"),
);
const PlatformPage = lazy(
  () => import("@/application/DashboardApp/pages/PlatformPage"),
);

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
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardApp />
          </Suspense>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <PlatformPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
