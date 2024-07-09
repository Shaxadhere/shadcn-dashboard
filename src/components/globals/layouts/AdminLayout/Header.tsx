import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ComboSearchInput from "../../popovers/ComboSearchInput";
import HeaderMenu from "./HeaderMenu";
import AppBreadcrumbs from "./AppBreadcrumbs";
import { cn } from "@/lib/utils";
import SiderDrawer from "./SiderDrawer";

type Props = {
  toggleSider: () => void;
  isSiderOpen: boolean;
};

const Header = ({ toggleSider, isSiderOpen }: Props) => {
  return (
    <header
      className={cn(
        "flex border-b bg-muted/40 px-4 h-[60px] lg:px-3 justify-between absolute items-center top-[0px] w-screen ",
        {
          "lg-left-[70px] lg-w-[calc(100vw-70px)]": !isSiderOpen,
          "lg-left-[280px] lg-w-[calc(100vw-280px)]": isSiderOpen,
        }
      )}
    >
      <SiderDrawer isSiderOpen={isSiderOpen} toggleSider={toggleSider} />
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
        <div className="w-full w-[260px] hidden lg-block">
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
