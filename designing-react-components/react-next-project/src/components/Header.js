const Header = () => {
    return (
        <div className="padT4 padB4">
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <img alt="SVCC Home Page" src="/images/SVCCLogo.png"/>
                </div>
                <div className="light">
                    <h4 className="header-title">
                        Bootcamp
                    </h4>
                </div>
                <div className="text-dark">
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