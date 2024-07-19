import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import GlobalLoader from "../../loaders/GlobalLoader";
import Header from "./Header";
import Sider from "./Sider";
import SubSider from "./SubSider";
import FloatingActionPopover from "../../popovers/FloatingActionPopover";

const Admin2Layout = () => {
  return (
    <div className={cn("min-h-screen w-full")}>
      <GlobalLoader percentage={0} />
      <Sider />
      <div>
        <Header />
        <main
          className={
            "h-[calc(100vh-60px)] overflow-y-auto absolute top-[60px] ease-out duration-300 lg:left-[80px] lg:w-[calc(100vw-80px)]"
          }
        >
          <Outlet />
          <FloatingActionPopover />
        </main>
      </div>
    </div>
  );
};

export default Admin2Layout;
