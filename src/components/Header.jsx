import React, { useState } from 'react';
import logo from "../assets/logo.png"
import "./Header.css"
import { Link } from "react-router-dom"; // If using React Router

function Header(props) {
    const [nav, setNav] = useState("home");
    return (
        <div>
            <div className='header'>
                {/* <img src={logo} className="logo" alt="logo" /> */}
                <ul className="header-menu">
                    {/* <li>Home</li>
                    <li>Programs</li>
                    <li>Why Us</li>
                    <li>Plans</li>
                    <li>Testimoidals</li> */}

                    <li onClick={() => setNav("home")}>
                        <Link className={nav === "home" ? "ActiveNavbar" : "navbar"} to="/">
                            Home
                        </Link>
                    </li>
                    <li onClick={() => setNav("Programs")}>
                        <Link
                            className={nav === "Programs" ? "ActiveNavbar" : "navbar"}
                            to="/programs"
                        >
                            Programs
                        </Link>
                    </li>
                    <li onClick={() => setNav("WhyUs")}>
                        <Link
                            className={nav === "WhyUs" ? "ActiveNavbar" : "navbar"}
                            to="/why-us"
                        >
                            Why Us
                        </Link>
                    </li>
                    {/* <li onClick={() => setNav("Plans")}>
                        <Link
                            className={nav === "Plans" ? "ActiveNavbar" : "navbar"}
                            to="/plans"
                        >
                            Plans
                        </Link>
                    </li> */}
                    <li onClick={() => setNav("Testimoidals")}>
                        <Link
                            className={nav === "Testimoidals" ? "ActiveNavbar" : "navbar"}
                            to="/testimoidals"
                        >
                            Testimoidals
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;