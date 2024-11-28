import { NavHeader } from "@/components/layout/nav-header";
import siteInfo from "@/config/site-info";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/b2bhomeMap.png')] h-screen bg-fixed bg-center bg-cover p-4 md:p-10 bg-background ">
      <NavHeader />
      <div className="w-full h-full backdrop-blur flex flex-col items-center justify-center ">
        {children}
        <p className="mt-4 text-sm">
          © 2024 - {siteInfo.name} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default layout;
