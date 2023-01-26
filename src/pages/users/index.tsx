import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    {users.map((user, index) => <li key={index}><Link to={`/users-todo`} state={{ userId: user.id, userName: user.name}}>{user.name}</Link></li>)}
                </ul>
                </>
            ) : (
                <h1>loading...</h1>
            )
          }
        </>
    )
}

export default UsersPage;
