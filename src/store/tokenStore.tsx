import { create } from "zustand";
import { tokenType } from "../types/tokenTypes";

interface Token {
  token: tokenType | null;
  addToken: (by: tokenType) => void;
  deleteToken: () => void;
}

export const useAuthStore = create<Token>()((set) => ({
  token: null,
  addToken: (by) => set(() => ({ token: by })),
  deleteToken: () => set(() => ({ token: null })),
}));
