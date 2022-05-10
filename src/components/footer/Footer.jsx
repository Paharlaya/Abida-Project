import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abida the worshippers</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FiFacebook/></a>
        <a href="https://instagram.com" target='_blank'><AiOutlineInstagram/></a>
        <a href="https://twitter.com" target='_blank'><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Abida the Worshippers Official</small>
      </div>
    </footer>
  )
}

export default Footer