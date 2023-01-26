import { UsersResponse } from "../../types/users";

const FetchUsers = async (): Promise<UsersResponse[]> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const res = await fetch(apiUrl);
    const json = await  res.json();

    return json;
};

export default FetchUsers;

