"use client";

import React, { Fragment, useEffect, useRef } from "react";
import UserForm from "../UserForm";
import { useChatStore } from "../../stores/useChatStore";

const AddMessage = () => {
  const userForms = useChatStore((state) => state.userForms);
  const profiles = useChatStore((state) => state.profiles);

  const addUserForm = useChatStore((state) => state.addUserForm);
  const removeUserForm = useChatStore((state) => state.removeUserForm);
  const idCounter = useRef(0);

  const addNewUserForm = () => {
    const defaultProfile = profiles[0];

    const defaultMessage = {
      id: idCounter.current,
      message: "",
      time: "",
    };

    const newUserForm = {
      id: idCounter.current,
      profile: defaultProfile,
      message: defaultMessage,
      isToggle: false,
    };

    addUserForm(newUserForm);
    idCounter.current += 1;
  };

  const deleteUserForm = (id: number) => {
    removeUserForm(id);
  };

  useEffect(() => {
    console.log("메세지 추가 됨");
  });

  return (
    <Fragment>
      <div className="w-full h-80 overflow-scroll">
        <section className="flex justify-around">
          <div className="flex w-32 h-12 text-left items-center">
            말 한 사람
          </div>
          <div className="flex items-center w-64 h-12 text-left pl-2">내용</div>
          <div className="flex items-center w-32 h-12 text-left">시간</div>
          <div className="flex items-center size-12"></div>
        </section>
        {userForms.length > 0 ? (
          <div className="w-full">
            {userForms.map((userForm, index) => (
              <UserForm
                key={userForm.id}
                userIndex={index}
                onRemove={() => deleteUserForm(userForm.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-4">메세지를 추가해주세요.</div>
        )}
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

export default AddMessage;
