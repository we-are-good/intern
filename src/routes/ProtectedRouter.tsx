import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useUserQuery } from "../query/useQueries/useUserQueries";
import { getCookie } from "../utils/Cookies";

const ProtectedRouter = () => {
  const token: string = getCookie("accessToken");
  const { isError, isLoading } = useUserQuery(token);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!token || isError) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
