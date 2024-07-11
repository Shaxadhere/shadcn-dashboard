import AdminLayout from "@/components/globals/layouts/AdminLayout";
import AuthLayout from "@/components/globals/layouts/AuthLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import adminRoutes from "./adminRoutes";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/admin/dashboard"} />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes,
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
