import type { Dispatch, SetStateAction } from "react";

export interface IOptions<T> {
  queryFn: () => Promise<T>;
  enabled?: boolean;
}

export interface IResult<K> {
  data: K | undefined;
  loading: boolean;
  error: Error | undefined;
  setQueryFunc: Dispatch<SetStateAction<() => Promise<K>>>;
}
