import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hellow I'm</h5>
                <h1>Hoso</h1>
                <h5 className='text-light'>front end developer</h5>
                
                <CTA />
                <HeaderSocial />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header