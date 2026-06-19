import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className=" backdrop-blur-2xl border-r border-white/5 ">
      <SidebarHeader>
        <h1>Side bar header</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sidebar Group Label</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <h1>Sidebar Footer</h1>
      </SidebarFooter>
    </Sidebar>
  );
}
