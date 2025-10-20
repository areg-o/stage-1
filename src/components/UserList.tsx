import type { IUser } from '@/api/userType';
import { UserCard } from '@/components/UserCard';

interface IUserListArg<T> {
  data: IUser[];
}

export function UserList<T>(data: T) {
  return (
    <div className="users">
      <UserCard />
    </div>
  );
}
