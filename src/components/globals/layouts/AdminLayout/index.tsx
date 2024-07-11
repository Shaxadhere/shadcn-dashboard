import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import GlobalLoader from "../../loaders/GlobalLoader";
import Header from "./Header";
import Sider from "./Sider";

const AdminLayout = () => {
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(true);
  return (
    <div className={cn("min-h-screen w-full")}>
      <GlobalLoader percentage={0} />
      <Sider toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
      <div>
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main
          className={cn(
            "h-[calc(100vh-60px)] overflow-y-auto absolute top-[60px] p-[30px] ease-out duration-300",
            {
              "lg:left-[280px] lg:w-[calc(100vw-280px)]": isSiderOpen,
              "lg:left-[70px] lg:w-[calc(100vw-70px)]": !isSiderOpen,
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
