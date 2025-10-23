import type { IUser } from '@/api/userType';

interface UserListProps {
    users: IUser[];
}

export function UserList({ users }: UserListProps) {
    return (
        <>
            <div className="users">
                {users?.map((user) => (
                    <ul key={user.id}>
                        {/* {state && <UserCard user={user} />} */}
                        <li>
                            <div>
                                <span>ID:</span>
                                <span>{user.id}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Имя:</span>
                                <span>{user.name}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>Email:</span>
                                <span>{user.email}</span>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}
