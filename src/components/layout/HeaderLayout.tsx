"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { useModifyNameStore } from "@/store/useModifyBooleanStore";
import { useModifyMessageStore } from "@/store/useModifyBooleanStore";
import { useModifyTimeStore } from "@/store/useModifyBooleanStore";
import { useModifyBackgroundStore } from "@/store/useModifyBooleanStore";
import { useModifyProfileStore } from "@/store/useModifyBooleanStore";

const HeaderLayout = () => {
  const isModifyName = useModifyNameStore((state) => state.isModifyName);
  const isModifyMessage = useModifyMessageStore(
    (state) => state.isModifyMessage
  );
  const isModifyTime = useModifyTimeStore((state) => state.isModifyTime);
  const isModifyBackground = useModifyBackgroundStore(
    (state) => state.isModifyBackground
  );
  const isModifyProfile = useModifyProfileStore(
    (state) => state.isModifyProfile
  );

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

  const goToAddMessage = () => {
    setIsModifyName(false);
    setIsModifyMessage(false);
    setIsModifyTime(false);
    setIsModifyBackground(false);
    setIsModifyProfile(false);
  };

  return (
    <Fragment>
      <div className="flex max-w-full h-24 justify-between items-center mx-auto">
        <Link href="/">채팅 이미지 생성기</Link>
        <div className="flex gap-2">
          {isModifyMessage && (
            <div className="hover:cursor-pointer" onClick={goToAddMessage}>
              메세지 추가하기
            </div>
          )}
          {isModifyTime && (
            <div className="hover:cursor-pointer" onClick={goToAddMessage}>
              메세지 추가하기
            </div>
          )}
          {isModifyName && (
            <div className="hover:cursor-pointer" onClick={goToAddMessage}>
              메세지 추가하기
            </div>
          )}
          {isModifyBackground && (
            <div className="hover:cursor-pointer" onClick={goToAddMessage}>
              메세지 추가하기
            </div>
          )}
          {isModifyProfile && (
            <div className="hover:cursor-pointer" onClick={goToAddMessage}>
              메세지 추가하기
            </div>
          )}

          {!isModifyName &&
            !isModifyMessage &&
            !isModifyTime &&
            !isModifyBackground &&
            !isModifyProfile && <div>모양 수정하기</div>}

          <div>이미지로 저장하기</div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-500 border-solid w-full mb-4"></div>
    </Fragment>
  );
};

export default HeaderLayout;
