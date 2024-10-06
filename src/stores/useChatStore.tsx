interface Profile {
  id: number;
  profileImage: File | null;
  name: string;
}

interface Message {
  id: number;
  message: string;
  time: string;
}

interface UserForm {
  id: number;
  profile: Profile;
  message: Message;
}

import { create } from "zustand";

interface ChatState {
  userForms: UserForm[];
  profiles: Profile[];
  addUserForm: (userForm: UserForm) => void;
  addProfileOnly: (id: number, profileImage: File | null, name: string) => void;
  updateFormsProfile: (id: number, profile: Profile) => void;
  updateProfileOnly: (
    id: number,
    profileImage: File | null,
    name: string
  ) => void;
  updateMessage: (id: number, message: Message) => void;
  removeUserForm: (id: number) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  userForms: [],
  profiles: [{ id: 0, profileImage: null, name: "철수" }],
  addUserForm: (userForm: UserForm) =>
    set((state) => ({
      userForms: [...state.userForms, userForm],
    })),

  addProfileOnly: (id: number, profileImage: File | null, name: string) =>
    set((state) => ({
      profiles: [...state.profiles, { id, profileImage, name }],
    })),

  updateFormsProfile: (id: number, profile: Profile) =>
    set((state) => ({
      userForms: state.userForms.map((userform) =>
        userform.id === id ? { ...userform, profile } : userform
      ),
    })),

  updateProfileOnly: (
    profileId: number,
    profileImage: File | null,
    name: string
  ) =>
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === profileId ? { ...profile, profileImage, name } : profile
      ),
      userForms: state.userForms.map((userform) =>
        userform.profile.id === profileId
          ? { ...userform, profile: { id: profileId, profileImage, name } }
          : userform
      ),
    })),

  updateMessage: (id: number, message: Message) =>
    set((state) => ({
      userForms: state.userForms.map((userform) =>
        userform.id === id ? { ...userform, message } : userform
      ),
    })),

  removeUserForm: (id: number) =>
    set((state) => ({
      userForms: state.userForms.filter((userform) => userform.id !== id),
    })),
}));
