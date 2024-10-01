import { create } from "zustand";

interface NameStyle {
  fontweight: string;
  fontsize: string;
  color: string;

  setFontWeight: (fontweight: string) => void;
  setFontSize: (fontsize: string) => void;
  setColor: (color: string) => void;
}

export const useNameStyleStore = create<NameStyle>((set) => ({
  fontweight: "normal",
  fontsize: "16px",
  color: "black",

  setFontWeight: (fontweight) => set({ fontweight }),
  setFontSize: (fontsize) => set({ fontsize }),
  setColor: (color) => set({ color }),
}));
