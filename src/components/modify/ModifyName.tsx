"use client";

import React from "react";
import { useNameStyleStore } from "@/stores/modifyStyle/useNameStyleStore";

const ModifyName = () => {
  const {
    fontweight_name,
    fontsize_name,
    color_name,
    setFontWeight,
    setFontSize,
    setColor,
  } = useNameStyleStore();

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontWeight(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col text-left w-full h-80 overflow-scroll">
      <section className="mb-4">
        <div className="text-lg">글자 굵기</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="fontWeight"
            type="number"
            onChange={handleFontWeightChange}
            value={fontweight_name}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">글자 크기</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="fontSize"
            type="number"
            onChange={handleFontSizeChange}
            value={parseInt(fontsize_name)}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">글자 색</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            id="color_name"
            type="color"
            onChange={handleColorChange}
            value={color_name}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>
    </div>
  );
};

export default ModifyName;
