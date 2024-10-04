"use client";

import React, { Fragment, useEffect } from "react";
import { useProfileStore } from "../../store/useProfileStore";
import UserForm from "../UserForm";
import defaultImage from "../../../public/images/default.png";

const AddMessageComponent = () => {
  const defaultImageFile = new File([defaultImage.src], "default.png", {
    type: "image/png",
  });

  const profiles = useProfileStore((state) => state.profiles);

  const addProfile = useProfileStore((state) => state.addProfile);
  const removeProfile = useProfileStore((state) => state.removeProfile);
  const updateUserMessage = useProfileStore((state) => state.updateUserMessage);

  const addNewUserForm = () => {
    const defaultProfile = {
      id: profiles.length,
      profileImage: defaultImageFile,
      name: "고양이",
    };

    const newMessage = {
      id: profiles.length,
      message: "",
      time: "",
    };

    updateUserMessage(
      newMessage.id,
      defaultProfile.name,
      newMessage.message,
      newMessage.time
    );

    addProfile(
      defaultProfile.id,
      defaultProfile.profileImage,
      defaultProfile.name
    );
    console.log("profiles : ", profiles);
  };

  const deleteUserForm = (index: number) => {
    removeProfile(index);
  };

  useEffect(() => {
    addNewUserForm;
  }, []);

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
