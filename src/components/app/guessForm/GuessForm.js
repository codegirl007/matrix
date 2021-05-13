import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50%;
    font-size: 1.4rem;
    font-weight: 900;
`

export const StyledInput = styled.input`  
        width: 200px;
        height: 100%;
        background-color:#404040;
        color: #008F11;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 130%;        
        text-align: center;
        letter-spacing: 0.03em;
        border: 2px solid black;
        font-family: 'Orbitron', sans-serif;
        &::placeholder {
            color: #9c9c9c;
        }
        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }    
`

export const Button = styled.button`
    width: 300px;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: 0.05em;
    background-color:#008F11;
    border: 0;
    outline: none;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0.125rem 0.125rem #666;
    font-family: 'Orbitron', sans-serif;
    &:hover {
        background-color: black;
        color: #3dff2b;
        transition: all .300ms ease-in-out;
    }
    &: active {
        transform: translateY(4px);
    }
`


export const GuessForm = (props) => {

    return (
        <>
    <Form onSubmit={props.handleFormGuess}>
        <h3>Number between 0 and 100:</h3>
        <StyledInput    type="number"
                        min="0" 
                        max="100" 
                        placeholder="55" 
                        value = {props.value}
                        onChange={props.onChangedValue}/>
        <Button type="submit">guess</Button>
    </Form>
        </>
    );
}

