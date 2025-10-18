import { useEffect, useState } from 'react';

interface IOptions<T> {
  queryFn(): Promise<T>;
}

interface IResult<K> {
  data: K | undefined;
  loading: boolean;
  error: Error | undefined;
}

export function useFetch<T>({ queryFn }: IOptions<T>): IResult<T> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await queryFn();
        setData(resp);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}
