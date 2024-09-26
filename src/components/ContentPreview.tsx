"use client";
import React from "react";
import UserMessagePreview from "./UserMessagePreview";
import { useUserStore } from "../store/useUserStore";

const ContentPreview = () => {
  const users = useUserStore((state) => state.users);
  console.log(users);

  return (
    <div className="w-80 h-96 border border-solid rounded-md border-slate-400 overflow-y-scroll">
      <div className="flex flex-col">
        {users.map((user, index) => (
          <div key={index} className="flex my-1 p-2 border-b border-gray-300">
            <UserMessagePreview
              username={user.name}
              message={user.message}
              time={user.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPreview;
