import React from "react";
import { useTimeStyleStore } from "@/store/ModifyStyle/useTimeStyleStore";

const ModifyTimeComponent = () => {
  const { fontSize_time, textColor_time, setFontSize, setTextColor } =
    useTimeStyleStore();

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFontSize(value);
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="fontSize">글자 크기</label>
        <input
          id="fontSize"
          type="number"
          value={parseInt(fontSize_time)}
          onChange={handleFontSizeChange}
        />
      </div>
      <div>
        <label htmlFor="textColor">글자 색상</label>
        <input
          id="textColor"
          type="color"
          value={textColor_time}
          onChange={handleTextColorChange}
        />
      </div>
    </div>
  );
};

export default ModifyTimeComponent;
