"use client";

import React, { Fragment } from "react";
import { useMessageStore } from "@/store/useUserFormStore";
import { useProfileStore } from "@/store/useUserFormStore";
import UserForm from "../UserForm";
import defaultImage from "../../../public/images/default.png";

const AddMessageComponent = () => {
  const profiles = useProfileStore((state) => state.profiles);
  const messages = useMessageStore((state) => state.messages);

  const addProfile = useProfileStore((state) => state.addProfile);
  const removeProfile = useProfileStore((state) => state.removeProfile);

  const addMessage = useMessageStore((state) => state.addMessage);
  const removeMessage = useMessageStore((state) => state.removeMessage);

  const addNewUserForm = () => {
    const newProfile = {
      id: String(profiles.length),
      profileImage: defaultImage,
      name: "",
    };

    const newMessage = {
      id: String(profiles.length),
      message: "",
      time: "",
    };

    addMessage(newMessage);
    addProfile(newProfile.id, newProfile.profileImage, newProfile.name);
  };

  const deleteUserForm = (index: number) => {
    removeMessage(messages[index].id);
    removeProfile(profiles[index].id);
  };

  return (
    <Fragment>
      <div className="w-full h-80 overflow-scroll">
        <section className="flex justify-around">
          <div className="flex w-32 h-12  text-left items-center">
            말 한 사람
          </div>
          <div className="flex items-center w-64 h-12 text-left pl-2">내용</div>
          <div className="flex items-center w-32 h-12 text-left">시간</div>
          <div className="flex items-center size-12"></div>
        </section>
        <div className="w-full">
          {profiles.map((_, index) => (
            <UserForm
              key={index}
              userIndex={index}
              onRemove={() => deleteUserForm(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full border border-solid rounded-md border-slate-400">
        <button
          onClick={addNewUserForm}
          className="w-full bg-chatbg text-white py-2 px-4 rounded-md transition hover:bg-gray-500">
          메세지 추가
        </button>
      </div>
    </Fragment>
  );
};

export default AddMessageComponent;
