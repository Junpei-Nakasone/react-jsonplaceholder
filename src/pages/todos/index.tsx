import { useEffect, useState } from "react";
import FetchTodos from "../../components/todos";
import { TodosResponse } from "../../types/todos";

const TodosPage = () => {
    const [todo, setTodo] = useState<TodosResponse>();

    useEffect(() => {
        (async () => {
            let todoData = await FetchTodos();

            setTodo(todoData)
        })()
    }, [])


    return (
        <>
        <div>TodosPage</div>
          <h3>Todo ID: {todo?.id}</ h3>
          <h3>User ID: {todo?.userId}</ h3>
          <h3>{todo?.title}</ h3>
        </>
    )
}

export default TodosPage;
