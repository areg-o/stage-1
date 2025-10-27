import { useContext } from "react";

import { SearchContext } from "@/providers/Search/context/search";

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
