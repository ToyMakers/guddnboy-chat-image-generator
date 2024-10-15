"use client";

import React from "react";
import { useMessageStyleStore } from "@/stores/modifyStyle/useMessageStyleStore";

const ModifyMessage = () => {
  const {
    fontSize_Message,
    fontWeight_Message,
    fontPadding_Message,
    fontColor_Message,
    borderRounded_Message,
    backgroundcolor_Message,
    width_Message,

    setFontSize,
    setFontWeight,
    setFontPadding,
    setFontColor,
    setBorderRounded,
    setWidth,
  } = useMessageStyleStore();

  return (
    <div className="flex flex-col text-left w-full h-80 overflow-scroll">
      <section className="mb-4">
        <div className="text-lg">글자크기</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            onChange={(e) => setFontSize(Number(e.target.value))}
            placeholder={fontSize_Message.toString()}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">글자두께</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            onChange={(e) => setFontWeight(Number(e.target.value))}
            placeholder={fontWeight_Message.toString()}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>
      <section className="mb-4">
        <div className="text-lg">글자 패딩</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            onChange={(e) => setFontPadding(Number(e.target.value))}
            placeholder={fontPadding_Message.toString()}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">글자색상</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            type="color"
            onChange={(e) => setFontColor(e.target.value)}
            placeholder={fontColor_Message}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">모서리 둥글기 </div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            onChange={(e) => setBorderRounded(Number(e.target.value))}
            placeholder={borderRounded_Message.toString()}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">배경색상</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            type="color"
            value={backgroundcolor_Message}
            onChange={(e) => {
              useMessageStyleStore.setState({
                backgroundcolor_Message: e.target.value,
                backgroundColor_MyMessage: e.target.value,
              });
            }}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">너비</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="text"
            onChange={(e) => setWidth(e.target.value)}
            placeholder={width_Message.toString()}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>
    </div>
  );
};

export default ModifyMessage;
