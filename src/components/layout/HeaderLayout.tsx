import React from "react";
import Link from "next/link";

const HeaderLayout = () => {
    return (
        <>
            <div className="flex max-w-full h-24 justify-between items-center mx-auto">
                <div>
                    <Link href={"/home"}>채팅 이미지 생성</Link>
                </div>
                <div className="flex gap-2">
                    <div>모양 바꾸기</div>
                    <div>이미지로 저장하기</div>
                </div>
            </div>
            <div className="border-b-[1px] border-gray-500 border-solid w-full mb-4"></div>
        </>
    );
};

export default HeaderLayout;
