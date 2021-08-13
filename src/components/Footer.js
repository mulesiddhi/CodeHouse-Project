import './Footer.css'

import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer' id='contact' >
            <div className='fbox1'>
            <h1>CodeHouse</h1>
            <h3>Technical Community</h3>
            <ul classname='ilist'>
                <li>
                <Link to={{ pathname: "/" }}  className='flinks' >
                <i class="fab fa-instagram fa-2x"></i> 
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "/" }}  className='flinks' >
                <i class="fab fa-linkedin-in fa-2x"></i>
                </Link>
                </li>
                <li>
                <Link to={{ pathname: "/" }} className='flinks' >
                <i class="fab fa-discord fa-2x"></i>
                </Link>
                </li>
            </ul>
            </div>
            <div className='fbox2'>
            <h2>Contact Us</h2>
            <div className='address'>
            <h3><i class="fas fa-map-marker-alt "></i> Lorem ipsum dolor sit amet </h3>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
            </div>
            <div>
                <h3><i class="fas fa-envelope"></i>  codehouse@mail.com</h3>
            </div>
            </div>
        </div>
    )
}

export default Footer
