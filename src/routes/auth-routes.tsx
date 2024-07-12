import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import { Navigate } from "react-router-dom";

const authRoutes = [
  {
    index: true,
    element: <Navigate to={"/auth/login"} />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];

export default authRoutes;
