import { Link, useLocation } from "react-router-dom";

import { useState } from 'react';
import Sidebar from './sidebar';

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSideBar(false);
    }
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo"><span>Easy</span>_Recipes</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "nav-links active" : "nav-links"} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                    {/* <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Settings</a> */}
                </div>
                <div onClick={() => setShowSideBar(true)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSideBar && <Sidebar close={closeSidebar} links={links} />}

        </>
    )
}

export default NavBar;