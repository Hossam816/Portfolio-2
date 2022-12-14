import React from 'react'
import './nav.css'
import { FaHome, FaUserAlt, FaBook, FaHeadphones,FaPhoneAlt } from 'react-icons/fa'

function Nav() {
    return (
        <nav>
            <a href='#' className='active'><FaHome /></a>
            <a href='#about'><FaUserAlt /></a>
            <a href='#exerience'><FaBook /></a>
            <a href='#service'><FaHeadphones /></a>
            <a href='#contact'><FaPhoneAlt /></a>
        </nav>
    )
}

export default Nav