import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import Header from "./Header";
import classNames from "classnames";
import useBoolean from "@/hooks/useBoolean";

const AdminLayout = () => {
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(true);
  return (
    <div className={classNames("min-h-screen w-full")}>
      <Sider toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
      <div>
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main className="h-[calc(100vh-60px)] overflow-y-auto absolute top-[60px] left-[280px] w-[calc(100vw-280px)] p-[30px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
