import usersAPI from '@/api/users';
import type { IUser } from '@/api/userType';
import { UserList } from '@/components/UserList';
import { useSearch } from '@/context/AppContext';
import { useFetch } from '@/hooks/useFetch';

export function Dashboard() {
    const { data, loading, error } = useFetch<IUser[]>({
        queryFn: () => usersAPI.getUsers(),
    });

    let users = data;

    const { searchText } = useSearch();
    if (searchText) {
        users = users?.filter((user) =>
            user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
        );
    }

    if (loading) return <div>Loading...</div>;
    if (error) return error.message;

    return (
        <>
            <UserList users={users || []} />
        </>
    );
}
