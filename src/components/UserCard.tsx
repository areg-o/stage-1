import type { IUser } from '@/api/userType';

interface IUserData {
    user: IUser;
    handleModal: () => void;
}

export function UserCard({ user, handleModal }: IUserData) {
    return (
        <div className="popUp">
            <div className="popUpBtns">
                <img onClick={handleModal} src="../../public/x.svg" alt="x" />
            </div>
            <ul className="popUpUl">
                <li>id: {user?.id}</li>
                <li>name: {user?.name}</li>
                <li>username: {user?.username}</li>
                <li>email: {user?.email}</li>
                <li>
                    <span>address</span>
                    <ul>
                        <li>street: {user?.address.street}</li>
                        <li>suite: {user?.address.suite}</li>
                        <li>city: {user?.address.city}</li>
                        <li>zipcode: {user?.address.zipcode}</li>
                        <li>
                            <span>geo</span>
                            <ul>
                                <li>lat: {user?.address.geo.lat}</li>
                                <li>lng: {user?.address.geo.lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>phone: {user?.phone}</li>
                <li>website: {user?.website}</li>
                <li>
                    <span>company</span>
                    <ul>
                        <li>name: {user?.company.name}</li>
                        <li>catchPhrase: {user?.company.catchPhrase}</li>
                        <li>bs: {user?.company.bs}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
