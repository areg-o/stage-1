import type { IUserData } from "@/types";

export function UserCard({ user }: IUserData) {
  return (
    <ul>
      <li>id: {user?.id}</li>
      <li>name: {user?.name}</li>
      <li>status: {user?.status}</li>
      <li>gender: {user?.gender}</li>
    </ul>
  );
}
