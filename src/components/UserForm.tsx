import React, { useState } from "react";
import Image from "next/image";
import NewProfileModal from "./Modal/NewProfileModal";
import { useUserStore } from "../store/useUserStore";
import AddUser from "../../public/images/addUser.png";
import deleteImg from "../../public/images/delete.png";

const UserForm = ({
    userIndex,
    onRemove,
}: {
    userIndex: number;
    onRemove: () => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const users = useUserStore((state) => state.users);
    const updateUser = useUserStore((state) => state.updateUser);

    const selectedUser = users[userIndex] || {
        name: "",
        message: "",
        time: "",
    };
    const [selectedName, setSelectedName] = useState(selectedUser.name);
    const [message, setMessage] = useState(selectedUser.message);
    const [time, setTime] = useState(selectedUser.time);

    const handleModalOpen = () => {
        setIsOpen(true);
        setIsDropdownOpen(false);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        updateUser(userIndex, {
            name: selectedName,
            message: newMessage,
            time,
        });
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = e.target.value;
        setTime(newTime);
        updateUser(userIndex, {
            name: selectedName,
            message,
            time: newTime,
        });
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleNameChange = (name: string) => {
        setSelectedName(name);
        updateUser(userIndex, {
            name,
            message,
            time,
        });
        setIsDropdownOpen(false);
    };

    return (
        <section className="relative group w-full flex justify-around items-center mb-4 h-12 transition rounded-md hover:bg-slate-200">
            <div className="w-auto">
                <div className="w-32 h-8">
                    <section className="flex justify-between items-center mb-4 h-auto transition rounded-md hover:bg-slate-400">
                        <div className="w-auto relative">
                            <button
                                onClick={handleDropdownToggle}
                                className="w-32 h-8 text-center border border-solid border-slate-400 rounded-md outline-none appearance-none hover:cursor-pointer">
                                {selectedName || "프로필 선택"}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-400 rounded-md shadow-md z-10">
                                    <button
                                        onClick={() =>
                                            handleNameChange("고양이")
                                        }
                                        className="block w-full text-left px-2 py-1 hover:bg-gray-200">
                                        고양이
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleNameChange("강아지")
                                        }
                                        className="block w-full text-left px-2 py-1 hover:bg-gray-200">
                                        강아지
                                    </button>

                                    <button
                                        onClick={handleModalOpen}
                                        className="flex justify-between w-full text-left px-2 py-1 hover:bg-gray-200">
                                        추가
                                        <Image
                                            src={AddUser}
                                            alt="추가"
                                            className="size-5"
                                        />
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
                    placeholder="메세지를 입력하세요"
                    value={message}
                    onChange={handleMessageChange}
                    className="px-2 w-48 transition rounded-md hover:bg-slate-300"
                />
            </div>
            <div className="w-auto">
                <input
                    type="time"
                    value={time}
                    onChange={handleTimeChange}
                    className="w-32 transition rounded-md hover:bg-slate-300"
                />
            </div>
            <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
