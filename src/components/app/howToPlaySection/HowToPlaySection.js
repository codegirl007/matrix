import React from "react";
import styled from "styled-components";

export const MainSection = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0.4rem 0.4rem 0.7rem #404040;
  position: relative;
  padding: 0.5rem;
`;
export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 130%;
  color: #404040;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  position: absolute;
  top: 5%;
`;
const Ul = styled.ul`
  text-align: center;
  & > li {
    list-style: none;
    font-weight: bold;
    font-size: 0.9rem;
    line-height: 150%;
  }
`;

export const HowToPlaySection = () => {
  return (
    <>
      <MainSection>
        <H2>How to play</H2>
        <Ul>
          <li>Guess the secret number between 0 and 100.</li>
          <li>If you guess incorrect number, you will get a hint.</li>
          <li>If you guess correct number, you win!</li>
        </Ul>
      </MainSection>
    </>
  );
};
