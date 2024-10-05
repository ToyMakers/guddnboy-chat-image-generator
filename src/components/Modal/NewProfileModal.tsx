"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useProfileStore } from "../../stores/useProfileStore";

const NewProfileModal = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const profiles = useProfileStore((state) => state.profiles);
  const addProfile = useProfileStore((state) => state.addProfile);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setProfileImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
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
    addProfile(profiles.length, profileImage ?? null, name);
    console.log("profiles : ", profiles);
    handleClose();
  };

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
          {previewImage && (
            <div className="mt-4">
              <Image
                src={previewImage}
                alt="프로필 미리보기"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
          )}
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
