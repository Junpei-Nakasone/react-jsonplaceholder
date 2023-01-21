import { useEffect, useState } from "react";
import UsersComponent from "../../components/todos";
import { TodosResponse } from "../../types/todos";
import FetchUsers from "../../components/todos";

const UsersPage = () => {
    const [todo, setTodo] = useState<TodosResponse>();

    useEffect(() => {
        (async () => {
            let todoData = await FetchUsers();

            setTodo(todoData)
        })()
    }, [])


    return (
        <>
        <div>TodosPage</div>
          <h3>{todo?.id}</ h3>
          <h3>{todo?.title}</ h3>
        </>
    )
}

export default UsersPage;
