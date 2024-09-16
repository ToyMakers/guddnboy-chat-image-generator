import React from "react";
import ChatSubmitButton from "@/components/ChatSubmitButton";

function home() {
    return (
        <div className="flex flex-col items-center align-middle text-center">
            <div className="bg-chatbg w-72 h-96 rounded-md">
                <div className="h-12">채팅방 미리보기 페이지</div>
                <div className="h-72 bg-mychatbg">채팅 보일 공간</div>
                <div className="h-12 flex justify-between items-center align-middle">
                    <form className="w-60">
                        <input
                            type="text"
                            placeholder="채팅을 입력하세요."
                            className=""
                        />
                    </form>
                    <ChatSubmitButton />
                </div>
            </div>
        </div>
    );
}

export default home;
