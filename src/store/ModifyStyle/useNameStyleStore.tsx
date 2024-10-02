import { create } from "zustand";

interface NameStyle {
  fontweight_name: string;
  fontsize_name: string;
  color_name: string;

  setFontWeight: (fontweight: string) => void;
  setFontSize: (fontsize: string) => void;
  setColor: (color: string) => void;
}

export const useNameStyleStore = create<NameStyle>((set) => ({
  fontweight_name: "400",
  fontsize_name: "12px",
  color_name: "#000000",

  setFontWeight: (weight) => set({ fontweight_name: weight }),
  setFontSize: (size) => set({ fontsize_name: `${size}px` }),
  setColor: (color) => set({ color_name: color }),
}));
