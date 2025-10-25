import { SearchProvider } from "@/providers";
import type { IAppProviderProps } from "@/types";

export function AppProvider({ children }: IAppProviderProps) {
  return <SearchProvider>{children}</SearchProvider>;
}
