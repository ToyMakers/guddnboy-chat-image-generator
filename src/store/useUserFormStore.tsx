import { create } from "zustand";

interface Profile {
  id: string;
  profileImage: File | null;
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
  addProfile: (profile: Profile) => void;
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
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
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
