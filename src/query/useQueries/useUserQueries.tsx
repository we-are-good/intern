import { useQuery } from "@tanstack/react-query";
import { USER } from "../queryKeys/userQueryKeys";
import { fetchUser } from "../../utils/api/userAPI";

export const useUserQuery = (accessToken: string) => {
  return useQuery({
    queryKey: [USER],
    queryFn: () => fetchUser(accessToken),
  });
};
