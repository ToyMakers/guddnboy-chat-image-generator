import React, { useEffect } from "react";
import Image from "next/image";
import {
  useModifyMessageStore,
  useModifyNameStore,
  useModifyTimeStore,
  useModifyBackgroundStore,
  useModifyProfileStore,
} from "../stores/useModifyBooleanStore";

import { useTimeStyleStore } from "../stores/modifyStyle/useTimeStyleStore";
import { useProfileStyleStore } from "../stores/modifyStyle/useProfileStyleStore";
import { useNameStyleStore } from "../stores/modifyStyle/useNameStyleStore";
import { useMessageStyleStore } from "../stores/modifyStyle/useMessageStyleStore";

const UserMessagePreview = ({
  profileImage,
  username,
  message,
  time,
}: {
  profileImage: File | null;
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

  const { fontSize_time, textColor_time } = useTimeStyleStore();
  const {
    width,
    height,
    backgroundColor,
    borderWidth,
    borderRadius,
    padding,
    borderColor,
    borderStyle,
  } = useProfileStyleStore();
  const { fontsize_name, fontweight_name, color_name } = useNameStyleStore();
  const {
    fontSize_Message,
    fontWeight_Message,
    fontPadding_Message,
    fontColor_Message,
    borderRounded_Message,
    backgroundcolor_Message,
    width_Message,
  } = useMessageStyleStore();

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

  useEffect(() => {
    console.log("profileImage : ", profileImage);
  }, [profileImage]);

  return (
    <div className="flex text-sm">
      <div
        className="relative flex justify-center items-center align-middle hover:cursor-pointer hover:border border-solid border-slate-500"
        onClick={handleModifyProfile}>
        <Image
          style={{
            backgroundColor: backgroundColor,
            borderWidth: borderWidth,
            borderRadius: borderRadius,
            padding: padding,
            borderColor: borderColor,
            borderStyle: borderStyle,
          }}
          width={width}
          height={height}
          src={
            typeof profileImage === "string"
              ? profileImage
              : "/images/default.png"
          }
          alt="프로필"
        />
      </div>
      <div
        className="text-sm w-10 h-6 hover:cursor-pointer hover:border border-solid border-slate-500 rounded-md"
        onClick={handleModifyName}
        style={{
          fontSize: fontsize_name,
          fontWeight: fontweight_name,
          color: color_name,
        }}>
        {username}
      </div>
      <div
        className="flex items-center w-auto h-auto px-2 m-1 bg-yourchatbg text-sm rounded-md hover:cursor-pointer hover:border border-solid border-slate-500"
        onClick={handleModifyMessage}
        style={{
          fontSize: fontSize_Message,
          fontWeight: fontWeight_Message,
          padding: fontPadding_Message,
          color: fontColor_Message,
          borderRadius: borderRounded_Message,
          backgroundColor: backgroundcolor_Message,
          width: width_Message,
        }}>
        {message}
      </div>
      <div
        className="flex items-end hover:cursor-pointer hover:border border-solid border-slate-500"
        onClick={handleModifyTime}
        style={{ fontSize: fontSize_time, color: textColor_time }}>
        {time}
      </div>
    </div>
  );
};

export default UserMessagePreview;
