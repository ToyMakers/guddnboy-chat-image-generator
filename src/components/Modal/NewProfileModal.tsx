"use client";
import React from "react";

const CreateModal = ({
    title,
    handleClose,
}: {
    title: string;
    handleClose: () => void;
}) => {
    return (
        <div className="flex fixed inset-0 bg-gray-700 bg-opacity-70 items-center justify-center">
            <div className="bg-white p-6 rounded-md">
                <h2 className="text-lg font-bold">{title}</h2>
                <section>
                    <div>
                        이름
                        <input
                            type="text"
                            placeholder="이름 입력"
                            className="border p-2 rounded-md w-full mt-4"
                        />
                    </div>
                    <div>
                        <h3>프로필 사진</h3>
                        <input type="file" />
                    </div>
                </section>
                <div className="mt-4">
                    <button
                        onClick={() => {
                            handleClose();
                        }}
                        className="px-4 py-2 bg-chatbg text-white rounded-md transition hover:bg-sky-700">
                        추가하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
