"use client";
import React from "react";
import defaultProfile from "../../public/images/default.png";
import Image from "next/image";

const ContentPreview = () => {
    return (
        <div className="w-80 h-96">
            <div className="flex h-12 border-2">
                <li className="flex">
                    <div className="flex text-sm">
                        <div className="flex justify-center items-center align-middle overflow-hidden">
                            <Image
                                className="text-sm size-10 rounded-full"
                                src={defaultProfile}
                                alt="프로필"></Image>
                        </div>
                        <div className="text-sm w-10">유저</div>
                        <div className="flex items-center w-auto h-auto px-2 m-1 bg-yourchatbg text-sm rounded-md">
                            메세지 내용
                        </div>
                        <div className="flex items-end">시간</div>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default ContentPreview;
