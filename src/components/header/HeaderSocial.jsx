import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'

function HeaderSocial() {
    return (
        <div className='header__social'>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href='https://github.com' target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href='https://dribble.com' target="_blank" rel="noreferrer"> 
                <FaDribbble />
            </a>
        </div>
    )
}

export default HeaderSocial