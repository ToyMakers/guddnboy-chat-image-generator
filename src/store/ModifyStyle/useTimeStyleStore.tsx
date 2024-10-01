import { create } from "zustand";

interface TimeStyleState {
  fontSize: string;
  textColor: string;
  setFontSize: (size: string) => void;
  setTextColor: (color: string) => void;
}

export const useTimeStyleStore = create<TimeStyleState>((set) => ({
  fontSize: "12px",
  textColor: "#000000",
  setFontSize: (size: string) => set({ fontSize: `${size}px` }),
  setTextColor: (color: string) => set({ textColor: color }),
}));
