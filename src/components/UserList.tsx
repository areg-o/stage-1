import { useEffect, useState } from "react";

import { Modal, UserCard } from "@/components";
import { useModal } from "@/hooks";
import type { IUser, UserListProps } from "@/types";

export function UserList({ users }: UserListProps) {
  const { isOpen, handleModal } = useModal();
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (users.length > 0 && !selectedUser) setSelectedUser(users[0]);
  }, [users]);

  return (
    <div className="users">
      {users?.map(user => (
        <ul
          key={user.id}
          onClick={() => {
            handleModal();
            setSelectedUser(user);
          }}
        >
          <li>id: {user?.id}</li>
          <li>name: {user?.name}</li>
        </ul>
      ))}
      <Modal isOpen={isOpen} onClose={handleModal}>
        <UserCard user={selectedUser} />
      </Modal>
    </div>
  );
}
