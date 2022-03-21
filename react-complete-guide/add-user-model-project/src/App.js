import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [users, setUsers] = useState([])

    const addUserHandler = (userName, userAge) => {
        setUsers((prevState) => {
            return [...prevState, {name: userName, age: userAge, id: Math.random().toFixed(5).toString()}]
        })
    }

    return (
        <>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={users}/>
        </>
    );
}

export default App;
