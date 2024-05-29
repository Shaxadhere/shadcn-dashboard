import AdminLayout from "@/components/globals/layouts/AdminLayout";
import AuthLayout from "@/components/globals/layouts/AuthLayout";
import Dashboard from "@/pages/admin/Dashborad";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/admin/dashboard"} />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
