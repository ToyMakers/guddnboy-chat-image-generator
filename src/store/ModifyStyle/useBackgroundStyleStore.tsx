import { create } from "zustand";

interface BackgroundStyleState {
  backgroundColor: string;
  backgroundPadding: string;
  userFormGap: string;

  setBackgroundColor: (color: string) => void;
  setBackgroundPadding: (padding: string) => void;
  setUserFormGap: (gap: string) => void;
}

export const useBackgroundStyleStore = create<BackgroundStyleState>((set) => ({
  backgroundColor: "#ffffff",
  backgroundPadding: "0",
  userFormGap: "0",

  setBackgroundColor: (color: string) => set({ backgroundColor: color }),
  setBackgroundPadding: (padding: string) =>
    set({ backgroundPadding: padding }),
  setUserFormGap: (gap: string) => set({ userFormGap: gap }),
}));
