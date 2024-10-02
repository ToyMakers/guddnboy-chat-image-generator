import { create } from "zustand";

interface MessageStyle {
  backgroundcolor_Message: string;
  borderRounded_Message: number;
  fontWeight_Message: number;
  fontSize_Message: number;
  fontPadding_Message: number;
  fontColor_Message: string;
  width_Message: number;

  setFontWeight: (fontweight_Message: number) => void;
  setFontSize: (fontsize_Message: number) => void;
  setFontPadding: (fontPadding_Message: number) => void;
  setFontColor: (fontColor_Message: string) => void;
  setBorderRounded: (borderRounded_Message: number) => void;
  setBackgroundColor: (backgroundcolor_Message: string) => void;
  setWidth: (width_Message: number) => void;
}

export const useMessageStyleStore = create<MessageStyle>((set) => ({
  backgroundcolor_Message: "#ffffff",
  borderRounded_Message: 10,
  fontWeight_Message: 400,
  fontSize_Message: 12,
  fontPadding_Message: 10,
  fontColor_Message: "#000000",
  width_Message: 100,

  setFontWeight: (fontweight) => set({ fontWeight_Message: fontweight }),
  setFontSize: (fontsize) => set({ fontSize_Message: fontsize }),
  setFontPadding: (fontPadding_Message) =>
    set({ fontPadding_Message: fontPadding_Message }),
  setFontColor: (fontColor_Message) =>
    set({ fontColor_Message: fontColor_Message }),
  setBorderRounded: (borderRounded_Message) =>
    set({ borderRounded_Message: borderRounded_Message }),
  setBackgroundColor: (backgroundcolor_Message) =>
    set({ backgroundcolor_Message: backgroundcolor_Message }),
  setWidth: (width) => set({ width_Message: width }),
}));
