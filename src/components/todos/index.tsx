import { TodosResponse } from "../../types/todos";

const FetchUsers = async (): Promise<TodosResponse> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';


    const res: TodosResponse = await fetch(apiUrl)
    .then(resp => resp.json());
    console.log(res)


    return (
        res
    )
}

export default FetchUsers;
