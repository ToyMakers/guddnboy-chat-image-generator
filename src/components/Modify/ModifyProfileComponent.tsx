"use client";

import React from "react";
import { useProfileStyleStore } from "@/store/ModifyStyle/useProfileStyleStore";

const ModifyProfileComponent = () => {
  const {
    width,
    height,
    backgroundColor,
    borderWidth,
    borderRadius,
    padding,
    borderColor,
    borderStyle,

    setWidth,
    setHeight,
    setBackgroundColor,
    setBorderWidth,
    setBorderRadius,
    setPadding,
    setBorderColor,
    setBorderStyle,
  } = useProfileStyleStore();

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWidth(Number(value));
  };
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeight(Number(value));
  };

  const handleBackgroundColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(e.target.value);
  };

  const handleBorderWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderWidth(Number(e.target.value));
  };

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(Number(e.target.value));
  };

  const handlePaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPadding(Number(e.target.value));
  };

  const handleBorderColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderColor(e.target.value);
  };

  const handleBorderStyleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderStyle(e.target.value);
  };

  return (
    <div className="flex flex-col w-full h-80 overflow-scroll">
      <div>
        너비
        <input
          id="width"
          type="number"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <div>
        높이
        <input
          id="height"
          type="number"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div>
        배경색
        <input
          id="backgroundColor"
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </div>
      <div>
        테두리 두께
        <input
          id="borderWidth"
          type="number"
          value={borderWidth}
          onChange={handleBorderWidthChange}
        />
      </div>
      <div>
        테두리 모서리
        <input
          id="borderRadius"
          type="number"
          value={borderRadius}
          onChange={handleBorderRadiusChange}
        />
      </div>
      <div>
        패딩
        <input
          id="padding"
          type="number"
          value={padding}
          onChange={handlePaddingChange}
        />
      </div>
      <div>
        테두리 색
        <input
          id="borderColor"
          type="color"
          value={borderColor}
          onChange={handleBorderColorChange}
        />
      </div>
      <div>
        테두리 스타일
        <input
          id="borderStyle"
          type="text"
          value={borderStyle}
          onChange={handleBorderStyleChange}
        />
      </div>
    </div>
  );
};

export default ModifyProfileComponent;
