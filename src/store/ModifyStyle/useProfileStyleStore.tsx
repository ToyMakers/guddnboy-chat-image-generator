import { create } from "zustand";

interface ProfileStyle {
  width: string;
  height: string;
  backgroundColor: string;
  borderWidth: string;
  borderRadius: string;
  padding: string;
  borderColor: string;
  borderStyle: string;

  setWidth: (width: string) => void;
  setHeight: (height: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setBorderWidth: (borderWidth: string) => void;
  setBorderRadius: (borderRadius: string) => void;
  setPadding: (padding: string) => void;
  setBorderColor: (borderColor: string) => void;
  setBorderStyle: (borderStyle: string) => void;
}

export const useProfileStyleStore = create<ProfileStyle>((set) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  borderWidth: "0",
  borderRadius: "0",
  padding: "0",
  borderColor: "#000000",
  borderStyle: "solid",

  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBorderWidth: (borderWidth) => set({ borderWidth }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),
  setPadding: (padding) => set({ padding }),
  setBorderColor: (borderColor) => set({ borderColor }),
  setBorderStyle: (borderStyle) => set({ borderStyle }),
}));
