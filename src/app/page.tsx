"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import ContentPreview from "../components/ContentPreview";
import HeaderLayout from "../components/layout/HeaderLayout";
import AddUser from "../components/add/AddUser";

export default function RootPage() {
  const contentPreviewRef = useRef<HTMLDivElement>(null);

  const captureContentPreview = async () => {
    if (contentPreviewRef.current) {
      const canvas = await html2canvas(contentPreviewRef.current);
      const imgData = canvas.toDataURL("image/png");

      const fileName = prompt("저장할 파일명을 입력하세요:", "미리보기.png");

      if (fileName) {
        const link = document.createElement("a");
        link.href = imgData;
        link.download = fileName;
        link.click();
      } else {
        alert("파일명이 입력되지 않아 다운로드가 취소되었습니다.");
      }
    }
  };

  const copyToClipboard = async () => {
    if (contentPreviewRef.current) {
      const canvas = await html2canvas(contentPreviewRef.current);
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            alert("이미지가 클립보드에 복사되었습니다.");
          } catch (err) {
            console.error("클립보드 복사 오류:", err);
            alert("클립보드에 복사하는 데 실패했습니다.");
          }
        }
      }, "image/png");
    }
  };

  return (
    <div>
      <HeaderLayout
        onCapture={captureContentPreview}
        onCopyToClipboard={copyToClipboard}
      />
      <div className="flex justify-around text-center">
        <div
          className="flex flex-col bg-chatbg w-80 h-96 rounded-md"
          ref={contentPreviewRef}>
          <ContentPreview />
        </div>
        <div className="w-full flex flex-col items-center">
          <AddUser />
        </div>
      </div>
    </div>
  );
}
