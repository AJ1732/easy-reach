import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    // children: [
    //   {
    //     path: "/",
    //     element: <HomePage />,
    //   },
    // ]
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
