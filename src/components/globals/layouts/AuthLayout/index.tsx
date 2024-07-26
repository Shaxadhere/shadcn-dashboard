import { useBearStore } from "@/store";
import { AuthState } from "@/types/state-types";
import { Navigate, Outlet } from "react-router-dom";
import AuthImageSection from "../../sections/AuthImageSection";

const AuthLayout = () => {
  const { isAuth } = useBearStore((state: AuthState) => ({
    isAuth: state.isAuth,
  }));

  //if user is authenticated, redirect to dashboard
  if (isAuth) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Outlet />
      <AuthImageSection />
    </div>
  );
};

export default AuthLayout;
