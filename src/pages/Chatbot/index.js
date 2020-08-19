import React from 'react';

import '../../components/Menu';

import Logo from '../../assets/img/Logo.png';


import {Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Pouporquinho from '../../assets/img/chat.png';
import { ImageChat, Container, ImageContainer } from './styles';
import { Button } from '../../components/Button';



export default function Chatbot(){
    return(
        <Container>
        <ImageContainer>
            <nav className="Menu">
            <Link to="/">
                <img  className="Logo" src={Logo} alt="Logo PoupaFlix"/>
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/"> 
                Voltar para página inicial
            </Button>

            </nav>

            <ImageChat src={Pouporquinho} alt="Pouporquinho" />
           
        </ImageContainer>  
        </Container>
        
        
    )
}