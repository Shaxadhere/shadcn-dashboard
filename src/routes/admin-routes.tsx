import Dashboard from "@/pages/admin/Dashborad";
import Orders from "@/pages/admin/Orders";

const adminRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "products",
    element: <Dashboard />,
  },
  {
    path: "customers",
    element: <Dashboard />,
  },
];

export default adminRoutes;
