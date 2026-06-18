import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Side bar header</h1>
      </SidebarHeader>
      <SidebarContent className="bg-green-300">
        <SidebarGroup>
          <SidebarGroupLabel>Sidebar Group Label</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <h1>Sidebar Footer</h1>
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
