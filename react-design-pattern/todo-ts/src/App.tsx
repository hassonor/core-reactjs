import {useState, useEffect, useMemo, useCallback} from 'react';
import List, {TTodo} from './List';


const initialTodos = [
    {id: 1, task: "Programming Python"},
    {id: 2, task: "Writing Tests"}
]

function App() {
    const [todoList, setTodoList] = useState(initialTodos)
    const [task, setTask] = useState('')
    const [term, setTerm] = useState('')

    const printTodoList = useCallback(() => {
        console.log('Changing todoList', todoList)
    }, [todoList])


    useEffect(() => {
        printTodoList()
    }, [todoList, printTodoList])

    const handleCreate = () => {
        const newTodo = {
            id: Date.now(),
            task
        }

        setTodoList([...todoList, newTodo])
        setTask('')
    }

    const handleSearch = () => {
        setTerm(task)
    }

    const handleDelete = useCallback((taskId: number) => {
        const newTodoList = todoList.filter((todo: TTodo) => todo.id !== taskId)
        setTodoList(newTodoList)
    }, [todoList])

    const filteredTodoList = useMemo(() => todoList.filter((todo: TTodo) => {
        return todo.task.toLowerCase().includes(term.toLowerCase())
    }), [term, todoList])

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleCreate}>Create</button>
            <button onClick={handleSearch}>Search</button>
            <List todoList={filteredTodoList} handleDelete={handleDelete}/>
        </div>
    )
}

export default App