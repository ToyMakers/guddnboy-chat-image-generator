import { create } from "zustand";
import { useChatStore } from "./useChatStore";

interface UserMessage {
  id: number;
  name: string;
  message: string;
  time: string;
}

interface UserMessageStore {
  userMessagePreviews: UserMessage[];

  addUserMessagePreview: (
    selectedIndex: number,
    name: string,
    message: string,
    time: string
  ) => void;

  updateMessagePreview: (
    selectedIndex: number,
    name: string,
    message: string,
    time: string
  ) => void;

  removeUserMessagePreview: (id: number) => void;
}

export const usePreviewStore = create<UserMessageStore>((set) => ({
  userMessagePreviews: [],

  addUserMessagePreview: (selectedIndex, name, message, time) =>
    set((state) => {
      const userForms = useChatStore.getState().userForms;
      const selectedProfile = userForms.find(
        (profile) => profile.id === selectedIndex
      );

      if (!selectedProfile) return state;

      return {
        userMessagePreviews: [
          ...state.userMessagePreviews,
          {
            id: selectedIndex || 0,
            name: selectedProfile.profile.name,
            message,
            time,
          },
        ],
      };
    }),

  updateMessagePreview: (selectedIndex, name, message, time) =>
    set((state) => {
      const userForms = useChatStore.getState().userForms;
      const selectedProfile = userForms.find(
        (profile) => profile.id === selectedIndex
      );

      if (!selectedProfile) return state;

      return {
        userMessagePreviews: state.userMessagePreviews.map((userMessage) =>
          userMessage.id === selectedIndex
            ? {
                id: selectedIndex,
                name: selectedProfile.profile.name,
                message,
                time,
              }
            : userMessage
        ),
      };
    }),

  removeUserMessagePreview: (id) =>
    set((state) => ({
      userMessagePreviews: state.userMessagePreviews.filter(
        (userMessage) => userMessage.id !== id
      ),
    })),
}));
