"use client";
import React from "react";
import UserMessagePreview from "./UserMessagePreview";
import { useUserStore } from "../store/useUserStore";
import {
  useModifyBackgroundStore,
  useModifyMessageStore,
  useModifyNameStore,
  useModifyTimeStore,
  useModifyProfileStore,
} from "../store/useModifyBooleanStore";

const ContentPreview = () => {
  const users = useUserStore((state) => state.users);

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

  return (
    <div
      className="w-80 h-96 border border-solid rounded-md border-slate-400 overflow-y-scroll hover:border hover:border-gray-500"
      onClick={goToModifyBackground}>
      <div className="flex flex-col">
        {users.map((user, index) => (
          <div key={index} className="flex my-1 p-2 border-b border-gray-300">
            <UserMessagePreview
              username={user.name}
              message={user.message}
              time={user.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPreview;
