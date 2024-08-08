import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../queryFunctions/userQueryFns";
import { USER } from "../queryKeys/userQueryKeys";
import { ProfileType } from "../../types/profileTypes";

export const useUserUpdateMutation = () => {
  const queryClient = useQueryClient();
  const userUpdateMutation = useMutation({
    mutationFn: async ({ newFile, newNickname }: ProfileType) =>
      await updateUser({ newFile, newNickname }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER] });
    },
  });
  return userUpdateMutation;
};
