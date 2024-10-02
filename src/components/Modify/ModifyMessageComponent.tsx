"use client";

import React from "react";
import { useMessageStyleStore } from "@/store/ModifyStyle/useMessageStyleStore";

const ModifyMessageComponent = () => {
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
    <div className="w-full h-80 overflow-scroll">
      <div>
        글자크기
        <input
          type="number"
          onChange={(e) => setFontSize(Number(e.target.value))}
          placeholder={fontSize_Message.toString()}
        />
      </div>
      <div>
        글자두께
        <input
          type="number"
          onChange={(e) => setFontWeight(Number(e.target.value))}
          placeholder={fontWeight_Message.toString()}
        />
      </div>
      <div>
        글자 패딩
        <input
          type="number"
          onChange={(e) => setFontPadding(Number(e.target.value))}
          placeholder={fontPadding_Message.toString()}
        />
      </div>
      <div>
        글자색상
        <input
          type="color"
          onChange={(e) => setFontColor(e.target.value)}
          placeholder={fontColor_Message}
        />
      </div>
      <div>
        모서리 둥글기
        <input
          type="number"
          onChange={(e) => setBorderRounded(Number(e.target.value))}
          placeholder={borderRounded_Message.toString()}
        />
      </div>
      <div>
        배경색상
        <input
          type="color"
          value={backgroundcolor_Message}
          onChange={(e) => {
            useMessageStyleStore.setState({
              backgroundcolor_Message: e.target.value,
            });
          }}
        />
      </div>
      <div>
        너비
        <input
          type="number"
          onChange={(e) => setWidth(Number(e.target.value))}
          placeholder={width_Message.toString()}
        />
      </div>
    </div>
  );
};

export default ModifyMessageComponent;
