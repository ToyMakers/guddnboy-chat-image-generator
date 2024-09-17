"use client";
import React from "react";
import ChatSubmitButton from "./ChatSubmitButton";
import { useMessageStore } from "@/store/useMessageStore";

const Chatting = () => {
    const setMessage = useMessageStore((state) => state.setMessage);

    return (
        <div className="h-12 flex justify-between items-center align-middle">
            <input
                type="text"
                name="chatContent"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="채팅을 입력하세요."
                className="w-72 h-12 px-2 outline-none rounded-md bg-background"
            />
            <ChatSubmitButton />
        </div>
    );
};

export default Chatting;
