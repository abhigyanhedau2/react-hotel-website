import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr />
            <div className="social-media-icons">
                <a href="https://www.facebook.com/radissonblu/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/radissonblu/?hl=en" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/radissonblu?lang=en" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.google.com/maps/place/Radisson+Blu+Pune+Hinjawadi/@18.583876,73.7352347,17z/data=!3m1!4b1!4m8!3m7!1s0x3bc2bbe691c8d803:0x1ac30e73f856d9b4!5m2!4m1!1i2!8m2!3d18.583871!4d73.7397194" target="_blank" rel="noreferrer" ><i className="fa-solid fa-location-dot"></i></a>
            </div>
            <div className="copyright-text">
                <p>Made by Abhigyan Hedau</p>
            </div>
        </div>
    )
}

export default Footer