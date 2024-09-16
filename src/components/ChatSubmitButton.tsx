"use client";
import React from "react";

const ChatSubmitButton = () => {
    const btnClick = () => {
        console.log("버튼 클릭");
    };

    return (
        <button onClick={btnClick} className="w-12">
            전송
        </button>
    );
};

export default ChatSubmitButton;
