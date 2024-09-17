"use client";
import { useMessageStore } from "@/store/useMessageStore";
import React from "react";

const ChatSubmitButton = () => {
    const message = useMessageStore((state) => state.message);
    const setMessage = useMessageStore((state) => state.setMessage);

    const handleMessageSubmit = (text: string) => {
        setMessage(text);
    };

    return (
        <button
            onClick={() => {
                handleMessageSubmit(message);
                console.log("message: ", message);
            }}
            className="size-12 rounded-md hover:bg-slate-500">
            전송
        </button>
    );
};

export default ChatSubmitButton;
