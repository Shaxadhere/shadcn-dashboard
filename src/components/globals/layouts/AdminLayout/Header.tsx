import {
  Badge,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ComboSearchInput from "../../popovers/ComboSearchInput";
import HeaderMenu from "./HeaderMenu";
import NavBottomCard from "./NavBottomCard";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import AppBreadcrumbs from "./AppBreadcrumbs";
import { cn } from "@/lib/utils";

type Props = {
  toggleSider: () => void;
  isSiderOpen: boolean;
};

const Header = ({ toggleSider, isSiderOpen }: Props) => {
  return (
    <header
      className={cn(
        "flex border-b bg-muted/40 px-4 h-[60px] lg:px-3 justify-between absolute items-center top-[0px]",
        {
          "left-[70px] w-[calc(100vw-70px)]": !isSiderOpen,
          "left-[280px] w-[calc(100vw-280px)]": isSiderOpen,
        }
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              to="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
          <NavBottomCard />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-3">
        {!isSiderOpen && (
          <div>
            <Button
              onClick={toggleSider}
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        )}
        <AppBreadcrumbs />
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full w-[260px]">
          <form>
            <ComboSearchInput openClassName={"top-[132.5px] z-10"} />
          </form>
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
