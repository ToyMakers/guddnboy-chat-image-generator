"use client";
import React from "react";
import AddMessageComponent from "./AddMessage";
import ModifyNameComponent from "../modify/ModifyName";

import ModifyChattingComponent from "../modify/ModifyMessage";
import ModifyTimeComponent from "../modify/ModifyTime";
import ModifyBackgroundComponent from "../modify/ModifyBackground";
import ModifyProfileComponent from "../modify/ModifyProfile";

import {
  useModifyNameStore,
  useModifyMessageStore,
  useModifyTimeStore,
  useModifyProfileStore,
  useModifyBackgroundStore,
} from "../../store/useModifyBooleanStore";

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
      {isModifyName && <ModifyNameComponent />}
      {isModifyMessage && <ModifyChattingComponent />}
      {isModifyTime && <ModifyTimeComponent />}
      {isModifyBackground && <ModifyBackgroundComponent />}
      {isModifyProfile && <ModifyProfileComponent />}
      {!isModifyName &&
        !isModifyMessage &&
        !isModifyTime &&
        !isModifyBackground &&
        !isModifyProfile && <AddMessageComponent />}
    </div>
  );
};

export default AddUser;
