import AdminLayout from "@/components/globals/layouts/AdminLayout";
import AuthLayout from "@/components/globals/layouts/AuthLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import adminRoutes from "./admin-routes";
import authRoutes from "./auth-routes";
import Admin2Layout from "@/components/globals/layouts/Admin2Layout";

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
    path: "/admin2",
    element: <Admin2Layout />,
    children: adminRoutes,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
