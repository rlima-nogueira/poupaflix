import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';


function Footer() {
  return (
    <FooterBase>
         <Link to="/">
                <img className="Logo" src={Logo} alt="Logo PoupaFlix"/>
        </Link>
    </FooterBase>
  );
}

export default Footer;
