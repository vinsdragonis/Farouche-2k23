import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.css';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    
    return (
        <header className={ `${ scroll ? "navbar scrolled" : "navbar" }` }>
            <span className="nav-logo">
                <Link className="nav-link" to="/">Farouche</Link>
            </span>
            <ul className={ `${toggle ? "nav active" : "nav" }` }>
                <li>
                    <Link className="nav-link" to="/about">About us</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/cultural">Cultural</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/updates">Updates</Link>
                </li>
                {/* <li>
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/register">Register</Link>
                </li> */}
            </ul>
            <button className="hamburger" onClick={ toggleNav }>
                { toggle ? <i className="ri-menu-2-line"></i> : <i className="ri-menu-line"></i> }
            </button>
        </header>
    );
}

export default Navbar;