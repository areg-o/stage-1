import usersAPI from '@/api/users';
import type { IUser } from '@/api/userType';
import { UserList } from '@/components/UserList';
import { useFetch } from '@/hooks/useFetch';

export function Dashboard() {
    const { data, loading, error } = useFetch<IUser[]>({
        queryFn: () => usersAPI.getUsers(),
    });

    if (loading) return <div>Loading...</div>;
    if (error) return error.message;

    return (
        <>
            <UserList users={data || []} />
        </>
    );
}
