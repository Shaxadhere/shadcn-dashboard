import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";
import { Navigate, Outlet } from "react-router-dom";
import GlobalLoader from "../../loaders/GlobalLoader";
import Header from "./Header";
import Sider from "./Sider";
import { useBearStore } from "@/store";
import { AuthState } from "@/types/state-types";

const AdminLayout = () => {
  const { isAuth } = useBearStore((state: AuthState) => ({
    isAuth: state.isAuth,
  }));
  const { toggle: toggleSider, value: isSiderOpen } = useBoolean(true);

  //if user is not authenticated, redirect to login
  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div className={cn("min-h-screen w-full")}>
      <GlobalLoader percentage={0} />
      <Sider toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
      <div>
        <Header toggleSider={toggleSider} isSiderOpen={isSiderOpen} />
        <main
          className={cn(
            `h-[calc(100vh-60px)] overflow-y-auto absolute top-[60px] p-[30px] ease-out duration-300`,
            isSiderOpen && `lg:left-[280px] lg:w-[calc(100vw-280px)]`,
            !isSiderOpen && `lg:left-[70px] lg:w-[calc(100vw-70px)]`
          )}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
