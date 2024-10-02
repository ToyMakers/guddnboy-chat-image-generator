"use client";

import React from "react";
import { useProfileStyleStore } from "@/store/ModifyStyle/useProfileStyleStore";

const ModifyProfileComponent = () => {
  const {
    width,
    setWidth,
    setHeight,
    setBackgroundColor,
    setBorderWidth,
    setBorderRadius,
    setPadding,
    setBorderColor,
    setBorderStyle,
  } = useProfileStyleStore();

  return (
    <div className="flex flex-col w-full h-80 overflow-scroll">
      <div>
        너비
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
      <div>
        높이
        <input
          type="number"
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div>
        배경색
        <input
          type="color"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div>
        테두리 두께
        <input
          type="number"
          onChange={(e) => setBorderWidth(Number(e.target.value))}
        />
      </div>
      <div>
        테두리 모서리
        <input
          type="number"
          onChange={(e) => setBorderRadius(Number(e.target.value))}
        />
      </div>
      <div>
        패딩
        <input
          type="number"
          onChange={(e) => setPadding(Number(e.target.value))}
        />
      </div>
      <div>
        테두리 색
        <input type="color" onChange={(e) => setBorderColor(e.target.value)} />
      </div>
      <div>
        테두리 스타일
        <input type="text" onChange={(e) => setBorderStyle(e.target.value)} />
      </div>
    </div>
  );
};

export default ModifyProfileComponent;
