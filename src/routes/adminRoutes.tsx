import Dashboard from "@/pages/admin/Dashborad";

const adminRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "orders",
    element: <Dashboard />,
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
