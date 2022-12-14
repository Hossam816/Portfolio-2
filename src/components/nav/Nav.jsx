import React from 'react'
import './nav.css'
import { FaHome, FaUserAlt, FaBook, FaHeadphones,FaPhoneAlt } from 'react-icons/fa'
import { useState } from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><FaHome /></a>

            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><FaUserAlt /></a>

            <a href='#exerience'
            onClick={() => setActiveNav('#exerience')} className={activeNav === "#exerience" ? 'active' : ''}
            ><FaBook /></a>

            <a href='#service'
            onClick={() => setActiveNav('#service')} className={activeNav === "#service" ? 'active' : ''}
            ><FaHeadphones /></a>

            <a href='#contact'
            onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}
            ><FaPhoneAlt /></a>
        </nav>
    )
}

export default Nav