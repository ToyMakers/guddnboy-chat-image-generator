import React from "react";
import Image from "next/image";
import defaultProfile from "../../public/images/default.png";

const UserMessagePreview = ({
    username,
    message,
    time,
}: {
    username: string;
    message: string;
    time: string;
}) => {
    return (
        <div className="flex text-sm">
            <div className="flex justify-center items-center align-middle overflow-hidden">
                <Image
                    className="text-sm size-10 rounded-full"
                    src={defaultProfile}
                    alt="프로필"></Image>
            </div>
            <div className="text-sm w-10">{username}</div>
            <div className="flex items-center w-auto h-auto px-2 m-1 bg-yourchatbg text-sm rounded-md">
                {message}
            </div>
            <div className="flex items-end">{time}</div>
        </div>
    );
};

export default UserMessagePreview;
