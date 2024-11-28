import { NavHeader } from "@/components/layout/nav-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <NavHeader />
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
