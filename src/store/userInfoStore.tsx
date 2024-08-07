import { create } from "zustand";
import { UserType } from "../types/userTypes";

interface Auth {
  user: UserType | null;
  userLogin: (by: UserType) => void;
  userLogout: () => void;
}

export const useAuthStore = create<Auth>()((set) => ({
  user: null,
  userLogin: (by) => set(() => ({ user: by })),
  userLogout: () => set(() => ({ user: null })),
}));
