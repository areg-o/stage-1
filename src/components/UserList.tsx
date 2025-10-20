import type { IUser } from '@/api/userType';

interface UserListProps {
  users: IUser[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id} className="user-data">
          <span>{user.id}</span>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
  );
}
