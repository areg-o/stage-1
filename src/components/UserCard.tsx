import type { IUser } from '@/api/userType';

interface IUserData {
    user: IUser;
}

export function UserCard({ user }: IUserData) {
    return (
        <div className="popUp">
            <ul>
                <li>id: {user.id}</li>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>email: {user.email}</li>
                <li>
                    address
                    <ul>
                        <li>street:</li>
                        <li>suite:</li>
                        <li>city:</li>
                        <li>zipcode:</li>
                        <li>
                            geo
                            <ul>
                                <li>lat</li>
                                <li>lng</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>phone:</li>
                <li>website:</li>
                <li>
                    company
                    <ul>
                        <li>name</li>
                        <li>catchPhrase</li>
                        <li>bs</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
