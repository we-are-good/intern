import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER } from "../queryKeys/userQueryKeys";
import { ProfileType } from "../../types/profileTypes";
import { updateUser } from "../../utils/api/userAPI";

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
