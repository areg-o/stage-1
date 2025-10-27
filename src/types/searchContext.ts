import type { Dispatch, SetStateAction } from "react";

export interface ISearchContext {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}
