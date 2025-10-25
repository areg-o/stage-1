import { useEffect } from "react";

import usersAPI from "@/api/users";
import { UserList } from "@/components";
import { useFetch, useSearch } from "@/hooks";
import type { IUser } from "@/types";

export function Dashboard() {
  const { data, loading, error, setQueryFunc } = useFetch<IUser[]>({
    queryFn: () => usersAPI.getUsers(),
  });

  const { searchText } = useSearch();

  useEffect(() => {
    if (searchText) {
      setQueryFunc(() => () => usersAPI.search(searchText));
    }
  }, [searchText]);

  if (loading) {
    return (
      <div>
        <img src="spinner.gif" alt="Spinner" />
      </div>
    );
  }

  if (error) return error.message;

  return <UserList users={data || []} />;
}
