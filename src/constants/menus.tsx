import { Home, Package, ShoppingCart, Users2 } from "lucide-react";

export const menus = [
  {
    label: "Dashboard",
    tooltip: "Dashboard",
    icon: <Home className="h-5 w-5" />,
    link: "/admin/dashboard",
  },
  {
    label: "Orders",
    tooltip: "Orders",
    icon: <ShoppingCart className="h-5 w-5" />,
    link: "/admin/orders",
  },
  {
    label: "Products",
    tooltip: "Products",
    icon: <Package className="h-5 w-5" />,
    link: "/admin/products",
  },
  {
    label: "Customers",
    tooltip: "Customers",
    icon: <Users2 className="h-5 w-5" />,
    link: "/admin/customers",
  },
] as const;
