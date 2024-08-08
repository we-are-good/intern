import { Navigate, Outlet } from "react-router-dom";
import { useUserQuery } from "../query/useQueries/useUserQueries";
import { getCookie } from "../utils/Cookies";
import LoadingScreen from "../components/LoadingScreen";

const ProtectedRouter = () => {
  const token: string = getCookie("accessToken");
  const { data, isLoading } = useUserQuery(token);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (data?.accessToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
