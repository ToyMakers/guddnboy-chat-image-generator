"use client";
import React from "react";
import Userprofile from "./UserProfile";

const ContentPreview = () => {
    return (
        <div className="w-80 h-96">
            <div className="flex h-12 border-2">
                <li className="flex">
                    <Userprofile />
                </li>
            </div>
        </div>
    );
};

export default ContentPreview;
