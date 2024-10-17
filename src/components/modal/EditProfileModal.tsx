"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useChatStore } from "../../stores/useChatStore";

const getRandomProfile = async () => {
  const randomNames = [
    "영희",
    "훈이",
    "맹구",
    "희동",
    "짱구",
    "유리",
    "둘리",
    "짱아",
    "또치",
  ];
  const randomSeed = Math.random().toString(36).substring(7);
  const randomImageUrl = `https://api.dicebear.com/9.x/croodles-neutral/png?seed=${randomSeed}`;

  return {
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    imageUrl: randomImageUrl,
  };
};

const EditProfileModal = ({
  title,
  editProfileIndex,
  profile,
  handleClose,
}: {
  title: string;
  editProfileIndex: number;
  profile: { id: number; name: string; profileImage: File | null };
  handleClose: () => void;
}) => {
  const profiles = useChatStore((state) => state.profiles);
  const [name, setName] = useState(profile.name);
  const [profileImage, setProfileImage] = useState<File | null>(
    profile.profileImage
  );
  const [previewImage, setPreviewImage] = useState<string | null>(
    profile.profileImage ? URL.createObjectURL(profile.profileImage) : null
  );

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setProfileImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const updateProfileOnly = useChatStore((state) => state.updateProfileOnly);
  const deleteProfile = useChatStore((state) => state.deleteProfile);

  const handleRandomGenerate = async () => {
    const randomNewProfile = await getRandomProfile();
    const response = await fetch(randomNewProfile.imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "profile.svg", { type: blob.type });

    setName(randomNewProfile.name);
    setPreviewImage(randomNewProfile.imageUrl);
    setProfileImage(file);
  };

  const handleSave = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (name.length > 5) {
      alert("이름은 5글자 이하로 입력해주세요.");
      return;
    }

    updateProfileOnly(editProfileIndex, profileImage, name, false);
    console.log(`profiles : ${profiles}`);
    handleClose();
  };

  const handleDeleteProfile = () => {
    if (profiles.length === 1) {
      alert("프로필은 최소 1개 이상이어야 합니다.");
      return;
    } else {
      if (confirm("해당 프로필을 삭제하시겠습니까?")) {
        deleteProfile(editProfileIndex);
      }
      handleClose();
    }
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
            className="px-4 py-2 bg-chatbg text-white rounded-md transition hover:bg-sky-700 mr-4"
            onClick={handleRandomGenerate}>
            랜덤 생성
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 mr-4 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
            저장하기
          </button>
          <button
            onClick={handleDeleteProfile}
            className="px-4 py-2 ml-4 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
