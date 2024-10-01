import { create } from "zustand";
import { useProfileStore } from "./useProfileStore"; // 프로필 스토어에서 이름과 이미지를 가져옴

interface UserMessage {
  id: number;
  name: string; // 프로필 이름
  message: string; // 메시지
  time: string; // 시간
}

interface UserMessageStore {
  userMessagePreviews: UserMessage[]; // 메시지 프리뷰 목록

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
      const { profiles } = useProfileStore.getState();
      const selectedProfile = profiles.find(
        (profile) => profile.id === selectedIndex
      );

      if (!selectedProfile) return state;

      return {
        userMessagePreviews: [
          ...state.userMessagePreviews,
          {
            id: selectedIndex || 0,
            name: selectedProfile.name,
            message,
            time,
          },
        ],
      };
    }),

  updateMessagePreview: (selectedIndex, name, message, time) =>
    set((state) => {
      const { profiles, selectedProfileId } = useProfileStore.getState();
      const selectedProfile = profiles.find(
        (profile) => profile.id === selectedProfileId
      );

      if (!selectedProfile) return state;

      return {
        userMessagePreviews: state.userMessagePreviews.map((userMessage) =>
          userMessage.id === selectedProfileId
            ? {
                id: selectedProfileId,
                name: selectedProfile.name,
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
