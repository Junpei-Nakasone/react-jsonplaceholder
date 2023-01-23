import { TodosResponse } from "../../types/todos";

const FetchTodos = async (): Promise<TodosResponse> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';


    const res: TodosResponse = await fetch(apiUrl)
    .then(resp => resp.json());

    return (
        res
    )
}

export default FetchTodos;
