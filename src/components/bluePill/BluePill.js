import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WelcomeDiv } from "../welcomeScreen/WelcomeScreen";

const BlackDiv = styled(WelcomeDiv)`
  font-size: 3rem;
`;
const RedPill = styled.img`
  width: 60px;
  cursor: pointer;
  margin-top: 3rem;
`;

export const BluePill = () => {
  return (
    <BlackDiv>
      I am very sorry, but there is only one option...
      <Link to="/app">
        <RedPill src="./images/redpill.png" />
      </Link>
    </BlackDiv>
  );
};
