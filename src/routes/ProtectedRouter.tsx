import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const user = true; // 임시지정
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
