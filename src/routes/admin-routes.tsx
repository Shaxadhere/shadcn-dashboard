import OperationLayout from "@/components/globals/layouts/OperationLayout";
import { ordersSubmenu } from "@/constants/sub-menus";
import Dashboard from "@/pages/admin/Dashborad";
import Orders from "@/pages/admin/Orders";
import Invoices from "@/pages/admin/Orders/Invoices";

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
        element: <Orders />,
      },
      {
        path: "invoices",
        element: <Invoices />,
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
