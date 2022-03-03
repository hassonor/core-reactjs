import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import Image from 'next/image'

const Header = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="padT4 padB4">
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <Image alt="SVCC Home Page" src="/images/SVCCLogo.png" width="100" height="25"/>
                </div>
                <div className="light">
                    <h4 className="header-title">
                        Bootcamp
                    </h4>
                </div>
                <div className={
                    theme === "light" ? "" : "text-info"
                }>
                    Hello Mr. Hasson &nbsp;&nbsp;
                    <span>
                    <a href="#">Logout</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;