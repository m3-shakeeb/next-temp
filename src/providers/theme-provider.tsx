"use client";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <>
      <NextThemesProvider {...props}>
        <TooltipProvider delayDuration={0}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </TooltipProvider>
      </NextThemesProvider>
    </>
  );
}
