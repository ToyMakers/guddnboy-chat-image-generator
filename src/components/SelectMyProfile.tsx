"use client";
import React from "react";
import ProfileForSelect from "./Select/ProfileForSelect";

const SelectMyProfile = () => {
    return (
        <div className="w-[620px] h-32 my-4 bg-yourchatbg rounded-md">
            <div>본인 프로필 선택</div>
            <div>
                <ProfileForSelect />
            </div>
        </div>
    );
};

export default SelectMyProfile;
