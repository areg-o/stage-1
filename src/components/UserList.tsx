import React from 'react';
import { UserCard } from '@/components/UserCard';
import type { IUser } from '@/api/userType'

interface IUserListArg<T> {
    data: IUser[];
}

export function UserList<T>(data: T) {
    return (
        <div className="users">
            <UserCard />
        </div>
    )
}