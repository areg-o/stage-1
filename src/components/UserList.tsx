import type { IUser } from '@/api/userType';

interface UserListProps {
    users: IUser[];
}

export function UserList({ users }: UserListProps) {
    return (
        <div className="users">
            {users.map((user) => (
                <ul
                    key={user.id}
                    className="user-data bg-white shadow-md rounded-lg p-6 mb-4 space-y-2 border border-gray-200"
                >
                    <li className="text-gray-500 text-sm font-semibold">
                        <span className="text-gray-900">{user.id}</span>
                    </li>
                    <li className="text-gray-500 text-sm font-semibold">
                        <span className="text-gray-900">{user.name}</span>
                    </li>
                    <li className="text-gray-500 text-sm font-semibold">
                        <span className="text-gray-900">{user.email}</span>
                    </li>
                </ul>
            ))}
        </div>
    );
}
