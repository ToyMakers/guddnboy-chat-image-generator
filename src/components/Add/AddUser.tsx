"use client";
import React, { useState } from "react";
import UserForm from "../UserForm";

const AddUser = () => {
    const [userForms, setUserForms] = useState([0]);

    const addUserForm = () => {
        setUserForms((prev) => [...prev, prev.length]);
    };

    return (
        <div className="w-[620px] h-auto bg-yourchatbg rounded-md p-4">
            <div>
                <section className="flex justify-between">
                    <div className="w-32 h-8 mb-2 text-left">말 한 사람</div>
                    <div className="w-48 h-8 mb-2 text-left pl-2">내용</div>
                    <div className="w-32 h-8 mb-2 text-left">시간</div>
                </section>
                {userForms.map((_, index) => (
                    <UserForm key={index} userIndex={index} />
                ))}
                <div className="">
                    <button
                        onClick={addUserForm}
                        className="w-[580px] bg-chatbg text-white py-2 px-4 rounded-md mb-2">
                        메세지 추가
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
