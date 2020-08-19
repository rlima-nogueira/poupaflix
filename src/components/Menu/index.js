import React from 'react';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';
import { Button } from '../Button';

import {Link } from 'react-router-dom';

export default function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo PoupaFlix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
                Tire suas dúvidas no PoupaChat
            </Button>
        </nav>
    );
}