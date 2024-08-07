import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/userInfoStore";

const ProtectedRouter = () => {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
