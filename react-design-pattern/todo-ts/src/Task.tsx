import {FC, memo} from 'react';

interface Props {
    id: number
    task: string
    handleDelete: any;
}

const Task: FC<Props> = ({id, task, handleDelete}) => {

    return (
        <li>{task}
            <button onClick={() => handleDelete(id)}>X</button>
        </li>
    )
}

export default memo(Task);