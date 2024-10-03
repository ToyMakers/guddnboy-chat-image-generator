import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewProfileModal from "./Modal/NewProfileModal";
import { useProfileStore } from "@/store/useProfileStore";

import AddUser from "../../public/images/addUser.png";
import deleteImg from "../../public/images/delete.png";

const UserForm = ({
  onRemove,
  userIndex,
}: {
  userIndex: number;
  onRemove: () => void;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userNames, setUserNames] = useState<string[]>([]);

  const profiles = useProfileStore((state) => state.profiles);
  const updateUserMessage = useProfileStore((state) => state.updateUserMessage);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    updateUserMessage(
      userIndex,
      profiles[userIndex].name,
      profiles[userIndex].message ?? "",
      newTime
    );
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

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);

    updateUserMessage(
      userIndex,
      profiles[userIndex].name,
      message,
      profiles[userIndex].time ?? ""
    );

    console.log("newMessage : ", newMessage);
  };

  const getUserNames = () => {
    const names = Array.from(new Set(profiles.map((item) => item.name)));
    setUserNames(names);
    console.log("names : ", names);
  };

  useEffect(() => {
    console.log("profiles : ", profiles);
    getUserNames();
    updateUserMessage(
      userIndex,
      profiles[userIndex].name,
      message,
      profiles[userIndex].time ?? ""
    );
  }, [message]);

  return (
    <section className="relative group w-full flex justify-around items-center mb-4 h-12 transition rounded-md bg-slate-100">
      <div className="flex w-auto hover:border border-solid rounded-md border-slate-300">
        <div className="flex items-center w-32 h-11">
          <section className="flex items-center justify-between h-auto ">
            <div className="w-32 relative ">
              <button
                onClick={handleDropdownToggle}
                className="w-32 h-12 text-center rounded-md outline-none appearance-none hover:cursor-pointer">
                {profiles[userIndex]?.name || "프로필 선택"}
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-solid border-slate-300 rounded-md shadow-md z-10">
                  {userNames.map((name, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        updateUserMessage(
                          userIndex,
                          name,
                          `${profiles[userIndex].message}`,
                          `${profiles[userIndex].time}`
                        ),
                          setIsDropdownOpen(false);
                      }}
                      className="block w-full h-12 items-center text-left px-2 py-1 hover:bg-gray-200 rounded-md">
                      {name}
                    </button>
                  ))}
                  <button
                    onClick={handleModalOpen}
                    className="flex justify-between w-full h-12 text-left items-center px-2 py-1 hover:bg-gray-200 rounded-md">
                    추가
                    <Image src={AddUser} alt="추가" className="size-5" />
                  </button>
                </div>
              )}
              {isOpen && (
                <div className="w-full h-full fixed">
                  <NewProfileModal
                    title={"새 사용자 추가하기"}
                    handleClose={handleModalClose}
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
          placeholder={profiles[userIndex]?.message || "메세지를 입력하세요."}
          value={message}
          onChange={handleMessageChange}
          className="px-2 w-64 h-12 transition rounded-md bg-slate-100 outline-none hover:border border-solid border-slate-300"
        />
      </div>
      <div className="w-auto">
        <input
          type="time"
          onChange={handleTimeChange}
          className="w-32 h-12 transition rounded-md bg-slate-100 outline-none hover:border border-solid border-slate-300"
        />
      </div>
      <div className="flex justify-center size-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-300 rounded-md">
        <button onClick={onRemove}>
          <Image
            src={deleteImg}
            alt="삭제"
            className="size-5 hover:cursor-pointer"
          />
        </button>
      </div>
    </section>
  );
};

export default UserForm;
