import { create } from "zustand";

interface IsModifyName {
  isModifyName: boolean;
  setIsModifyName: (isModifyName: boolean) => void;
}

interface IsModifyMessage {
  isModifyMessage: boolean;
  setIsModifyMessage: (isModifyMessage: boolean) => void;
}

interface IsModifyTime {
  isModifyTime: boolean;
  setIsModifyTime: (isModifyTime: boolean) => void;
}

interface IsModifyBackground {
  isModifyBackground: boolean;
  setIsModifyBackground: (isModifyBackground: boolean) => void;
}

interface IsModifyProfile {
  isModifyProfile: boolean;
  setIsModifyProfile: (isModifyProfile: boolean) => void;
}

export const useModifyNameStore = create<IsModifyName>((set) => ({
  isModifyName: false,
  setIsModifyName: (isModifyName: boolean) => set({ isModifyName }),
}));

export const useModifyMessageStore = create<IsModifyMessage>((set) => ({
  isModifyMessage: false,
  setIsModifyMessage: (isModifyMessage: boolean) => set({ isModifyMessage }),
}));

export const useModifyTimeStore = create<IsModifyTime>((set) => ({
  isModifyTime: false,
  setIsModifyTime: (isModifyTime: boolean) => set({ isModifyTime }),
}));

export const useModifyBackgroundStore = create<IsModifyBackground>((set) => ({
  isModifyBackground: false,
  setIsModifyBackground: (isModifyBackground: boolean) =>
    set({ isModifyBackground }),
}));

export const useModifyProfileStore = create<IsModifyProfile>((set) => ({
  isModifyProfile: false,
  setIsModifyProfile: (isModifyProfile: boolean) => set({ isModifyProfile }),
}));
