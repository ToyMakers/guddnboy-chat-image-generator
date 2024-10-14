"use client";
import React from "react";
import {
  useModifyBackgroundStore,
  useModifyMessageStore,
  useModifyNameStore,
  useModifyTimeStore,
  useModifyProfileStore,
} from "../stores/useModifyBooleanStore";
import UserMessagePreview from "./UserMessagePreview";
import { useBackgroundStyleStore } from "../stores/modifyStyle/useBackgroundStyleStore";
import { useChatStore } from "../stores/useChatStore";

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

  const backgroundColor = useBackgroundStyleStore(
    (state) => state.backgroundColor
  );

  const backgroundPadding = useBackgroundStyleStore(
    (state) => state.backgroundPadding
  );

  const userFormGap = useBackgroundStyleStore((state) => state.userFormGap);
  const userForms = useChatStore((state) => state.userForms);

  return (
    <div
      className="w-80 h-96 border border-solid rounded-md border-slate-400 overflow-y-scroll hover:border hover:border-gray-500"
      onClick={goToModifyBackground}
      style={{
        backgroundColor: backgroundColor,
        padding: `${backgroundPadding}px`,
      }}>
      <div className="flex flex-col" style={{ gap: `${userFormGap}px` }}>
        {userForms.map((userForm, index) => (
          <div
            key={`preview-${userForm.id}`}
            className={`flex my-1 p-2 border-b border-gray-300 ${
              userForm.profile.isToggle ? "justify-end" : ""
            }`}>
            <UserMessagePreview userIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPreview;
