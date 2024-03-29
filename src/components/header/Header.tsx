import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const ME = require('../../assets/aaron.PNG');

const Header: React.FC = () => {
  return (
    <header>
      <div className=".container header__container">
        <h5>Hello I'm</h5>
        <h1>Aaron Gao</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
            <img src={ME} alt="me" />
        </div>      

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header