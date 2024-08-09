import { create } from "zustand";

interface Token {
  token: string;
  addToken: (by: string) => void;
  deleteToken: () => void;
}

export const useTokenStore = create<Token>()((set) => ({
  token: "",
  addToken: (by) => set(() => ({ token: by })),
  deleteToken: () => set(() => ({ token: "" })),
}));
