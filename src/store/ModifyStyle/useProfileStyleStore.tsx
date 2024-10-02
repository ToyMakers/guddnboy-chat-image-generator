import { create } from "zustand";

interface ProfileStyle {
  width: number;
  height: number;
  backgroundColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  borderColor: string;
  borderStyle: string;

  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setBorderWidth: (borderWidth: number) => void;
  setBorderRadius: (borderRadius: number) => void;
  setPadding: (padding: number) => void;
  setBorderColor: (borderColor: string) => void;
  setBorderStyle: (borderStyle: string) => void;
}

export const useProfileStyleStore = create<ProfileStyle>((set) => ({
  width: 40,
  height: 40,
  backgroundColor: "#ffffff",
  borderWidth: 0,
  borderRadius: 0,
  padding: 0,
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
