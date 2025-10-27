import type { ReactNode } from "react";

import { SearchProvider } from "@/providers";

export function AppProvider({ children }: { children: ReactNode }) {
  return <SearchProvider>{children}</SearchProvider>;
}
