import type { IUser } from '@/api/userType';
import { UserCard } from '@/components/UserCard';
import { useModal } from '@/hooks/useModal';

interface UserListProps {
    users: IUser[];
    searchText: string;
}

export function UserList({ users, searchText }: UserListProps) {
    users = searchText
        ? users.filter((user) => user.name.toLowerCase().includes(searchText.toLowerCase()))
        : users;

    const { state, open } = useModal();

    return (
        <>
            <div className="users">
                {users?.map((user) => (
                    <ul
                        onClick={open}
                        key={user.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] flex flex-col mb-4"
                    >
                        {state && <UserCard user={user} />}
                        <li className="p-4 border-b border-gray-200 last:border-b-0">
                            <div className="flex flex-row items-center space-x-4">
                                <span className="text-sm font-semibold text-gray-500 min-w-[2.5rem]">
                                    ID:
                                </span>
                                <span className="font-medium text-gray-900 truncate">
                                    {user.id}
                                </span>
                            </div>
                        </li>
                        <li className="p-4 border-b border-gray-200 last:border-b-0">
                            <div className="flex flex-row items-center space-x-4">
                                <span className="text-sm font-semibold text-gray-500 min-w-[2.5rem]">
                                    Имя:
                                </span>
                                <span className="font-medium text-gray-900 truncate">
                                    {user.name}
                                </span>
                            </div>
                        </li>
                        <li className="p-4 border-b border-gray-200 last:border-b-0">
                            <div className="flex flex-row items-center space-x-4">
                                <span className="text-sm font-semibold text-gray-500 min-w-[2.5rem]">
                                    Email:
                                </span>
                                <span className="font-medium text-gray-900 truncate">
                                    {user.email}
                                </span>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}
