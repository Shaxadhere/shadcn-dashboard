import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import Header from "./Header";
import classNames from "classnames";
import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(true);
  return (
    <div className={classNames("min-h-screen w-full")}>
      <Sider toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
      <div>
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main
          className={cn(
            "h-[calc(100vh-60px)] overflow-y-auto absolute top-[60px] p-[30px]",
            {
              "left-[280px] w-[calc(100vw-280px)]": isSiderOpen,
              "left-[70px] w-[calc(100vw-70px)]": !isSiderOpen,
            }
          )}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
