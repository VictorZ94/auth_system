import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import Activate from "../pages/Activate";
import Layout from "../hocs/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/password/reset/confirm/:uid/:token",
        element: <ResetPasswordConfirm />,
      },
      {
        path: "/activate/:uid/:token",
        element: <Activate />,
      },
    ],
  },
]);
