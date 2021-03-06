import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TypeMachine } from './TypeMachine';
import { Button } from '../app/guessForm/GuessForm';

const WinningDiv = styled.div`
    height: 100vh;
    width: 100%;
    padding: 5rem;
    background-color: black;
`
const RestartButton = styled(Button)`
    margin-top: 3rem;
    height: 150px;   
    &:hover {
        border: 2px solid #00FF41;
    }
    display: block;
    margin-left: auto;
    margin-right: auto;
`


export const WinningScreen = (props) => {

    const [showButton, setShowButton] = useState(false);
    const typedMessage = `Congratulations, you are the Oracle. You have won in ${props.guesses} guess${props.guesses === 1? '': 'es'}. Restart the game.....`

    useEffect(() => {    
        setTimeout(() => {
          setShowButton(true);
        }, 9000);
      }
    , []);

    return (
        <WinningDiv>
            <TypeMachine textToType={typedMessage} delay={100}/>
            {showButton ? <RestartButton type="submit" onClick={props.restart}>RESTART GAME</RestartButton> : null}
        </WinningDiv>
    );
}

