"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import {
  useModifyNameStore,
  useModifyMessageStore,
  useModifyTimeStore,
  useModifyBackgroundStore,
  useModifyProfileStore,
} from "../../stores/useModifyBooleanStore";

const HeaderLayout = ({
  onCapture,
  onCopyToClipboard,
}: {
  onCapture: () => void;
  onCopyToClipboard: () => void;
}) => {
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
          <div className="flex gap-2 text-center items-center align-middle">
            {(isModifyMessage ||
              isModifyTime ||
              isModifyName ||
              isModifyBackground ||
              isModifyProfile) && (
              <div
                className="flex items-center justify-center w-36 h-12 hover:cursor-pointer transition hover:bg-gray-200 rounded-md"
                onClick={goToAddMessage}>
                메세지 추가하기
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              className="w-36 h-12 hover:cursor-pointer transition hover:bg-gray-200 rounded-md"
              onClick={onCapture}>
              이미지로 저장하기
            </button>
            <button
              className="w-36 h-12 hover:cursor-pointer transition hover:bg-gray-200 rounded-md"
              onClick={onCopyToClipboard}>
              클립보드에 복사하기
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-500 border-solid w-full mb-4"></div>
    </Fragment>
  );
};

export default HeaderLayout;
