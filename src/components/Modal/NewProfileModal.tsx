"use client";
// import { useFormsStore } from "@/store/useFormsStore";
import { useUserStore } from "@/store/useUserStore";
import React from "react";
import { useState } from "react";

const CreateModal = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) => {
  const addUser = useUserStore((state) => state.addUser);
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  // const userForms = useFormsStore((state) => state.userForms);
  // const addUserForm = useFormsStore((state) => state.addUserForm);
  // const removeUserForm = useFormsStore((state) => state.removeUserForm);

  const handleAddUser = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    const newUser = {
      name,
      profilePicture,
      message: "",
      time: "",
    };
    addUser(newUser);
    handleClose();
  };

  return (
    <div className="flex fixed inset-0 bg-gray-700 bg-opacity-70 items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold">{title}</h2>
        <section>
          <div>
            이름
            <input
              type="text"
              placeholder="이름 입력"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded-md w-full mt-4"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="profile">프로필 사진</label>
            <input
              type="file"
              id="profile"
              onChange={(e) => setProfilePicture(e.target.files?.[0] || null)}
              className="mt-2"
            />
          </div>
        </section>
        <div className="mt-4">
          <button
            onClick={() => {
              handleAddUser();
            }}
            className="px-4 py-2 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
