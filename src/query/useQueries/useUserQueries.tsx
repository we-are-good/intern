import { useQuery } from "@tanstack/react-query";
import { TESTUSER } from "../queryKeys/userQueryKeys";
import { fetchUserInformation } from "../queryFunctions/userQueryFns";
import { UserTestType } from "../../types/userTypes";

export const useUserQuery = (): UserTestType | undefined => {
  const { data, error, isSuccess } = useQuery({
    queryKey: [TESTUSER],
    queryFn: fetchUserInformation,
  });
  if (error) {
    console.error(Error);
  }
  if (isSuccess) {
    return data;
  }
};
