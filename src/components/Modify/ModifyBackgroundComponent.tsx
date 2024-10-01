"use client";

import React from "react";
import { useBackgroundStyleStore } from "../../store/ModifyStyle/useBackgroundStyleStore";

const ModifyBackgroundComponent = () => {
  const backgroundColor = useBackgroundStyleStore(
    (state) => state.backgroundColor
  );

  const backgroundPadding = useBackgroundStyleStore(
    (state) => state.backgroundPadding
  );

  const userFormGap = useBackgroundStyleStore((state) => state.userFormGap);

  return (
    <div className="w-full h-80 overflow-scroll">
      <div>배경색</div>
      <input
        type="color"
        value={backgroundColor}
        onChange={(e) => {
          useBackgroundStyleStore.setState({ backgroundColor: e.target.value });
        }}
      />
      <div>배경 패딩</div>
      <input
        type="number"
        value={backgroundPadding}
        onChange={(e) => {
          useBackgroundStyleStore.setState({
            backgroundPadding: e.target.value,
          });
        }}
      />
      <div>유저 폼 간격</div>
      <input
        type="number"
        value={userFormGap}
        onChange={(e) => {
          useBackgroundStyleStore.setState({ userFormGap: e.target.value });
        }}
      />
    </div>
  );
};

export default ModifyBackgroundComponent;
