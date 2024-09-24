"use client";
import React from "react";
import { useState } from "react";
import CreateModal from "../Modal/createModal";

const AddUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleModalOpen = () => {
        setIsOpen(true);
    };
    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-[620px] h-auto bg-yourchatbg rounded-md p-4">
            <h2>프로필 생성 페이지</h2>
            <div>
                <section className="flex justify-between h-10 items-center ">
                    <div>
                        <select id="name">
                            <option value="고양이">고양이</option>
                            <option value="강아지">강아지</option>
                        </select>
                    </div>
                    <div className="">
                        <input
                            type="text"
                            placeholder="메세지를 입력하세요"
                            className="px-2"
                        />
                    </div>
                    <div>
                        <input type="time" />
                        시간
                    </div>
                    <div>
                        <button> remove</button>
                    </div>
                </section>
                <button
                    onClick={handleModalOpen}
                    className="w-[580px] bg-chatbg text-white py-2 px-4 rounded-md mb-2">
                    추가
                </button>
                <div className="">
                    {isOpen && (
                        <div className="w-full h-full fixed">
                            <CreateModal
                                title={"새 사용자 추가하기"}
                                handleClose={handleModalClose}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddUser;
