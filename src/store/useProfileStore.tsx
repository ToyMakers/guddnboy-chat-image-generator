import { create } from "zustand";
import defaultImage from "../../public/images/default.png";

interface Profile {
  id: number;
  profileImage: string | null | typeof defaultImage; // 프로필 이미지
  name: string; // 프로필 이름
}

interface ProfileStore {
  profiles: Profile[]; // 여러 프로필 관리
  selectedProfileId: number | null; // 선택된 프로필 ID 저장

  addProfile: (id: number, profileImage: string | null, name: string) => void; // 프로필 추가
  removeProfile: (id: number) => void; // 프로필 삭제
  setSelectProfileId: (id: number) => void; // 프로필 선택
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
