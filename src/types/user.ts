export interface IUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface ICharacter {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: IUser[];
}

export interface UserListProps {
  users: IUser[] | [];
}

export interface IUserData {
  user: IUser | null;
}
