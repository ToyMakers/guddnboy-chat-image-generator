import ContentPreview from "@/components/ContentPreview";
import AddUserPage from "@/components/Add/AddUserPage";

export default function RootPage() {
  return (
    <div className="flex justify-around text-center">
      <div className="flex flex-col bg-chatbg w-80 h-96 rounded-md">
        <ContentPreview />
      </div>
      <div className="w-full flex flex-col items-center ">
        <AddUserPage />
      </div>
    </div>
  );
}
