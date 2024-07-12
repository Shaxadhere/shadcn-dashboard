import { Home, Package, Users2 } from "lucide-react";

export const ordersSubmenu = [
  {
    label: "Orders",
    icon: <Package className="h-5 w-5" />,
    link: "/admin2/orders",
  },
  {
    label: "Customers",
    icon: <Users2 className="h-5 w-5" />,
    link: "/admin2/orders/customers",
  },
] as const;

export const menus2 = [
  {
    label: "Dashboard",
    icon: <Home className="h-5 w-5" />,
    link: "/admin2/dashboard",
  },
  {
    label: "Customers",
    icon: <Users2 className="h-5 w-5" />,
    link: "/admin2/customers",
  },
] as const;
