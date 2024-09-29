import { create } from "zustand";
import defaultImage from "../../public/images/default.png";

interface Profile {
  id: string;
  profileImage: File | null | typeof defaultImage;
  name: string;
}

interface Message {
  id: string;
  message: string;
  time: string;
}

interface ProfileStore {
  profiles: Profile[];
  selectedProfileId: string | null;

  addProfile: (
    id: string,
    profileImage: File | typeof defaultImage,
    name: string
  ) => void;
  removeProfile: (id: string) => void;
  selectProfile: (id: string) => void;
}

interface MessageStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  removeMessage: (profileId: string) => void;
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
  selectProfile: (id) => set({ selectedProfileId: id }),
}));

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  removeMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),
}));
