import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewProfileModal from "./modal/NewProfileModal";
import EditProfileModal from "./modal/EditProfileModal";
import { useChatStore } from "../stores/useChatStore";

const UserForm = ({
  onRemove,
  userIndex,
}: {
  userIndex: number;
  onRemove: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editProfileIndex, setEditProfileIndex] = useState<number | null>(null);
  const userForms = useChatStore((state) => state.userForms);
  const profiles = useChatStore((state) => state.profiles);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const updateFormsProfile = useChatStore((state) => state.updateFormsProfile);
  const setIsToggle = useChatStore((state) => state.setIsToggle);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;

    updateMessage(userForms[userIndex].id, {
      message: userForms[userIndex].message.message,
      time: newTime,
    });
  };

  const handleModalOpen = () => {
    setIsOpen(true);
    setIsDropdownOpen(false);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleToggle = () => {
    setIsToggle(
      userForms[userIndex].profile.id,
      !userForms[userIndex].profile.isToggle
    );
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;

    updateMessage(userForms[userIndex].id, {
      message: newMessage,
      time: userForms[userIndex].message.time ?? "",
    });
  };

  useEffect(() => {
    updateMessage(userForms[userIndex].id, {
      message: userForms[userIndex].message.message,
      time: userForms[userIndex].message.time,
    });
    updateFormsProfile(userIndex, {
      id: userForms[userIndex].profile.id,
      profileImage: userForms[userIndex].profile.profileImage,
      name: userForms[userIndex].profile.name,
      isToggle: userForms[userIndex].profile.isToggle,
    });
  }, [profiles]);

  return (
    <section className="relative group w-full flex justify-around items-center mb-4 h-12 transition rounded-md bg-slate-100">
      <div>
        <button
          onClick={handleToggle}
          className={`w-12 h-10 rounded-md transition ${
            userForms[userIndex].profile.isToggle
              ? "bg-mychatbg text-gray-500 font-bold text-sm"
              : "bg-chatbg text-white font-bold text-sm"
          }`}>
          {userForms[userIndex].profile.isToggle ? "본인" : "상대방"}
        </button>
      </div>
      <div className="flex w-auto hover:border border-solid rounded-md border-slate-300">
        <div className="flex items-center w-32 h-11">
          <section className="flex items-center justify-between h-auto ">
            <div className="w-32 relative ">
              <button
                onClick={handleDropdownToggle}
                className="w-32 h-12 text-center rounded-md outline-none appearance-none hover:cursor-pointer">
                {userForms[userIndex].profile.isToggle
                  ? "본인"
                  : userForms[userIndex].profile.name}
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-solid border-slate-300 rounded-md shadow-md z-10">
                  {profiles
                    .filter((profile) => !profile.isToggle)
                    .map((profile, filteredIndex) => (
                      <div key={filteredIndex} className="flex">
                        <button
                          onClick={() => {
                            updateFormsProfile(userForms[userIndex].id, {
                              id: profile.id,
                              profileImage: profile.profileImage,
                              name: profile.name,
                              isToggle: profile.isToggle,
                            });
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center align-middle h-12 text-left px-2 py-1 hover:bg-gray-200 rounded-md transition">
                          <div className="flex items-center align-middle file:size-9">
                            <Image
                              width={30}
                              height={30}
                              src={
                                profile.profileImage
                                  ? URL.createObjectURL(profile.profileImage)
                                  : "/images/default.png"
                              }
                              alt="프로필"
                              className="rounded-full mr-1"
                            />
                          </div>
                          <div className="text-sm ml-1 w-14">
                            {profile.name}
                          </div>
                        </button>
                        <button
                          onClick={() => {
                            setEditProfileIndex(filteredIndex);
                            setIsEditOpen(true);
                            setIsDropdownOpen(false);
                          }}
                          className="hover:bg-gray-200 rounded-md transition">
                          <Image
                            width={20}
                            height={20}
                            src="/images/update.png"
                            alt="수정"
                          />
                        </button>
                      </div>
                    ))}

                  <button
                    onClick={handleModalOpen}
                    className="z-0 flex justify-between w-full h-12 text-left items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                    추가
                    <Image
                      width={20}
                      height={20}
                      src="/images/addUser.png"
                      alt="추가"
                    />
                  </button>
                </div>
              )}
              {isOpen && (
                <div className="w-full h-full fixed z-50">
                  <NewProfileModal
                    title={"새 사용자 추가하기"}
                    handleClose={handleModalClose}
                  />
                </div>
              )}
              {isEditOpen && editProfileIndex !== null && (
                <div className="w-full h-full fixed z-50">
                  <EditProfileModal
                    title={"프로필 수정하기"}
                    editProfileIndex={editProfileIndex}
                    profile={profiles[editProfileIndex]}
                    handleClose={() => setIsEditOpen(false)}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <div className="w-auto">
        <input
          type="text"
          placeholder={
            userForms[userIndex].message.message || "메세지를 입력하세요."
          }
          value={userForms[userIndex].message.message}
          onChange={handleMessageChange}
          className="px-2 w-64 h-12 transition rounded-md bg-slate-100 outline-none hover:border border-solid border-slate-300"
        />
      </div>
      <div className="w-auto">
        <input
          type="time"
          value={userForms[userIndex].message.time}
          onChange={handleTimeChange}
          className="w-32 h-12 transition rounded-md bg-slate-100 outline-none hover:border border-solid border-slate-300"
        />
      </div>
      <div className="flex justify-center size-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-300 rounded-md">
        <button onClick={onRemove}>
          <Image
            width={20}
            height={20}
            src="/images/delete.png"
            alt="삭제"
            className="hover:cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};
export default UserForm;
