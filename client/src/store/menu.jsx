import { create } from "zustand";

export const useMenu = create((set) => ({
  showMenu: false,
  setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));
