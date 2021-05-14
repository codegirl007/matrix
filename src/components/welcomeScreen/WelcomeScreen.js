import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const WelcomeDiv = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.03em;
    font-size: 1rem;
    background-color: black;
    color: #00FF41;
`

const Heading1 = styled.h1`
    margin-bottom: 3rem;
`

export const WelcomeScreen = () => {
    return (
        <WelcomeDiv>  
                   <Heading1>Click on Morpheus to start the game</Heading1>
                   <Link to="/app"><img src="./images/morpheus.jpg"/></Link>
          
        </WelcomeDiv>
    )
}
