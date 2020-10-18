import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    // console.log(show);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                src={`${process.env.PUBLIC_URL}/logoss.png`}
                className="nav__logo nav__logo__left"
                alt=""
            />
            <img
                src={`${process.env.PUBLIC_URL}/logosj.png`}
                className="nav__logo nav__logo__right"
                alt=""
            />
        </div>
    );
}

export default Nav;
