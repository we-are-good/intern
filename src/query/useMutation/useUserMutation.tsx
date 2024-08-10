import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER } from "../queryKeys/userQueryKeys";
import { updateUser } from "../../utils/api/userAPI";

import type { ProfileType } from "../../types/profileTypes";
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
