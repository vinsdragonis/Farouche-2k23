/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './footer.style.css';

function Home() {
    return (
        <div className="footer">
            <span>Check us out at</span>
            <div className="footer-links">
                <a className="footer-link" href="#"><i className="ri-facebook-circle-line"></i></a>
                <a className="footer-link" href="#"><i className="ri-instagram-line"></i></a>
                <a className="footer-link" href="#"><i className="ri-twitter-line"></i></a>
            </div>
        </div>
    );
}

export default Home;