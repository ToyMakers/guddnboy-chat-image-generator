import React from "react";
import Image from "next/image";
import defaultProfile from "../../public/images/default.png";
import {
  useModifyMessageStore,
  useModifyNameStore,
  useModifyTimeStore,
  useModifyBackgroundStore,
  useModifyProfileStore,
} from "@/store/useModifyBooleanStore";

import { useTimeStyleStore } from "@/store/time/useTimeStyleStore";

const UserMessagePreview = ({
  username,
  message,
  time,
}: {
  username: string;
  message: string;
  time: string;
}) => {
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

  const { fontSize, textColor } = useTimeStyleStore();

  const handleModifyName = () => {
    setIsModifyBackground(false);
    setIsModifyMessage(false);
    setIsModifyName(true);
    setIsModifyTime(false);
    setIsModifyProfile(false);
  };

  const handleModifyMessage = () => {
    setIsModifyBackground(false);
    setIsModifyMessage(true);
    setIsModifyName(false);
    setIsModifyTime(false);
    setIsModifyProfile(false);
  };

  const handleModifyTime = () => {
    setIsModifyBackground(false);
    setIsModifyMessage(false);
    setIsModifyName(false);
    setIsModifyTime(true);
    setIsModifyProfile(false);
  };

  const handleModifyProfile = () => {
    setIsModifyBackground(false);
    setIsModifyMessage(false);
    setIsModifyName(false);
    setIsModifyTime(false);
    setIsModifyProfile(true);
  };

  return (
    <div className="flex text-sm">
      <div
        className="relative flex size-10 justify-center items-center align-middle hover:cursor-pointer hover:border border-solid border-slate-500 rounded-full"
        onClick={handleModifyProfile}>
        <Image
          layout="fill"
          className="rounded-full"
          objectFit="cover"
          src={defaultProfile}
          alt="프로필"></Image>
      </div>
      <div
        className="text-sm w-10 h-6 hover:cursor-pointer hover:border border-solid border-slate-500 rounded-md"
        onClick={handleModifyName}>
        {username}
      </div>
      <div
        className="flex items-center w-auto h-auto px-2 m-1 bg-yourchatbg text-sm rounded-md hover:cursor-pointer hover:border border-solid border-slate-500"
        onClick={handleModifyMessage}>
        {message}
      </div>
      <div
        className="flex items-end hover:cursor-pointer hover:border border-solid border-slate-500"
        onClick={handleModifyTime}
        style={{ fontSize: fontSize, color: textColor }}>
        {time}
      </div>
    </div>
  );
};

export default UserMessagePreview;
