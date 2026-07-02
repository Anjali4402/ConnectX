import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import UserInfo from "./UserInfo";
import Searchbar from "./Searchbar";
import CreateChatSection from "./CreateChatSection";
import NavigationBar from "./NavigationBar";
import ChatList from "./ChatList";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar className=" backdrop-blur-2xl border-r border-white/5">
      <SidebarHeader className="border-b border-white/5 mb-4 ">
        <div className="flex items-center gap-2 ml-4 ">
          <Image
            src={"logo.svg"}
            width={38}
            height={38}
            className="rounded-full border-2 border-primary/20 "
            alt="Picture of the author"
          />

          <span className="text-lg text-primary tracking-tighter font-bold">
            ConnectX
          </span>
        </div>
      </SidebarHeader>

      <div className="space-y-4 px-4 ">
        <CreateChatSection />
        {/* <!-- Filter/Navigation Bar --> */}
        <NavigationBar />
        {/* <!-- Search --> */}
        <Searchbar />
      </div>

      <SidebarContent>
        <SidebarGroup className="px-4">
          <ChatList />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-0">
        <UserInfo role="user" />
      </SidebarFooter>
    </Sidebar>
  );
}
