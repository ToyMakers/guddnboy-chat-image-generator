"use client";
import React from "react";
import {
  useModifyBackgroundStore,
  useModifyMessageStore,
  useModifyNameStore,
  useModifyTimeStore,
  useModifyProfileStore,
} from "../store/useModifyBooleanStore";
import UserMessagePreview from "./UserMessagePreview";
import { useProfileStore } from "@/store/useUserFormStore";

const ContentPreview = () => {
  const setIsModifyName = useModifyNameStore((state) => state.setIsModifyName);
  const setIsModifyMessage = useModifyMessageStore(
    (state) => state.setIsModifyMessage
  );
  const setIsModifyTime = useModifyTimeStore((state) => state.setIsModifyTime);
  const setIsModifyBackground = useModifyBackgroundStore(
    (state) => state.setIsModifyBackground
  );
  const setIsModifyProfile = useModifyProfileStore(
    (state) => state.setIsModifyProfile
  );

  const goToModifyBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setIsModifyBackground(true);
      setIsModifyMessage(false);
      setIsModifyName(false);
      setIsModifyTime(false);
      setIsModifyProfile(false);
    }
  };

  const profiles = useProfileStore((state) => state.profiles);
  // const userMessagePreviews = usePreviewStore(
  //   (state) => state.userMessagePreviews
  // );

  return (
    <div
      className="w-80 h-96 border border-solid rounded-md border-slate-400 overflow-y-scroll hover:border hover:border-gray-500"
      onClick={goToModifyBackground}>
      <div className="flex flex-col">
        {profiles.map((profile, index) => (
          <div key={index} className="flex my-1 p-2 border-b border-gray-300">
            <UserMessagePreview
              username={profile.name}
              message={profile.message || ""}
              time={profile.time || ""}
            />
          </div>
        ))}
        {/* {userMessagePreviews.map((preview, index) => (
          <div key={index} className="flex my-1 p-2 border-b border-gray-300">
            <UserMessagePreview
              username={preview.name}
              message={preview.message}
              time={preview.time}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ContentPreview;
