import { AppSidebar } from "@/components/app-sidebar";
import AppBreadcrumb from "@/components/layout/breadcrumb";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 justify-between pr-4">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadcrumb />
          </div>
          <ThemeCustomizer />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
