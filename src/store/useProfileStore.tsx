import { create } from "zustand";
import defaultImage from "../../public/images/default.png";

interface Profile {
  id: number;
  profileImage: File | null | typeof defaultImage;
  name: string;
  message?: string;
  time?: string;
}

interface ProfileStore {
  profiles: Profile[];
  selectedProfileId: number | null;
  selectedFormId: number | null;

  addProfile: (id: number, profileImage: File | null, name: string) => void;
  updateUserMessage: (
    id: number,
    name: string,
    message: string,
    time: string
  ) => void;
  removeProfile: (id: number) => void;
  setSelectProfileId: (id: number) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profiles: [],
  selectedProfileId: null,
  selectedFormId: null,

  addProfile: (id, profileImage, name) =>
    set((state) => ({
      profiles: [...state.profiles, { id, profileImage, name }],
    })),

  updateUserMessage: (
    id: number,
    name: string,
    message: string,
    time: string
  ) => {
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === id ? { ...profile, name, message, time } : profile
      ),
    }));
  },

  removeProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== id),
    })),

  setSelectProfileId: (id: number) =>
    set(() => ({
      selectedProfileId: id,
    })),

  setSelectedFormId: (id: number) =>
    set(() => ({
      selectedFormId: id,
    })),
}));
