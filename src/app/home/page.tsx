import React from "react";
import Chatting from "@/components/Chatting";
import ContentPreview from "@/components/ContentPreview";
import AddUser from "@/components/Adding/AddUser";
import SelectMyProfile from "@/components/SelectMyProfile";

function home() {
    return (
        <div className="flex justify-around text-center">
            <div className="flex flex-col bg-chatbg w-80 h-96 rounded-md">
                <div className="h-12">채팅방 미리보기 페이지</div>
                <ContentPreview />
                <Chatting />
            </div>
            <div className="flex flex-col">
                <AddUser />
                <SelectMyProfile />
            </div>
        </div>
    );
}
export default home;
