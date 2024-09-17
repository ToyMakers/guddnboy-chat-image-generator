import React from "react";
import Chatting from "@/components/Chatting";
import ContentPreview from "@/components/ContentPreview";

function home() {
    return (
        <div className="flex justify-around text-center">
            <div className="flex flex-col bg-chatbg w-80 h-96 rounded-md">
                <div className="h-12">채팅방 미리보기 페이지</div>
                <ContentPreview />
                <Chatting />
            </div>
            <div className="flex flex-col">
                <div className="w-96 h-64 bg-yourchatbg rounded-md">
                    프로필 생성 페이지
                </div>
                <div className="w-96 h-32 my-4 bg-yourchatbg rounded-md">
                    본인 프로필 선택
                </div>
            </div>
        </div>
    );
}
export default home;
