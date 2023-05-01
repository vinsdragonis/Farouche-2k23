import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

import './header.style.css';

function Home() {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450
    });

    sr.reveal('.header-title', { delay: 200, origin: "top" });
    sr.reveal('.header-sub-title', { delay: 300, origin: "top" });
    sr.reveal('.header-links', { delay: 400, origin: "top" });

    return (
        <div className="header">
            <h1 className="header-title">
                Hey everyone! Welcome to <span>Farouche</span> <span>2k23</span>
            </h1>
            <h2 className="header-sub-title">
                The hostel fest of <span>BMSCE</span>
            </h2>
            <div className="header-links">
                <Link className="header-link" to="/sports"><i className="ri-ping-pong-line"></i> Sport</Link>
                <Link className="header-link" to="/cultural"><i className="ri-music-line"></i> Culture</Link>
            </div>
        </div>
    );
}

export default Home;