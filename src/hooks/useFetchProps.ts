import type { IUser } from "../api/userType";

export interface useFetchProps {
    queryFn(): Promise<string | IUser[]> | Promise<string | IUser> | Error
}