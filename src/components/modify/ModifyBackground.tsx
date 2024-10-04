"use client";

import React from "react";
import { useBackgroundStyleStore } from "../../stores/modifyStyle/useBackgroundStyleStore";

const ModifyBackgroundComponent = () => {
  const backgroundColor = useBackgroundStyleStore(
    (state) => state.backgroundColor
  );

  const backgroundPadding = useBackgroundStyleStore(
    (state) => state.backgroundPadding
  );

  const userFormGap = useBackgroundStyleStore((state) => state.userFormGap);

  return (
    <div className="flex flex-col text-left w-full h-80 overflow-scroll">
      <section className="mb-4">
        <div className="text-lg">배경색</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-28 pl-2 bg-inherit"
            type="color"
            value={backgroundColor}
            onChange={(e) => {
              useBackgroundStyleStore.setState({
                backgroundColor: e.target.value,
              });
            }}
          />
          <div className="w-12 text-center text-timebg">T</div>
        </div>
      </section>
      <section className="mb-4">
        <div className="text-lg">배경 패딩</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            value={backgroundPadding}
            onChange={(e) => {
              useBackgroundStyleStore.setState({
                backgroundPadding: e.target.value,
              });
            }}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>
      <section className="mb-4">
        <div className="text-lg">유저 폼 간격</div>
        <div className="flex items-center justify-between w-full h-10 border border-solid border-gray-400 rounded-md">
          <input
            className="w-11/12 h-full pl-2 bg-inherit outline-none"
            type="number"
            value={userFormGap}
            onChange={(e) => {
              useBackgroundStyleStore.setState({ userFormGap: e.target.value });
            }}
          />
          <div className="w-12 text-center text-timebg">1</div>
        </div>
      </section>
    </div>
  );
};

export default ModifyBackgroundComponent;
