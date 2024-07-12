import OperationLayout from "@/components/globals/layouts/OperationLayout";
import { ordersSubmenu } from "@/constants/sub-menus";
import Dashboard from "@/pages/admin/Dashborad";

const adminRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "orders",
    element: <OperationLayout title="Orders" subsiderMenu={ordersSubmenu} />,
    children: [
      {
        index: true,
        element: <>Orders</>,
      },
      {
        path: "refunds",
        element: <>Returns</>,
      },
    ],
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
