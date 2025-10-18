import usersAPI from '@/api/users';
import type { IUser } from '@/api/userType';
import { useFetch } from '@/hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch<IUser[]>({
    queryFn: () => usersAPI.getUsers(),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export default App;
