import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/ahmdhzq18/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/ahmdhzq" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/ahmd_haziqqq/" target="_blank"><BsInstagram/></a>
        </div>
    );
}

export default HeaderSocials;
