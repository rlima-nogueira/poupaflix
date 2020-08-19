import React from 'react';

import Menu from'../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 1;
    background-color: var(--white);
    color: #7b9c2c;
    padding-top: 100px;
    padding-right: 5%;
    padding-left: 5%;
`;

export default function PageDefault({children}){
    return(

        <>
           
            <Menu />
                <Main>
                    { children }
                </Main>
            <Footer />
            
        </>

    );
}