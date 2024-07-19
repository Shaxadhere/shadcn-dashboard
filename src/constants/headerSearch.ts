import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

export const headerSearchOptions = [
  {
    heading: "Modules",
    items: [
      { icon: Calendar, label: "Orders", link: "/admin2/orders" },
      { icon: Smile, label: "Dashboard", link: "/admin2/dashboard" },
      { icon: Calculator, label: "Invoices", link: "/admin2/orders/invoices" },
    ],
  },
  {
    heading: "Settings",
    items: [
      { icon: User, label: "Profile", link: "/admin2/settings/profile" },
      { icon: CreditCard, label: "Billing", link: "/admin2/settings/billings" },
      { icon: Settings, label: "Settings", link: "/admin2/settings" },
    ],
  },
];
