"use client";
import React, { useState } from "react";
import { useUserStore } from "../../store/useUserStore";
import UserForm from "../UserForm";

const AddUser = () => {
    const [userForms, setUserForms] = useState([0]);
    const removeUser = useUserStore((state) => state.removeUser);

    const addUserForm = () => {
        setUserForms((prev) => [...prev, prev.length]);
    };

    const removeUserForm = (indexToRemove: number) => {
        setUserForms((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );
        removeUser(indexToRemove);
    };

    return (
        <div className="">
            <div className="w-[680px] h-96 bg-yourchatbg rounded-md p-4 overflow-scroll">
                <section className="flex justify-between">
                    <div className="w-32 h-8 mb-2 text-left">말 한 사람</div>
                    <div className="w-48 h-8 mb-2 text-left pl-2">내용</div>
                    <div className="w-32 h-8 mb-2 text-left">시간</div>
                </section>
                <div className="w-full">
                    {userForms.map((_, index) => (
                        <UserForm
                            key={index}
                            userIndex={index}
                            onRemove={() => removeUserForm(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[680px] mt-2">
                <button
                    onClick={addUserForm}
                    className="w-full bg-chatbg text-white py-2 px-4 rounded-md mb-2 transition hover:bg-gray-500">
                    메세지 추가
                </button>
            </div>
        </div>
    );
};

export default AddUser;
