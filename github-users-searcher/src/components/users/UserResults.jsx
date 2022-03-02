import {useEffect, useContext} from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";


function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext)

    useEffect(() => {

        fetchUsers()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    if (!loading) {
        return (<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                )
            )}
        </div>)
    } else {
        return <Spinner/>
    }
}

export default UserResults;