"use client";
import { BaseColor } from "@/config/base-colors";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Config = {
  theme: BaseColor["name"];
  radius: number;
};

type ConfigState = {
  config: Config;
  setConfig: (newConfig: Partial<Config>) => void;
  resetConfig: () => void;
};

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      config: {
        theme: "zinc",
        radius: 0.5,
      },
      setConfig: (newConfig) =>
        set((state) => ({
          config: { ...state.config, ...newConfig },
        })),
      resetConfig: () =>
        set(() => ({
          config: { theme: "zinc", radius: 0.5 },
        })),
    }),
    {
      name: "config-store",
    }
  )
);
