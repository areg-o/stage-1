import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import type { IUser } from '@/api/userType';
import { UserCard } from '@/components/UserCard';
import { useModal } from '@/hooks/useModal';

interface UserListProps {
    users: IUser[];
}

export function UserList({ users }: UserListProps) {
    const { isOpen, handleModal } = useModal();
    const [selectedUser, setSelectedUser] = useState(users[0]);

    return (
        <div className="users">
            {users?.map((user) => (
                <ul
                    key={user.id}
                    onClick={() => {
                        handleModal();
                        setSelectedUser(user);
                    }}
                >
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
            {isOpen &&
                ReactDOM.createPortal(
                    <UserCard user={selectedUser} handleModal={handleModal} />,
                    document.body,
                )}
        </div>
    );
}
