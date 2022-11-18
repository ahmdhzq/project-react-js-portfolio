import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Ahmad_Haziq</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/ahmad.haziq.16503"><FaFacebookF /></a>
                <a href="https://www.instagram.com/ahmd_haziqqq/"><FiInstagram /></a>
                <a href="https://twitter.com/Ahmadha24700995"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>Copyright 2022 &copy; Ahmad_Haziq. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
