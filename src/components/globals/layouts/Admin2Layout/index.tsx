import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import GlobalLoader from "../../loaders/GlobalLoader";
import Header from "./Header";
import Sider from "./Sider";
import SubSider from "./SubSider";

const Admin2Layout = () => {
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(false);
  return (
    <div className={cn("min-h-screen w-full")}>
      <GlobalLoader percentage={0} />
      <Sider />
      <div>
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main
          className={
            "h-[calc(100vh-60)] overflow-y-auto absolute top-[60px] ease-out duration-300 lg:left-[90px] lg:w-[calc(100vw-90px)]"
          }
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin2Layout;
