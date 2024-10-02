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
    <div className="flex flex-col text-left w-full h-80 overflow-scroll">
      <section className="mb-4">
        <div className="text-lg">글자 크기</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            id="fontSize"
            type="number"
            value={parseInt(fontSize_time)}
            onChange={handleFontSizeChange}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>

      <section className="mb-4">
        <div className="text-lg">글자 색상</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            id="textColor"
            type="color"
            value={textColor_time}
            onChange={handleTextColorChange}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>
    </div>
  );
};

export default ModifyTimeComponent;
