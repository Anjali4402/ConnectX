"use client";
// import ChatPage from "@/components/Chat/ChatPage";
import CreateUpdateGroup from "@/features/group/CreateUpdateGroup";
import StartNewChat from "@/components/StartNewChat";
import { ModalLayout } from "@/components/ui/shared/ModalLayout";
import useAppStore from "@/store/app.store";

const Home = () => {
  const {
    isOpenNewChat,
    isOpenCreateGroup,
    openNewChatToogle,
    openCreateGroupToogle,
  } = useAppStore();

  return (
    <div className="w-full h-full  flex justify-center  items-center">
      {/* <ChatPage /> */}

      <h1 className="text-white text-3xl">Chat main page</h1>

      <ModalLayout open={isOpenNewChat} setOpen={openNewChatToogle}>
        <StartNewChat setOpen={openNewChatToogle} />
      </ModalLayout>
      <ModalLayout open={isOpenCreateGroup} setOpen={openCreateGroupToogle}>
        <CreateUpdateGroup setOpen={openCreateGroupToogle} />
      </ModalLayout>
    </div>
  );
};

export default Home;
