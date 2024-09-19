"use client";
import React, { useState } from "react";
import Image from "next/image";
import deleteImg from "../../../public/images/delete.png";
import { useMessageStore } from "@/store/useMessageStore";

const AddUser = () => {
    interface User {
        id: number;
        username: string;
        message: string;
        time: string;
    }

    const [users, setUsers] = useState<User[]>([]);

    const username = useMessageStore((state) => state.username);
    const message = useMessageStore((state) => state.message);
    const time = useMessageStore((state) => state.time);
    const setUsername = useMessageStore((state) => state.setUsername);
    const setMessage = useMessageStore((state) => state.setMessage);
    const setTime = useMessageStore((state) => state.setTime);

    const addUserInformation = () => {
        const newUser: User = {
            id: Date.now(),
            username,
            message,
            time,
        };
        setUsers([...users, newUser]);
    };

    const removeUserInformation = (userId: number) => {
        setUsers(users.filter((user) => user.id !== userId));
    };

    return (
        <div className="w-[620px] h-auto bg-yourchatbg rounded-md p-4">
            <h2>프로필 생성 페이지</h2>
            <div>
                <button
                    onClick={addUserInformation}
                    className="w-[580px] bg-chatbg text-white py-2 px-4 rounded-md mb-2">
                    추가
                </button>
            </div>

            {users.map((user) => (
                <div key={user.id} className="flex h-12 mb-4">
                    <select
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-36 border p-2 rounded-md mr-2">
                        <option value="기본 프로필">기본 프로필</option>
                        <option value="고양이">고양이</option>
                        <option value="야옹이">야옹이</option>
                        <option value="코끼리">코끼리</option>
                    </select>

                    <input
                        name="content"
                        type="text"
                        placeholder="내용"
                        onChange={(e) => setMessage(e.target.value)}
                        className="block w-full border p-2 rounded-md mr-2"
                    />

                    <input
                        name="time"
                        type="time"
                        onChange={(e) => setTime(e.target.value)}
                        className="block w-36 border p-2 rounded-md mr-2"
                    />

                    <button
                        onClick={() => removeUserInformation(user.id)}
                        className="flex items-center w-16 text-white p-2 rounded-md hover:bg-red-600 transition">
                        <Image
                            src={deleteImg}
                            alt="제거"
                            className="flex items-center align-middle size-7"
                        />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AddUser;
