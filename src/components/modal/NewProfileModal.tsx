"use client";
import React, { useEffect, useState } from "react";
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
  const [randomProfile, setRandomProfile] = useState({
    name: "",
    imageUrl: "",
  });

  const profiles = useChatStore((state) => state.profiles);
  const addProfileOnly = useChatStore((state) => state.addProfileOnly);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setProfileImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddProfile = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (name.length > 5) {
      alert("이름은 5글자 이하로 입력해주세요.");
      return;
    }
    if (name in profiles.map((profile) => profile.name)) {
      alert("이미 존재하는 이름입니다.");
      return;
    }
    addProfileOnly(profiles.length, profileImage ?? null, name);
    console.log("handleAddProfile 실행 : ");
    console.log("profiles : ", profiles);
    handleClose();
  };

  const handleRandomGenerate = async () => {
    const randomNewProfile = await getRandomProfile();
    const response = await fetch(randomNewProfile.imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "profile.svg", { type: blob.type });

    setName(randomNewProfile.name);
    setPreviewImage(randomNewProfile.imageUrl);
    setProfileImage(file);

    console.log("handleRandomGenerate 실행 : ", randomNewProfile);
    console.log("profiles : ", profiles);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const randomNewProfile = await getRandomProfile();
      setRandomProfile(randomNewProfile);
      console.log("randomProfile : ", randomProfile);
    };

    fetchProfile();
  }, []);

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
            onClick={handleAddProfile}
            className="px-4 py-2 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProfileModal;
