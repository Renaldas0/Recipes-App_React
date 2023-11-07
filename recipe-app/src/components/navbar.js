import { useState } from 'react';

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div className="navbar container">
            <a href="#!" className="logo"><span>Easy</span>_Recipes</a>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Recipes</a>
                <a href="#">Settings</a>
            </div>
            <div onClick={() => setShowSideBar(!showSideBar)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar;