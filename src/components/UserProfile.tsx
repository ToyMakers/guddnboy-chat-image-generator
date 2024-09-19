import React from "react";
import Image from "next/image";
import { useMessageStore } from "@/store/useMessageStore";
import defaultProfile from "../../public/images/default.png";

const UserProfile = () => {
    const username = useMessageStore((state) => state.username);
    const message = useMessageStore((state) => state.message);
    const time = useMessageStore((state) => state.time);

    return (
        <div className="flex text-sm">
            <div className="flex justify-center items-center align-middle overflow-hidden">
                <Image
                    className="text-sm size-10 rounded-full"
                    src={defaultProfile}
                    alt="프로필"></Image>
            </div>
            <div className="text-sm w-8">{username}</div>
            <div>{time}</div>
            <div className="text-center size-auto bg-yourchatbg text-sm rounded-md">
                {message}
            </div>
        </div>
    );
};

export default UserProfile;
