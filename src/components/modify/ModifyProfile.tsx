"use client";

import React from "react";
import { useProfileStyleStore } from "@/stores/modifyStyle/useProfileStyleStore";

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
    <div className="flex flex-col text-left w-full h-80 overflow-scroll">
      <section className="mb-4">
        <div className="text-lg">너비</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="width"
            type="number"
            value={width}
            onChange={handleWidthChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">높이</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="height"
            type="number"
            value={height}
            onChange={handleHeightChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">배경색</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            id="backgroundColor"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">테두리 두께</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="borderWidth"
            type="number"
            value={borderWidth}
            onChange={handleBorderWidthChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">테두리 모서리</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="borderRadius"
            type="number"
            value={borderRadius}
            onChange={handleBorderRadiusChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">패딩</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="padding"
            type="number"
            value={padding}
            onChange={handlePaddingChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">테두리 색</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={handleBorderColorChange}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">테두리 스타일</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="borderStyle"
            type="text"
            value={borderStyle}
            onChange={handleBorderStyleChange}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>
    </div>
  );
};

export default ModifyProfileComponent;
