import { useEffect, useState } from "react";
import FetchUsers from "../../components/users";
import { UsersResponse } from "../../types/users";

const UsersPage = () => {

    const [users, setUsers] = useState<UsersResponse[]>();

    useEffect(() => {
        (async () => {
            const usersData = await FetchUsers();
            setUsers(usersData);
        })()
    }, []);

    return (
        <>
          {
            users ? (
                <>
                  <h2>All users:</h2>
                  <ul>
                    {users.map((user, index) => <li key={index}>{user.name}</li>)}
                </ul>
                </>
            ) : (
                <h1>NO</h1>
            )
          }
        </>
    )
}

export default UsersPage;
