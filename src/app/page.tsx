import ContentPreview from "@/components/ContentPreview";
import AddUser from "@/components/Add/AddUser";

export default function RootPage() {
  return (
    <div className="flex justify-around text-center">
      <div className="flex flex-col bg-chatbg w-80 h-96 rounded-md">
        {/* <div className="h-12">채팅방 미리보기 페이지</div> */}
        <ContentPreview />
      </div>
      <div className="w-full flex flex-col items-center ">
        <AddUser />
      </div>
    </div>
  );
}
