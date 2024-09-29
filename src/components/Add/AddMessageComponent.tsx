"use client";

import React, { Fragment } from "react";

const AddMessageComponent = () => {
  return (
    <Fragment>
      <div className="w-full h-80 overflow-scroll">
        <section className="flex justify-around">
          <div className="flex w-32 h-12  text-left items-center">
            말 한 사람
          </div>
          <div className="flex items-center w-64 h-12 text-left pl-2">내용</div>
          <div className="flex items-center w-32 h-12 text-left">시간</div>
          <div className="flex items-center size-12"></div>
        </section>
        <div className="w-full">
          {/* {userForms.map((_, index) => (
            <UserForm
              key={index}
              userIndex={index}
              onRemove={() => removeUserForm(index)}
            />
          ))} */}
        </div>
      </div>
      <div className="w-full border border-solid rounded-md border-slate-400">
        <button
          onClick={() => {}}
          className="w-full bg-chatbg text-white py-2 px-4 rounded-md transition hover:bg-gray-500">
          메세지 추가
        </button>
      </div>
    </Fragment>
  );
};

export default AddMessageComponent;
