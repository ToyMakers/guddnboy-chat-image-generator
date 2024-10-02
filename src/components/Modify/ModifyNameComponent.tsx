"use client";

import React from "react";
import { useNameStyleStore } from "@/store/ModifyStyle/useNameStyleStore";

const ModifyNameComponent = () => {
  const { setFontWeight, setFontSize, setColor } = useNameStyleStore();

  return (
    <div className="w-full h-80 overflow-scroll">
      <div>
        글자굵기
        <input
          type="number"
          onChange={(e) => setFontWeight(e.target.value)}
          placeholder="Font Weight"
        />
      </div>
      <div>
        글자크기
        <input
          type="number"
          onChange={(e) => setFontSize(e.target.value)}
          placeholder="Font Size"
        />
      </div>
      <div>
        글자색
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  );
};

export default ModifyNameComponent;
