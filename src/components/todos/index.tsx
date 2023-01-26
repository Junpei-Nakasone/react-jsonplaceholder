import { TodosResponse } from "../../types/todos";

const FetchTodos = async (userId: number): Promise<TodosResponse[]> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/?userId=' + String(userId);


    const res: TodosResponse[] = await fetch(apiUrl)
    .then(resp => resp.json());

    return (
        res
    )
}

export default FetchTodos;
