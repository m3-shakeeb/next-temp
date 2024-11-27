import siteInfo from "@/config/site-info";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[url('/images/hero.avif')] min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover bg-background">
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
