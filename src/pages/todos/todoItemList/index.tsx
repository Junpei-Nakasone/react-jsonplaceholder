interface TodoItemListProps {
    title: string;
    completed: boolean;
};

const TodoItemList = (props: TodoItemListProps) => {
    return (
        <div>
            <span>{props.title}</span>:&nbsp;
            {props.completed ? (<span>already completed</span>): (<span>not yet</span>)}
            <br /><br />
        </div>
    )
};

export default TodoItemList;
