import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Edit, Group, Search, User } from "lucide-react";
import UserInfo from "./UserInfo";
// import Searchbar from "./Searchbar";
import ChatInitiateBtn from "./ChatInitiateBtn";
import NavigationBar from "./NavigationBar";

export function AppSidebar() {
  return (
    <Sidebar className=" backdrop-blur-2xl border-r border-white/5 ">
      <SidebarHeader>
        <h1>Side bar header</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Sidebar Group Label</SidebarGroupLabel> */}
          <div className="s space-y-4">
            <ChatInitiateBtn />
            {/* <!-- Filter/Navigation Bar --> */}
            <NavigationBar />
            {/* <!-- Search --> */}
            {/* <Searchbar /> */}
          </div>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        {/* <h1>Sidebar Footer</h1> */}
        <UserInfo />
      </SidebarFooter>
    </Sidebar>
  );
}
