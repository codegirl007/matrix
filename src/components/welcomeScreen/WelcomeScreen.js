import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WelcomeDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.03em;
  font-size: 1rem;
  background-color: black;
  color: #00ff41;
`;

const Heading1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.2;
`;
const Morpheus = styled.div`
  position: relative;
`;

{
  /* Use better naming how to descript element, for example RedPillImage, when developer see code and just Red, he can't recognize it for the first time what is it */
}
export const Red = styled.img`
  position: absolute;
  top: 70%;
  left: 13%;
  width: 60px;
  cursor: pointer;
`;

{
  /* same  */
}
const Blue = styled.img`
  position: absolute;
  top: 70%;
  right: 13%;
  width: 60px;
  transform: rotateY(180deg);
  cursor: pointer;
`;

export const WelcomeScreen = () => {
  return (
    <WelcomeDiv>
      <Heading1>
        CHOOSE WISELY. <br />
        <span style={{ color: "red" }}>Red pill</span> is gonna start the game.{" "}
        <br />
        <span style={{ color: "blue" }}>Blue pill</span> is gonna show you that
        you are running out of life choices....{" "}
      </Heading1>
      <Morpheus>
        <img src="./images/morpheus.jpg" />
        <Link to="/app">
          <Red src="./images/redpill.png" />
        </Link>
        <Link to="/bluePill">
          <Blue src="./images/bluepill.png" />
        </Link>
      </Morpheus>
    </WelcomeDiv>
  );
};
