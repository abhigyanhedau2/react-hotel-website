import React, {useState} from 'react';
import logo from '../../assets/Header/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setMenuIsOpen(prev => !prev);
    }

    return (
        <div className="header-wrapper">
            <div className="logo">
                <div className="logo-wrapper">
                    <Link to="/"><img src={logo} alt="The Royal Palace Logo" /></Link>
                </div>
            </div>
            <div className={`responsive-list ${menuIsOpen && 'active'}`}>
                <ul className='list'>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/">Home</Link></li>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/booking">Booking</Link></li>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/about">About</Link></li>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/reviews">Reviews</Link></li>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/contact">Contact Us</Link></li>
                    <li className='list-item' onClick={toggleMenuHandler}><Link to="/admin">Admin Login</Link></li>
                </ul>
            </div>
            <div className="nav-links">
                <div className="non-responsive-list">
                    <ul className='list left-list'>
                        <li className='list-item'><Link to="/">Home</Link></li>
                        <li className='list-item'><Link to="/booking">Booking</Link></li>
                        <li className='list-item'><Link to="/about">About</Link></li>
                        <li className='list-item'><Link to="/reviews">Reviews</Link></li>
                        <li className='list-item'><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <ul className='list right-list'>
                        <li className='list-item'><Link to="/admin">Admin Login</Link></li>
                    </ul>
                </div>
            </div>
            <div className='hamburger-menu' onClick={toggleMenuHandler} ><i className='fa-solid fa-bars'></i></div>
        </div>
    )
}

export default Header