"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useProfileStore } from "@/store/useUserFormStore";
import defaultImage from "../../../public/images/default.png";

const NewProfileModal = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>();

  const defaultImageFile = new File([defaultImage.src], "default.png", {
    type: "image/png",
  });

  const addProfile = useProfileStore((state) => state.addProfile);
  const profiles = useProfileStore((state) => state.profiles);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setProfileImage(e.target.files[0]);
  };

  const handleAddUser = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (name.length > 5) {
      alert("이름은 5글자 이하로 입력해주세요.");
      return;
    }
    addProfile(profiles.length, profileImage ?? defaultImageFile, name);
    console.log("profiles : ", profiles);
    handleClose();
  };

  useEffect(() => {
    if (profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        const newProfileImageFile = new File([base64data], profileImage.name, {
          type: profileImage.type,
        });
        setProfileImage(newProfileImageFile);
      };
      reader.readAsDataURL(profileImage);
    }
  }, [profileImage]);

  return (
    <div className="flex fixed inset-0 z-0 bg-gray-700 bg-opacity-70 items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="w-full flex justify-end size-10 text-xl">
          <button onClick={handleClose} className="size-10">
            X
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <section className="w-[420px] h-[180px]">
          <div className="flex justify-between items-center">
            이름
            <input
              type="text"
              placeholder="이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-72 border p-4 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center mt-4 gap-1">
            프로필 사진
            <input
              type="file"
              onChange={onFileChange}
              className="w-72 border p-4 rounded-md"
            />
          </div>
        </section>
        <div className="mt-4">
          <button
            onClick={handleAddUser}
            className="px-4 py-2 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProfileModal;
