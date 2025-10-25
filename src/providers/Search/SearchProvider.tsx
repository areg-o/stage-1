import { type PropsWithChildren, useState } from "react";

import { SearchContext } from "@/providers";

export const SearchProvider = ({
  children,
}: {
  children: PropsWithChildren;
}) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
