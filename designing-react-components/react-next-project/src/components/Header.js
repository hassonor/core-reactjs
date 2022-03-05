import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import Image from 'next/image'
import withAuth from "./withAuth";

const Header = ({loggedInUser, setLoggedInUser}) => {
    const {theme} = useContext(ThemeContext)

    function LoggedIn({loggedInUser, setLoggedInUser}) {
        return (
            <div>
                <span>Logged in as {loggedInUser}</span>&nbsp;&nbsp;
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        setLoggedInUser("");
                    }}
                >
                    Logout
                </button>
            </div>
        );
    }

    function NotLoggedIn({loggedInUser, setLoggedInUser}) {
        return (
            <button
                className="btn-secondary"
                onClick={(e) => {
                    e.preventDefault();
                    const username = window.prompt("Enter Login Name:", "");
                    setLoggedInUser(username);
                }}
            >
                Login
            </button>
        );
    }

    return (
        <div className="padT4 padB4">
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <Image alt="SVCC Home Page" src="/images/SVCClogo.png" width="100" height="25"/>
                </div>
                <div className="light">
                    <h4 className="header-title">
                        Bootcamp
                    </h4>
                </div>
                <div className={
                    theme === "light" ? "" : "text-info"
                }>
                    {loggedInUser && loggedInUser.length > 0 ?
                        <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> :
                        <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}
                </div>
            </div>
        </div>
    )
}

export default withAuth(Header);