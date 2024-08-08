import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../queryFunctions/userQueryFns";
import { USER } from "../queryKeys/userQueryKeys";

export const useUserQuery = (accessToken: string) => {
  return useQuery({
    queryKey: [USER],
    queryFn: () => fetchUser(accessToken),
    enabled: !!accessToken,
  });
};
