import { useEffect, useState } from "react";

import type { IOptions, IResult } from "@/types";

export function useFetch<T>({
  queryFn,
  enabled = true,
}: IOptions<T>): IResult<T> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | undefined>();
  const [queryFunc, setQueryFunc] = useState(() => queryFn);

  useEffect(() => {
    if (!enabled) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        setError(undefined);
        const resp = await queryFunc();
        setData(resp);
      } catch (e: any) {
        setError(e as Error);
        setData(undefined);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [enabled, queryFunc]);

  return { data, loading, error, setQueryFunc };
}
