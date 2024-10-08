"use client";

import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import ContentPreview from "../components/ContentPreview";
import HeaderLayout from "../components/layout/HeaderLayout";
import AddUser from "../components/add/AddUser";
import { cardio } from "ldrs";
cardio.register();

export default function RootPage() {
  const contentPreviewRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const captureContentPreview = async () => {
    if (contentPreviewRef.current) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
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
      } catch (error) {
        console.error("캡처 오류:", error);
        alert("이미지 캡처 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }
  };

  const copyToClipboard = async () => {
    if (contentPreviewRef.current) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const canvas = await html2canvas(contentPreviewRef.current);
        canvas.toBlob(async (blob) => {
          if (blob) {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            alert("이미지가 클립보드에 복사되었습니다.");
          }
        }, "image/png");
      } catch (err) {
        console.error("클립보드 복사 오류:", err);
        alert("클립보드에 복사하는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
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
      {loading && (
        <div className=" fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <l-cardio size="150" speed="1.75" color="#9bbbd4" stroke="13" />
        </div>
      )}
    </div>
  );
}
