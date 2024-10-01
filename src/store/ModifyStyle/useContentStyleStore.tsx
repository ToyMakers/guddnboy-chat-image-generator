import { create } from "zustand";

interface ContentStyle {
  backgroundcolor: string;
  borderRounded: string;
  fontWeight: string;
  fontSize: string;
  fontPadding: string;
  fontColor: string;
  width: string;

  setFontWeight: (fontweight: string) => void;
  setFontSize: (fontsize: string) => void;
  setColor: (color: string) => void;
  setFontPadding: (fontPadding: string) => void;
  setFontColor: (fontColor: string) => void;
  setBorderRounded: (borderRounded: string) => void;
  setBackgroundColor: (backgroundcolor: string) => void;
  setWidth: (width: string) => void;
}

export const useContentStyleStore = create<ContentStyle>((set) => ({
  backgroundcolor: "white",
  borderRounded: "0px",
  fontWeight: "normal",
  fontSize: "16px",
  fontPadding: "0px",
  fontColor: "black",
  width: "100%",

  setFontWeight: (fontWeight) => set({ fontWeight }),
  setFontSize: (fontSize) => set({ fontSize }),
  setColor: (fontColor) => set({ fontColor }),
  setFontPadding: (fontPadding) => set({ fontPadding }),
  setFontColor: (fontColor) => set({ fontColor }),
  setBorderRounded: (borderRounded) => set({ borderRounded }),
  setBackgroundColor: (backgroundcolor) => set({ backgroundcolor }),
  setWidth: (width) => set({ width }),
}));
