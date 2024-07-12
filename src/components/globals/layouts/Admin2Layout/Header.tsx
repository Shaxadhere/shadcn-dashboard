import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import ComboSearchInput from "../../popovers/ComboSearchInput";
import AppBreadcrumbs from "./AppBreadcrumbs";
import HeaderMenu from "./HeaderMenu";
import SiderDrawer from "./SiderDrawer";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header
      className={cn(
        `flex border-b bg-muted/40 px-4 h-[60px] lg:px-5 justify-between absolute items-center top-[0px] w-screen ease-out duration-300 lg:left-[90px] lg:w-[calc(100vw-90px)]`
      )}
    >
      <SiderDrawer />
      <div className="flex items-center gap-3">
        <AppBreadcrumbs />
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full min-w-[260px] hidden lg:block">
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
