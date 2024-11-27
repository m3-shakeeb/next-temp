import { ThemeCustomizer } from "../theme-customizer";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import AppBreadcrumb from "./breadcrumb";

const DashboardNavbar = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 justify-between pr-4">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <AppBreadcrumb />
      </div>
      <ThemeCustomizer />
    </header>
  );
};

export default DashboardNavbar;
