import { useQuery } from "@tanstack/react-query";
import { USER } from "../queryKeys/userQueryKeys";
import { fetchUserInformation } from "../queryFunctions/userQueryFns";
import { UserTestType } from "../../types/UserTypes";

export const useUserQuery = (): UserTestType | undefined => {
  const { data, error, isSuccess } = useQuery({
    queryKey: [USER],
    queryFn: fetchUserInformation,
  });
  if (error) {
    console.error(Error);
  }
  if (isSuccess) {
    return data;
  }
};
