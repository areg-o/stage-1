import type { IUser } from '@/api/userType';
import { useModal } from '@/hooks/useModal';

interface UserListProps {
    users: IUser[];
}

export function UserList({ users }: UserListProps) {
    const { state, open } = useModal();

    return (
        <>
            <div className="users">
                {users?.map((user) => (
                    <ul onClick={open} key={user.id}>
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
