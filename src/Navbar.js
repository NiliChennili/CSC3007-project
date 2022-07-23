import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
    showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                COVID-19 Dashboard
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/milestone1' className='nav-links' onClick={closeMobileMenu}>
                            Milestone 1
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/milestone2' className='nav-links' onClick={closeMobileMenu}>
                            Milestone 2
                        </Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar