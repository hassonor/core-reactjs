import {Link, Routes, Route, Outlet} from "react-router-dom"

const Welcome = (): JSX.Element => {
    return (
        <section>
            <div>
                <h1>main page</h1>
                <Link to="new-user">New User</Link>
                <Outlet/>
                <Routes>
                    <Route path="new-user" element={<h1>Hello, New User!</h1>}/>
                </Routes>
            </div>
        </section>)
};

export default Welcome;
