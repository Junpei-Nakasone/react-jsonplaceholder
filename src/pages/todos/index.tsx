import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FetchTodos from "../../components/todos";
import { TodosResponse } from "../../types/todos";
import TodoItemList from "./todoItemList";

interface State {
    userId: number;
    userName: string;
};

const TodosPage = () => {
    const location = useLocation();
    console.log('location', location)
    const { userId, userName } = location.state as State;
    const [todos, setTodos] = useState<TodosResponse[]>();

    useEffect(() => {
        (async () => {
            let todoData = await FetchTodos(userId);

            setTodos(todoData)
        })()
    }, [])
    console.log(todos)

    return (
        <>
        {
            todos ? (
                <>
                <span><Link to={'/'}>back to All users</Link></span>
                <h2>{userName}'s All todos</h2>
                <ul>
                    {todos.map((todo, index) => { return (
                        <TodoItemList
                        title={todo.title} completed={todo.completed}
                            />
                    )
                    }
                    )}
                </ul>
                </>
            ) : (
                <>Loading...</>
            )
        }
        </>
    )
}

export default TodosPage;
