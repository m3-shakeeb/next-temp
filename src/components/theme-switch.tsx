"use client";

import { useConfigStore } from "@/hooks/use-config";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

export function ThemeSwitcher() {
  const { config } = useConfigStore();
  const segment = useSelectedLayoutSegment();
  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });
    const theme = segment === "themes" ? config.theme : null;
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [segment, config]);

  return null;
}
