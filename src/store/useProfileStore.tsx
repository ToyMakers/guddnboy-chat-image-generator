import { create } from "zustand";
import defaultImage from "../../public/images/default.png";

interface Profile {
  id: number;
  profileImage: string | null | typeof defaultImage;
  name: string;
}

interface ProfileStore {
  profiles: Profile[];
  selectedProfileId: number | null;

  addProfile: (id: number, profileImage: string | null, name: string) => void;
  removeProfile: (id: number) => void;
  setSelectProfileId: (id: number) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profiles: [],
  selectedProfileId: null,

  addProfile: (id, profileImage, name) =>
    set((state) => ({
      profiles: [...state.profiles, { id, profileImage, name }],
    })),

  removeProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== id),
    })),

  setSelectProfileId: (id: number) =>
    set(() => ({
      selectedProfileId: id,
    })),
}));
