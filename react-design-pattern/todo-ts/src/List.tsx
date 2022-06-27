import {FC, memo} from 'react';
import Task from './Task';


export type TTodo = {
    id: number
    task: string
}

interface Props {
    todoList: TTodo[];
    handleDelete: any;
}

const List: FC<Props> = ({todoList, handleDelete}) => {

    return (
        <ul>
            {todoList.map((todo: TTodo) => (
                <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete}/>
            ))}
        </ul>
    )
}

export default memo(List);