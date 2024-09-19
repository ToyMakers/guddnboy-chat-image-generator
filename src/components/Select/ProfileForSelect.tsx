"use client";

import React from "react";
import Image from "next/image";
import defaultProfile from "../../../public/images/default.png";

const ProfileForSelect = () => {
    return (
        <div className="flex  align-middle overflow-hidden">
            <div className="flex flex-col items-center bg-yourchatbg rounded-md">
                <div className="w-24  m-2">프로필 이미지</div>
                <Image
                    className="text-sm size-10 rounded-full"
                    src={defaultProfile}
                    alt="프로필"></Image>
            </div>
        </div>
    );
};

export default ProfileForSelect;
