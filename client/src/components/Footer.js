import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/logo.svg';
import Facebook from '../assets/facebook-image.svg'
import LinkedIn from '../assets/linkedin-logo.svg'
import Twitter from '../assets/twitter-image.svg'
import Google from '../assets/google-logo.svg'

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="UpperFooter">
          <div className="LogoWarapper">
            <img src={Logo} className="Logo" alt="logo" />
          </div>
          <div className="Socials">
            <img src={Twitter} className="Facebook" alt="Twitter" />
            <img src={LinkedIn} className="Facebook" alt="LinkedIn" />
            <img src={Google} className="Facebook" alt="Google" />
            <img src={Facebook} className="Facebook" alt="Facebook" />
          </div>
        </div>
        <div className="FooterLine"/>
        <p className="Copyright">2020 IoT © All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;