import React from "react";
import AddUser from "@/components/Add/AddUser";
import ContentPreview from "@/components/ContentPreview";

function home() {
    return (
        <div className="flex justify-around text-center">
            <div className="flex flex-col bg-chatbg w-80 h-96 rounded-md">
                <div className="h-12">채팅방 미리보기 페이지</div>
                <ContentPreview />
            </div>
            <div className="flex flex-col">
                <AddUser />
            </div>
        </div>
    );
}
export default home;
