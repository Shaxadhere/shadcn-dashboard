import { Menu, Package2 } from "lucide-react";
import SiderItem from "./SiderItem";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuickActionCard from "../../cards/QuickActionCard";
import classNames from "classnames";
import { menus } from "@/constants/menus";
import { cn } from "@/lib/utils";

type Props = {
  toggleSider: () => void;
  isSiderOpen: boolean;
};

const Sider = ({ toggleSider, isSiderOpen }: Props) => {
  return (
    <div
      className={cn(
        "hidden border-r bg-muted/40 md:block h-[100vh] absolute top-[0px] left-[0px] w-[280px]",
        {
          "w-[70px]": !isSiderOpen,
        }
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className={classNames(
            "flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6",
            {
              "lg:px-2": !isSiderOpen,
            }
          )}
        >
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            {isSiderOpen && <span className="">Acme Inc</span>}
          </Link>
          {isSiderOpen && (
            <Button
              onClick={toggleSider}
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          )}
        </div>
        <div className="flex-1">
          <nav
            className={classNames(
              "flex flex-col justify-start px-2 text-sm font-medium lg:px-4 gap-1",
              {
                "lg:px-2 justify-center gap-2": !isSiderOpen,
              }
            )}
          >
            {menus.map((menu, index) => (
              <SiderItem {...menu} isSiderOpen={isSiderOpen} key={index} />
            ))}
          </nav>
        </div>
        {isSiderOpen && (
          <div className="mt-auto p-4">
            <QuickActionCard
              title="Upgrade to Pro"
              description=" Unlock all features and get unlimited access to our support
                team."
              actionTitle="Upgrade"
              action={() => console.log("upgrade")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sider;
