import React from "react";
import {NavLink} from "react-router-dom";

const activeStyle = {
    color: "#F15B2A",
}

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/">Home</NavLink>
                {" | "}
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/courses">Courses</NavLink>
                {" | "}
                <NavLink style={({isActive}) =>
                    isActive ? activeStyle : undefined
                } to="/about">About</NavLink>
            </nav>
        </header>
    );
}
