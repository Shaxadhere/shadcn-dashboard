import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import Header from "./Header";
import classNames from "classnames";
import useBoolean from "@/hooks/useBoolean";

const AdminLayout = () => {
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(true);
  return (
    <div
      className={classNames(
        "grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]",
        {
          "md:grid-cols-[60px_1fr] lg:grid-cols-[60px_1fr]": !isSiderOpen,
        }
      )}
    >
      <Sider toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
      <div className="flex flex-col">
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
