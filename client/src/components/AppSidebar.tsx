import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import UserInfo from "./UserInfo";
import Searchbar from "./Searchbar";
import ChatInitiateBtn from "./ChatInitiateBtn";
import NavigationBar from "./NavigationBar";
import ChatList from "./ChatList";

export function AppSidebar() {
  return (
    <Sidebar className=" backdrop-blur-2xl border-r border-white/5  w-105">
      <SidebarHeader>
        <h1>Side bar header</h1>
      </SidebarHeader>

      <div className="space-y-4 px-4 ">
        <ChatInitiateBtn />
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
      <SidebarFooter>
        <UserInfo />
      </SidebarFooter>
    </Sidebar>
  );
}
