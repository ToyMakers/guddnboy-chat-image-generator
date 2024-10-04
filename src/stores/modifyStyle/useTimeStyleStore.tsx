import { create } from "zustand";

interface TimeStyleState {
  fontSize_time: string;
  textColor_time: string;
  setFontSize: (size: string) => void;
  setTextColor: (color: string) => void;
}

export const useTimeStyleStore = create<TimeStyleState>((set) => ({
  fontSize_time: "12px",
  textColor_time: "#000000",
  setFontSize: (size: string) => set({ fontSize_time: `${size}px` }),
  setTextColor: (color: string) => set({ textColor_time: color }),
}));
