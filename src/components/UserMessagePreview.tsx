import React from "react";
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
import { useChatStore } from "../stores/useChatStore";

const UserMessagePreview = ({ userIndex }: { userIndex: number }) => {
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
    backgroundColor_MyMessage,
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

  const userForms = useChatStore((state) => state.userForms);
  return (
    <div className="flex text-sm">
      {!userForms[userIndex].profile.isToggle ? (
        <>
          <div
            className="box-border h-fit cursor-pointer border border-solid border-transparent hover:border-slate-500"
            onClick={handleModifyProfile}
            style={{
              borderRadius: borderRadius,
            }}>
            <Image
              style={{
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                borderRadius: borderRadius,
                padding: padding,
                borderColor: borderColor,
                borderStyle: borderStyle,
                width: `${width}px`,
                minWidth: `${width}px`,
                height: `${height}px`,
              }}
              width={width}
              height={height}
              src={
                userForms[userIndex].profile.profileImage
                  ? URL.createObjectURL(
                      userForms[userIndex].profile.profileImage
                    )
                  : "/images/default.png"
              }
              alt="프로필"
            />
          </div>

          <div>
            <div>
              <div
                className="text-sm w-14 h-6 box-border rounded-md cursor-pointer border border-solid border-transparent hover:border-slate-500"
                onClick={handleModifyName}
                style={{
                  fontSize: fontsize_name,
                  fontWeight: fontweight_name,
                  color: color_name,
                }}>
                {userForms[userIndex].profile.name}
              </div>
            </div>
            <div
              className="flex items-center w-full px-2 m-1 bg-yourchatbg text-sm rounded-md box-border cursor-pointer border border-solid border-transparent hover:border-slate-500"
              onClick={handleModifyMessage}
              style={{
                fontSize: fontSize_Message,
                fontWeight: fontWeight_Message,
                padding: fontPadding_Message,
                color: fontColor_Message,
                borderRadius: borderRounded_Message,
                backgroundColor: backgroundcolor_Message,
                width: width_Message,
                wordBreak: "break-all",
                height: "auto",
                maxWidth: "200px",
                minHeight: "40px",
              }}>
              {userForms[userIndex].message.message}
            </div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div
              className="flex flex-col rounded-md w-full h-6 items-end box-border cursor-pointer border border-solid border-transparent hover:border-slate-500"
              onClick={handleModifyTime}
              style={{
                fontSize: fontSize_time,
                color: textColor_time,
              }}>
              {userForms[userIndex].message.time}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-end">
            <div
              className="w-full h-fit items-end rounded-md box-border cursor-pointer border border-solid border-transparent hover:border-slate-500"
              onClick={handleModifyTime}
              style={{ fontSize: fontSize_time, color: textColor_time }}>
              {userForms[userIndex].message.time}
            </div>
          </div>
          <div
            className="flex items-center w-full h-10 px-2 m-1 text-sm rounded-md box-border cursor-pointer border border-solid border-transparent hover:border-slate-500"
            onClick={handleModifyMessage}
            style={{
              fontSize: fontSize_Message,
              fontWeight: fontWeight_Message,
              padding: fontPadding_Message,
              color: fontColor_Message,
              borderRadius: borderRounded_Message,
              backgroundColor: backgroundColor_MyMessage,
              width: width_Message,
              wordWrap: "break-word",
              height: "auto",
              maxWidth: "200px",
              minHeight: "40px",
            }}>
            {userForms[userIndex].message.message}
          </div>
        </>
      )}
    </div>
  );
};

export default UserMessagePreview;
