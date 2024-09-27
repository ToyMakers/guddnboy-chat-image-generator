"use client";
import React from "react";
import AddMessageComponent from "./AddMessageComponent";
import ModifyNameComponent from "../Modify/ModifyNameComponent";
import { useModifyNameStore } from "@/store/useModifyBooleanStore";
import { useModifyMessageStore } from "@/store/useModifyBooleanStore";
import { useModifyTimeStore } from "@/store/useModifyBooleanStore";
import { useModifyProfileStore } from "@/store/useModifyBooleanStore";
import { useModifyBackgroundStore } from "@/store/useModifyBooleanStore";

import ModifyChattingComponent from "../Modify/ModifyMessageComponent";
import ModifyTimeComponent from "../Modify/ModifyTimeComponent";
import ModifyBackgroundComponent from "../Modify/ModifyBackgroundComponent";
import ModifyProfileComponent from "../Modify/ModifyProfileComponent";

const AddUserPage = () => {
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

export default AddUserPage;
