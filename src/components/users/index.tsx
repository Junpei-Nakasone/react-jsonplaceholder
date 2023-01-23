import { UsersResponse } from "../../types/users";

const FetchUsers = async (): Promise<UsersResponse[]> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const res: UsersResponse[] = await fetch(apiUrl).then(res => res.json());

    return res;
};

export default FetchUsers;

