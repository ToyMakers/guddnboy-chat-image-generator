import React from "react";
import Link from "next/link";

const HeaderLayout = () => {
    return (
        <>
            <div className="flex max-w-full h-24 justify-between items-center mx-auto">
                <div className="">
                    <div>
                        <Link href={"/home"}>채팅 이미지 생성</Link>
                    </div>
                </div>
                <div>
                    <Link href={"/generating_img"}>채팅 이미지 만들기</Link>
                </div>
            </div>
            <div className="border-b-[1px] border-gray-500 border-solid w-full mb-4"></div>
        </>
    );
};

export default HeaderLayout;
