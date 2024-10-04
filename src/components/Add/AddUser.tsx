"use client";
import React from "react";
import AddMessage from "./AddMessage";
import ModifyName from "../modify/ModifyName";

import ModifyChatting from "../modify/ModifyMessage";
import ModifyTime from "../modify/ModifyTime";
import ModifyBackground from "../modify/ModifyBackground";
import ModifyProfile from "../modify/ModifyProfile";

import {
  useModifyNameStore,
  useModifyMessageStore,
  useModifyTimeStore,
  useModifyProfileStore,
  useModifyBackgroundStore,
} from "../../stores/useModifyBooleanStore";

const AddUser = () => {
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

  return (
    <div className="w-[680px] h-96 bg-yourchatbg p-4 border border-solid rounded-md border-slate-400">
      {isModifyName && <ModifyName />}
      {isModifyMessage && <ModifyChatting />}
      {isModifyTime && <ModifyTime />}
      {isModifyBackground && <ModifyBackground />}
      {isModifyProfile && <ModifyProfile />}
      {!isModifyName &&
        !isModifyMessage &&
        !isModifyTime &&
        !isModifyBackground &&
        !isModifyProfile && <AddMessage />}
    </div>
  );
};

export default AddUser;
