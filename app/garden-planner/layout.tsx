import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: { canonical: "https://kcgreenworks.com/garden-planner" },
};

export default function GardenPlannerLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
