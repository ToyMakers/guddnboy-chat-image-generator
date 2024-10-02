"use client";

import React from "react";
import { useNameStyleStore } from "@/store/ModifyStyle/useNameStyleStore";

const ModifyNameComponent = () => {
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
    <div className="w-full h-80 overflow-scroll">
      <div>
        글자굵기
        <input
          id="fontWeight"
          type="number"
          onChange={handleFontWeightChange}
          placeholder={fontweight_name}
        />
      </div>
      <div>
        글자크기
        <input
          id="fontSize"
          type="number"
          onChange={handleFontSizeChange}
          placeholder={fontsize_name}
        />
      </div>
      <div>
        글자색
        <input
          id="color_name"
          type="color"
          onChange={handleColorChange}
          placeholder={color_name}
        />
      </div>
    </div>
  );
};

export default ModifyNameComponent;
